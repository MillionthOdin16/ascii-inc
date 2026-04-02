# Ascii Inc.

AI-assisted ASCII art marketplace -- buy and sell distinctive character-based artwork.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL (Prisma ORM)
- **Payments**: Stripe
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Set up database
npx prisma migrate dev

# Start development server
npm run dev
```

## Project Structure

```
/app            # Next.js App Router pages
/components     # Reusable React components
/lib            # Utilities, API clients, shared logic
/prisma         # Database schema and migrations
/public         # Static assets
/styles         # Global styles and Tailwind config
```

## Development

- `npm run dev` -- Start dev server on http://localhost:3000
- `npm run build` -- Production build
- `npm run lint` -- ESLint
- `npm run typecheck` -- TypeScript checks

## License

MIT
