import { motion } from 'framer-motion'

/** Quiet fade + slide on first view (DESIGN.md §5). */
export default function Reveal({ as = 'div', delay = 0, y = 16, className = '', children, ...props }) {
  const M = motion[as] ?? motion.div
  return (
    <M
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </M>
  )
}
