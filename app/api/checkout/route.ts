import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { artPieceId } = await request.json();

    const artPiece = await prisma.artPiece.findUnique({
      where: { id: artPieceId },
      include: { artist: { select: { name: true } } },
    });

    if (!artPiece) {
      return NextResponse.json({ error: "Art piece not found" }, { status: 404 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: artPiece.currency,
            product_data: {
              name: artPiece.title,
              description: artPiece.description ?? undefined,
            },
            unit_amount: artPiece.priceCents,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/art/${artPiece.id}?success=1`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/art/${artPiece.id}?cancelled=1`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
