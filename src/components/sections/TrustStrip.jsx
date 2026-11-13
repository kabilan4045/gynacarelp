import { motion } from 'framer-motion'
import CountUp from '../ui/CountUp'
import { trust } from '../../data/shared'

// 2×2 on mobile, 4 across on desktop, separated by hairlines (no boxes).
const cellBorders = (i) =>
  [
    i % 2 === 0 ? 'border-r' : '', // vertical hairline between the two mobile columns
    i < 2 ? 'border-b lg:border-b-0' : '', // horizontal hairline between mobile rows
    i === 1 ? 'lg:border-r' : '', // complete the desktop vertical hairlines
  ].join(' ')

export default function TrustStrip() {
  return (
    <section aria-label="Experience and qualifications" className="bg-surface">
      <div className="container-x">
        <ul className="grid grid-cols-2 border-b border-line lg:grid-cols-4">
          {trust.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
              className={`border-line px-4 py-8 first:pl-0 sm:px-6 lg:px-8 lg:py-12 lg:first:pl-0 ${i === 2 ? 'pl-0 lg:pl-8' : ''} ${cellBorders(i)}`}
            >
              <p
                className="font-heading text-h3 font-medium leading-tight"
                style={{ color: item.specialty === 'womens' ? 'var(--brand-magenta)' : 'var(--brand-indigo)' }}
              >
                {'count' in item ? <CountUp to={item.count} suffix={item.suffix} /> : item.value}
              </p>
              <p className="mt-2 text-sm text-muted">{item.label}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
