import Link from 'next/link'

type Variant = 'primary' | 'secondary' | 'outline-white' | 'outline-coral'
type Size = 'sm' | 'md' | 'lg'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: Variant
  size?: Size
  external?: boolean
  className?: string
  ariaLabel?: string
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary/90 font-semibold shadow-md shadow-primary/20',
  secondary:
    'bg-primary text-white hover:bg-primary/90 font-semibold',
  'outline-white':
    'border-2 border-white text-white hover:bg-white hover:text-primary font-semibold',
  'outline-coral':
    'border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm min-h-[36px]',
  md: 'px-5 py-3 text-sm min-h-[44px]',
  lg: 'px-7 py-4 text-base min-h-[52px]',
}

export function CTAButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  external = false,
  className = '',
  ariaLabel,
}: CTAButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  )
}
