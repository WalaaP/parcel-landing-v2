import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FaqItem {
  question: string
  answer:   string
}

interface Props {
  items: FaqItem[]
}

export default function FaqAccordion({ items }: Props) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div
          key={i}
          className={`faq-item${open === i ? ' faq-open' : ''}`}
          onClick={() => setOpen(open === i ? null : i)}
        >
          <button
            className="faq-question"
            aria-expanded={open === i}
            aria-controls={`faq-answer-${i}`}
            id={`faq-btn-${i}`}
          >
            <span>{item.question}</span>
            <motion.span
              className="faq-chevron"
              animate={{ rotate: open === i ? 180 : 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              ↓
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-btn-${i}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ overflow: 'hidden' }}
              >
                <p className="faq-answer">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}

      <style>{`
        .faq-list { display: flex; flex-direction: column; gap: 0; }
        .faq-item {
          border-bottom: 1px solid var(--border-subtle);
          cursor: pointer;
          transition: background 0.2s ease;
          border-radius: 8px;
          padding: 0 4px;
        }
        .faq-item:hover { background: var(--signal-ghost); }
        .faq-open { background: var(--signal-ghost); border-color: var(--border) !important; }
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          width: 100%;
          padding: 20px 16px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: var(--font-ui);
          font-size: 16px;
          font-weight: 600;
          color: var(--ink);
          text-align: left;
        }
        .faq-chevron {
          display: inline-block;
          color: var(--signal);
          font-size: 18px;
          flex-shrink: 0;
        }
        .faq-answer {
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--ink-muted);
          line-height: 1.75;
          padding: 0 16px 20px;
        }
      `}</style>
    </div>
  )
}
