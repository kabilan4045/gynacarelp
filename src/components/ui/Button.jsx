import { forwardRef } from 'react'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold whitespace-nowrap ' +
  'transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out ' +
  'hover:-translate-y-px active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none ' +
  'focus-visible:outline-2 focus-visible:outline-offset-3'

const variants = {
  primary: 'bg-accent text-white hover:bg-accent-strong focus-visible:outline-accent',
  secondary:
    'border border-accent/30 bg-transparent text-accent hover:border-accent hover:bg-accent-soft focus-visible:outline-accent',
  whatsapp: 'bg-whatsapp text-[#0B2E17] hover:bg-whatsapp-strong focus-visible:outline-whatsapp',
  // Outline: green border + green icon, ink text (green text on white fails contrast)
  whatsappOutline:
    'border border-whatsapp bg-surface text-ink hover:bg-[#EAFBF0] [&>svg]:text-[#1EAA52] focus-visible:outline-whatsapp',
  gradient:
    'text-white bg-[image:var(--brand-gradient)] bg-[length:140%_100%] bg-left hover:bg-right hover:shadow-soft focus-visible:outline-plum',
  ghost: 'text-accent hover:bg-accent-soft focus-visible:outline-accent',
  light: 'bg-white text-band hover:bg-accent-soft focus-visible:outline-white',
}

const sizes = {
  sm: 'h-11 px-4 text-sm',
  md: 'h-12 px-6 text-sm',
  lg: 'h-14 px-7 text-base',
}

/**
 * Renders an <a> when `href` is given, otherwise a <button>.
 * Variants: primary | secondary | whatsapp | whatsappOutline | gradient | ghost | light
 */
const Button = forwardRef(function Button(
  { variant = 'primary', size = 'md', href, external, className = '', children, ...props },
  ref,
) {
  const cls = `${base} ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.md} ${className}`
  if (href) {
    const ext = external ?? /^https?:/.test(href)
    return (
      <a ref={ref} href={href} className={cls} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button ref={ref} type="button" className={cls} {...props}>
      {children}
    </button>
  )
})

export default Button
