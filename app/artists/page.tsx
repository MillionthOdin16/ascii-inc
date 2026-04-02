export const metadata = {
  title: "For Artists - ASCII Inc",
  description: "Submit your ASCII art to ASCII Inc and reach collectors worldwide.",
};

export default function Artists() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <header className="border-b border-green-900 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <span className="text-xl font-bold text-green-300">ASCII INC</span>
          <nav className="flex gap-6 text-sm">
            <a href="/" className="hover:text-green-200 transition-colors">Home</a>
            <a href="/art" className="hover:text-green-200 transition-colors">Gallery</a>
            <a href="/about" className="hover:text-green-200 transition-colors">About</a>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-green-600 text-sm mb-2">// join the artists</p>
          <h1 className="text-3xl font-bold text-green-300 mb-4">For ASCII Artists</h1>
          <p className="text-green-500 max-w-lg mx-auto">
            Earn money doing what you love. Sell your character-based artwork to collectors around the world.
          </p>
        </div>

        <div className="border border-green-900 rounded-lg p-8 bg-zinc-950 mb-12">
          <h2 className="text-xl font-bold text-green-300 mb-6 text-center">Why Sell on ASCII Inc?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-green-300 font-bold mb-2">80% Commission</p>
              <p className="text-green-500 text-sm">
                Keep 80% of every sale. We take a 20% platform fee to cover Stripe processing and hosting.
              </p>
            </div>
            <div>
              <p className="text-green-300 font-bold mb-2">Direct to Collector</p>
              <p className="text-green-500 text-sm">
                No middlemen. Collectors buy directly from you, and payments are sent to your Stripe Connect account.
              </p>
            </div>
            <div>
              <p className="text-green-300 font-bold mb-2">Global Reach</p>
              <p className="text-green-500 text-sm">
                We handle the storefront, payments, and delivery. You focus on creating art.
              </p>
            </div>
            <div>
              <p className="text-green-300 font-bold mb-2">Fair Pricing</p>
              <p className="text-green-500 text-sm">
                You set your prices. ASCII Inc does not cap or minimum-price your work.
              </p>
            </div>
          </div>
        </div>

        <div className="border border-green-900 rounded-lg p-6 bg-zinc-950 mb-12">
          <h2 className="text-lg font-bold text-green-300 mb-4">Submission Requirements</h2>
          <ul className="text-green-500 text-sm space-y-2">
            <li><span className="text-green-600">&#9632;</span> Original work only (no AI generation)</li>
            <li><span className="text-green-600">&#9632;</span> Plain text (.txt) or ANSI (.ans) format</li>
            <li><span className="text-green-600">&#9632;</span> Minimum size: 40 characters wide</li>
            <li><span className="text-green-600">&#9632;</span> Maximum size: 200 characters wide</li>
            <li><span className="text-green-600">&#9632;</span> Include artist handle/bio (max 200 chars)</li>
            <li><span className="text-green-600">&#9632;</span> Optionally include suggested dimensions</li>
          </ul>
        </div>

        <div className="text-center">
          <p className="text-green-600 text-sm mb-4">
            Applications are reviewed within 3-5 business days.
          </p>
          <p className="text-green-500">
            To apply, reach out via the contact information on our{" "}
            <a href="/about" className="text-green-400 hover:underline">About page</a>.
          </p>
        </div>
      </main>

      <footer className="border-t border-green-900 px-6 py-8 mt-16">
        <div className="max-w-3xl mx-auto text-center text-green-700 text-sm">
          <a href="/" className="hover:text-green-400 transition-colors">Back to Gallery</a>
        </div>
      </footer>
    </div>
  );
}
