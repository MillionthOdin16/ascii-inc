export const metadata = {
  title: "About - ASCII Inc",
  description: "Learn about ASCII Inc, the marketplace for unique character-based artwork.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Header */}
      <header className="border-b border-green-900 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <span className="text-xl font-bold text-green-300">ASCII INC</span>
          <nav className="flex gap-6 text-sm">
            <a href="/" className="hover:text-green-200 transition-colors">Home</a>
            <a href="/art" className="hover:text-green-200 transition-colors">Gallery</a>
            <a href="/about" className="text-green-300">About</a>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* ASCII art banner */}
        <div className="border border-green-900 rounded-lg p-8 mb-12 bg-zinc-950 text-center">
          <pre className="text-green-500 text-xs leading-relaxed inline-block">{`
  ██████╗██╗  ██╗ █████╗ ███╗   ███╗██╗  ██╗
 ██╔════╝██║  ██║██╔══██╗████╗ ████║██║ ██╔╝
 ██║     ███████║███████║██╔████╔██║█████╔╝
 ██║     ██╔══██║██╔══██║██║╚██╔╝██║██╔═██╗
 ╚██████╗██║  ██║██║  ██║██║ ╚═╝ ██║██║  ██╗
  ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝
          `}</pre>
        </div>

        <h1 className="text-3xl font-bold text-green-300 mb-8">About ASCII Inc</h1>

        <section className="space-y-6 text-green-400 mb-12">
          <p>
            ASCII Inc is a curated marketplace for character-based artwork. We believe
            that text is art -- that the right arrangement of symbols can evoke emotion,
            tell stories, and capture the essence of subjects in ways pixels cannot.
          </p>
          <p>
            Every piece in our gallery is created by skilled artists who have mastered the
            craft of working within character constraints. No images, no fills -- just
            characters arranged with intention.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-green-300 mb-4">How It Works</h2>
          <div className="border border-green-900 rounded-lg p-6 bg-zinc-950 space-y-4">
            <div className="flex gap-4">
              <span className="text-green-600 font-bold">01.</span>
              <div>
                <p className="text-green-300 font-bold">Browse the Gallery</p>
                <p className="text-green-500 text-sm">
                  Explore our collection of ASCII art pieces. Each is rendered in monospace
                  and available at multiple sizes.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-green-600 font-bold">02.</span>
              <div>
                <p className="text-green-300 font-bold">Purchase with Confidence</p>
                <p className="text-green-500 text-sm">
                  Buy securely via Stripe. You receive the raw ASCII file plus a
                  high-resolution rendered version.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-green-600 font-bold">03.</span>
              <div>
                <p className="text-green-300 font-bold">Own a Digital Original</p>
                <p className="text-green-500 text-sm">
                  Your purchase includes a certificate of authenticity and the artist
                  details for your collection records.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-green-300 mb-4">Artist Submissions</h2>
          <p className="text-green-400 mb-6">
            We are actively recruiting talented ASCII artists. If you create character-based
            artwork and want to sell it through our platform, we would love to hear from you.
          </p>
          <div className="border border-green-900 rounded-lg p-6 bg-zinc-950">
            <h3 className="text-green-300 font-bold mb-4">Submission Guidelines</h3>
            <ul className="text-green-500 text-sm space-y-2">
              <li>Format: Plain text files (.txt) or ANSI-encoded (.ans)</li>
              <li>Preferred dimensions: 80x24 (classic terminal) or 120x40 (wide)</li>
              <li>Theme: Open -- portraits, landscapes, abstracts, tributes all welcome</li>
              <li>Your work must be original and not AI-generated</li>
              <li>Include a short artist bio and your preferred handle/name</li>
            </ul>
            <p className="text-green-600 text-sm mt-4">
              Commission rate: 80% of sale price goes to the artist.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-green-300 mb-4">The Team</h2>
          <div className="border border-green-900 rounded-lg p-6 bg-zinc-950">
            <p className="text-green-400">
              ASCII Inc was founded by a small team of engineers and designers who
              appreciate the beauty of constrained creativity. We are building tools
              that make it easier for ASCII artists to reach collectors who value
              the craft.
            </p>
            <p className="text-green-600 text-sm mt-4">
              Located in Virginia, USA. We ship everywhere.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-green-900 px-6 py-8 mt-16">
        <div className="max-w-3xl mx-auto text-center text-green-700 text-sm">
          <a href="/" className="hover:text-green-400 transition-colors">Back to Gallery</a>
        </div>
      </footer>
    </div>
  );
}
