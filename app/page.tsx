export default function Home() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* ASCII Header */}
      <header className="border-b border-green-900 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <pre className="text-xs leading-none hidden sm:block">{`
 ██████╗ ██████╗ ██████╗ ███████╗
██╔════╝██╔═══██╗██╔══██╗██╔════╝
██║     ██║   ██║██║  ██║█████╗
██║     ██║   ██║██║  ██║██╔══╝
╚██████╗╚██████╔╝██████╔╝███████╗
 ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝`}</pre>
          <span className="text-xl font-bold text-green-300 sm:hidden">ASCII INC</span>
          <nav className="flex gap-6 text-sm">
            <a href="/art" className="hover:text-green-200 transition-colors">Browse</a>
            <a href="/about" className="hover:text-green-200 transition-colors">About</a>
            <a href="/artists" className="hover:text-green-200 transition-colors">For Artists</a>
            <span className="text-green-800">|</span>
            <span className="text-green-500">Cart (0)</span>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <p className="text-green-600 text-sm mb-4">// welcome to the gallery</p>
          <h1 className="text-4xl md:text-6xl font-bold text-green-300 mb-6">
            Character-Based Artwork
          </h1>
          <p className="text-green-500 max-w-xl mx-auto text-lg">
            Discover and collect unique ASCII art. Each piece is a one-of-a-kind creation, rendered entirely in characters.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <a
              href="/art"
              className="px-6 py-3 bg-green-500 text-black font-bold rounded hover:bg-green-400 transition-colors"
            >
              Browse Gallery
            </a>
            <a
              href="/artists"
              className="px-6 py-3 border border-green-500 text-green-400 rounded hover:bg-green-500 hover:text-black transition-colors"
            >
              For Artists
            </a>
          </div>
        </div>

        {/* Featured ASCII art */}
        <div className="border border-green-900 rounded-lg p-8 bg-zinc-950 mb-16">
          <p className="text-green-600 text-xs mb-4">// featured piece</p>
          <pre className="text-green-400 text-xs leading-relaxed overflow-x-auto">{`
     ___
    /   \\
   | x x |
   |  _  |
    \\___/
   /|   |\\
  / |   | \\
 /  |   |  \\
    |   |
    |   |
   /|   |\\
  / |   | \\
 /  |   |  \\
 |  |   |  |
 |__|   |__|
   |___|
    | |
    | |
   _| |_
  |_____|
          `}</pre>
          <div className="mt-6 flex justify-between items-center">
            <div>
              <p className="text-green-300 font-bold">Cyber Fox</p>
              <p className="text-green-600 text-sm">by @glitchmaster</p>
            </div>
            <div className="text-right">
              <p className="text-green-300 font-bold">$49</p>
              <a
                href="/art/placeholder"
                className="text-green-600 text-sm hover:text-green-400"
              >
                View details
              </a>
            </div>
          </div>
        </div>

        {/* Recent works grid */}
        <div>
          <p className="text-green-600 text-xs mb-4">// recent additions</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="border border-green-900 rounded-lg p-4 bg-zinc-950 hover:border-green-700 transition-colors"
              >
                <pre className="text-green-500 text-xs leading-relaxed mb-4">{`
  ___
 /o o\\
| ___ |
 \\___/
                `}</pre>
                <div className="flex justify-between text-sm">
                  <span className="text-green-400">Untitled #{i}</span>
                  <span className="text-green-600">$25</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-green-900 px-6 py-8 mt-20">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-green-700 text-sm">
          <p>ASCII Inc. -- Built with characters, delivered with care.</p>
          <p className="font-mono text-xs">$ node --version | stripe checkout</p>
        </div>
      </footer>
    </div>
  );
}
