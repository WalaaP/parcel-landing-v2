import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Post {
  _id:         string
  title:       string
  slug:        { current: string }
  excerpt?:    string
  publishedAt?: string
  category?:   string
  mainImage?:  { asset: { url: string }; alt?: string }
}

interface Props {
  posts: Post[]
}

const categories = ['All', 'Logistics', 'Technology', 'E-Commerce', 'Company News', 'Industry Insights']

export default function BlogFilter({ posts }: Props) {
  const [active, setActive] = useState('All')

  const filtered = useMemo(() =>
    active === 'All' ? posts : posts.filter(p => p.category === active),
    [active, posts]
  )

  return (
    <div className="blog-filter">
      <div className="bf-tabs" role="tablist" aria-label="Filter by category">
        {categories.map(cat => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={`bf-tab${active === cat ? ' active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div className="bf-grid" layout>
        <AnimatePresence mode="popLayout">
          {filtered.map(post => (
            <motion.article
              key={post._id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bf-card"
            >
              {post.mainImage?.asset?.url && (
                <a href={`/blog/${post.slug.current}`} className="bf-img-wrap">
                  <img src={post.mainImage.asset.url} alt={post.mainImage.alt || post.title} loading="lazy" />
                </a>
              )}
              <div className="bf-body">
                {post.category && <span className="bf-cat">{post.category}</span>}
                <h3 className="bf-title">
                  <a href={`/blog/${post.slug.current}`}>{post.title}</a>
                </h3>
                {post.excerpt && <p className="bf-excerpt">{post.excerpt}</p>}
                {post.publishedAt && (
                  <time className="bf-date" dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('en-BH', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </time>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
        {filtered.length === 0 && (
          <p style={{ color: 'var(--ink-faint)', gridColumn: '1/-1', textAlign: 'center', padding: '40px' }}>
            No posts in this category yet.
          </p>
        )}
      </motion.div>

      <style>{`
        .bf-tabs {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }
        .bf-tab {
          font-family: var(--font-ui);
          font-size: 13px;
          font-weight: 500;
          color: var(--ink-muted);
          background: none;
          border: 1px solid var(--border-subtle);
          border-radius: var(--pill-radius);
          padding: 7px 18px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .bf-tab:hover  { color: var(--ink); border-color: var(--border); }
        .bf-tab.active {
          background: var(--signal);
          color: var(--ink-inverse);
          border-color: var(--signal);
          font-weight: 700;
        }
        .bf-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .bf-card {
          background: var(--navy);
          border: 1px solid var(--border-subtle);
          border-radius: var(--card-radius);
          overflow: hidden;
          transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .bf-card:hover {
          border-color: var(--border);
          transform: translateY(-4px);
          box-shadow: 0 0 60px var(--signal-trace);
        }
        .bf-img-wrap { display: block; overflow: hidden; aspect-ratio: 16/9; }
        .bf-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .bf-card:hover .bf-img-wrap img { transform: scale(1.04); }
        .bf-body { padding: 24px; }
        .bf-cat {
          display: inline-block;
          font-family: var(--font-display);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink-inverse);
          background: var(--signal);
          padding: 3px 10px;
          border-radius: var(--pill-radius);
          margin-bottom: 12px;
        }
        .bf-title {
          font-family: var(--font-ui);
          font-size: 18px;
          font-weight: 600;
          color: var(--ink);
          margin-bottom: 10px;
          line-height: 1.4;
        }
        .bf-title a { transition: color 0.2s ease; }
        .bf-title a:hover { color: var(--signal); }
        .bf-excerpt {
          font-size: 14px;
          color: var(--ink-muted);
          line-height: 1.65;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .bf-date {
          font-family: monospace;
          font-size: 12px;
          color: var(--ink-faint);
        }
        @media (max-width: 1023px) { .bf-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 639px)  { .bf-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  )
}
