# Ascii Inc — SEO and Discoverability Strategy

## Context
Ascii Inc is an ASCII art marketplace. The storefront (https://paperclip.bradarr.com) is currently behind Cloudflare Access authentication, so SEO applies primarily to the public-facing pages (landing page, artist profiles, art detail pages) and any public marketing assets.

This deliverable covers keyword strategy, meta tags, structured data, sitemap, performance, and link-building.

---

## 1. Keyword Strategy

### Target Keyword Clusters

**Cluster A — Acquisition (buyers)**
| Primary | Secondary | Long-tail |
|---|---|---|
| ASCII art for sale | buy ASCII art online | buy ASCII art print |
| digital ASCII art | ASCII art prints | unique digital art ASCII |
| ASCII art marketplace | ASCII art gallery | collectible ASCII art |

**Cluster B — Artist Recruitment**
| Primary | Secondary | Long-tail |
|---|---|---|
| sell ASCII art | ASCII art artist | sell digital art online |
| ASCII art creator | how to sell ASCII art | ASCII art prints for sale |
| ASCII art royalties | earn money ASCII art | ASCII art side hustle |

**Cluster C — Community / Awareness**
| Primary | Secondary | Long-tail |
|---|---|---|
| ASCII art gallery | ASCII art artists | ASCII art community |
| ASCII art blog | ASCII art culture | best ASCII art |
| text art marketplace | monospace art | retro digital art |

### Priority Pages for SEO
1. Homepage — ASCII art marketplace, "buy and sell"
2. Artist profile pages — individual creator showcases
3. Art detail pages — individual piece pages
4. Blog / editorial — ASCII art culture, artist spotlights
5. About / mission page

### Keyword Implementation Rules
- Homepage H1: "ASCII Art Marketplace | Buy and Sell Text-Based Art" (Ascii Inc)
- Artist pages: "{Artist Name} — ASCII Art by {Artist} | Ascii Inc"
- Art detail pages: "{Art Title} by {Artist} — Buy ASCII Art | Ascii Inc"
- All pages: unique meta description (150-160 chars) incorporating primary keyword

---

## 2. Meta Tags Implementation

### Homepage
```html
<title>Ascii Inc — The ASCII Art Marketplace | Buy and Sell Text-Based Art</title>
<meta name="description" content="Discover and collect unique ASCII art from curated artists worldwide. Ascii Inc is the premier marketplace for buying and selling digital ASCII art." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://paperclip.bradarr.com/" />
```

### Artist Profile Pages
```html
<title>{Artist Name} — ASCII Art Portfolio | Ascii Inc</title>
<meta name="description" content="Browse the ASCII art portfolio of {Artist Name} on Ascii Inc. {N} unique pieces available for purchase." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://paperclip.bradarr.com/artists/{slug}" />
```

### Art Detail Pages
```html
<title>{Art Title} by {Artist Name} | Ascii Inc</title>
<meta name="description" content="Buy '{Art Title}' by {Artist Name} on Ascii Inc. {Style} ASCII art. Instant digital download. Collectible digital art." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://paperclip.bradarr.com/art/{slug}" />
```

### Open Graph Tags (all pages)
```html
<meta property="og:title" content="{Page Title}" />
<meta property="og:description" content="{Meta Description}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="{Canonical URL}" />
<meta property="og:image" content="https://paperclip.bradarr.com/og-default.png" />
<meta property="og:site_name" content="Ascii Inc" />
```

### Twitter Card Tags
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{Page Title}" />
<meta name="twitter:description" content="{Meta Description}" />
<meta name="twitter:image" content="https://paperclip.bradarr.com/og-default.png" />
```

---

## 3. Structured Data (Schema.org)

### Organization (Homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ascii Inc",
  "url": "https://paperclip.bradarr.com",
  "logo": "https://paperclip.bradarr.com/logo.png",
  "description": "The premier marketplace for buying and selling ASCII art.",
  "sameAs": [
    "https://twitter.com/asciiinc",
    "https://bsky.app.profile/asciiinc"
  ]
}
```

### Product (Art Detail Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "{Art Title}",
  "description": "{Art Description}",
  "image": ["{preview_image_url}"],
  "brand": {
    "@type": "Brand",
    "name": "Ascii Inc"
  },
  "creator": {
    "@type": "Person",
    "name": "{Artist Name}",
    "url": "https://paperclip.bradarr.com/artists/{slug}"
  },
  "offers": {
    "@type": "Offer",
    "price": "{price}",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "https://paperclip.bradarr.com/art/{slug}"
  }
}
```

### Person (Artist Profile Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "{Artist Name}",
  "url": "https://paperclip.bradarr.com/artists/{slug}",
  "description": "ASCII art artist on Ascii Inc.",
  "worksFor": {
    "@type": "Organization",
    "name": "Ascii Inc"
  }
}
```

---

## 4. Sitemap

### sitemap.xml structure
```
/sitemap.xml
/sitemap-art.xml       (all art detail pages)
/sitemap-artists.xml  (all artist profile pages)
/sitemap-blog.xml      (editorial / blog posts)
```

### sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://paperclip.bradarr.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://paperclip.bradarr.com/artists</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://paperclip.bradarr.com/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <!-- art and artist pages to be dynamically generated -->
</urlset>
```

 robots.txt:
```
User-agent: *
Allow: /
Sitemap: https://paperclip.bradarr.com/sitemap.xml
```

---

## 5. Performance Optimization

### Targets
| Metric | Target |
|---|---|
| Largest Contentful Paint (LCP) | < 2.5s |
| First Input Delay (FID) | < 100ms |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Time to First Byte (TTFB) | < 600ms |
| Total Blocking Time (TBT) | < 200ms |

### Image Optimization
- ASCII art previews: serve as PNG/SVG with fixed-width containers (prevent CLS)
- Use `loading="lazy"` on all below-fold images
- `srcset` for responsive preview sizes
- Preview thumbnails: WebP with PNG fallback, max 1200px wide

### Rendering
- Ensure HTML is server-side rendered (SSR) — avoids CLS from late-loading content
- Preload critical fonts (any monospace font used for ASCII rendering)
- `<link rel="preconnect">` to CDN if assets are served from CDN

### Core Web Vitals Notes
- ASCII art text renders as actual text, not images — inherent SEO advantage (crawlable, indexable)
- Ensure the monospace font is preloaded to avoid FOUT affecting perceived quality
- Fixed-width containers are critical since ASCII art depends on exact character alignment

---

## 6. Link-Building Strategy

### Tier 1 — Editorial / PR
| Tactic | Target | Goal DA |
|---|---|---|
| ASCII art blog post pitches | Hacker News, Lobsters, /r/ASCII_Art, /r/digitalart | 80+ |
| Artist spotlight press releases | Design blogs (Creative Bloq, It's Nice That, Designboom) | 75+ |
| Submit to Product Hunt | Launch platform | 90+ |

### Tier 2 — Community Integration
| Tactic | Platform | Notes |
|---|---|---|
| ASCII art showcases | Reddit (r/ASCII, r/Art, r/digitalart, r/retrogaming) | Must be non-promotional; provide value first |
| Text art sharing | Twitter/X, Bluesky, Mastodon | ASCII art creators and collectors |
| Wikipedia entry | Wikipedia | Once notable enough (requires third-party coverage) |

### Tier 3 — Directory / Backlinks
| Tactic | Platform |
|---|---|
| Submit to art marketplace directories | Similar to "Etsy alternatives" lists |
| NFT marketplace cross-listing mentions | Alternative to NFT platforms |
| Curated marketplace lists | "Best ASCII art sites" lists |

### Anchor Text Guidelines
- Branded: "Ascii Inc" (primary) — 50%+ of links
- Exact match: "ASCII art marketplace" — sparingly
- Naked URLs: paperclip.bradarr.com — natural variation

---

## 7. Implementation Priorities

| Priority | Task | Owner |
|---|---|---|
| P0 | Add canonical URLs + remove noindex | Founding Engineer |
| P0 | Unique title + meta description per page | Founding Engineer |
| P0 | Open Graph + Twitter Card tags | Founding Engineer |
| P1 | Schema.org Product + Person markup | Founding Engineer |
| P1 | Generate + submit sitemap.xml | Founding Engineer |
| P1 | robots.txt with sitemap reference | Founding Engineer |
| P2 | Performance audit + LCP optimization | Founding Engineer |
| P2 | Artist recruitment keyword landing page | Founding Engineer / UI Designer |
| P3 | Editorial outreach (Tier 1 link-building) | CMO |
| P3 | Community participation (Reddit, Bluesky) | CMO |

---

## 8. KPIs for SEO

| KPI | Current Baseline | 30-Day Target | 90-Day Target |
|---|---|---|---|
| Organic sessions/month | TBD | Establish baseline | +20% MoM |
| Indexed pages (via Search Console) | TBD | Track growth | 50+ indexed pages |
| Core Web Vitals pass rate | TBD | LCP < 2.5s, CLS < 0.1 | Maintain pass |
| Domain Rating (Ahrefs) | TBD | +1 DR | +3 DR |
| Branded search volume | TBD | Establish baseline | +15% MoM |

*Note: Baseline metrics require Google Search Console and/or Ahrefs access — coordinate with Founding Engineer to set up tracking.*

---

## Action Items for Founding Engineer

1. **Meta tags**: Audit current pages, add unique title + meta description per page type
2. **Canonical URLs**: Add to all pages, remove any `noindex` directives from public pages
3. **OG/Twitter**: Add social meta tags using the templates above
4. **Schema**: Add Organization schema to homepage, Product schema to art pages, Person schema to artist pages
5. **Sitemap**: Auto-generate from catalog data, submit to Google Search Console
6. **robots.txt**: Add sitemap reference
7. **Performance**: Audit LCP/CLS on Google PageSpeed Insights; preload monospace font
8. **Auth wall**: Ensure public marketing pages (about, blog) are not behind Cloudflare Access
