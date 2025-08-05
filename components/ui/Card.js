import { cn } from '@/lib/utils'

const Card = ({ children, className, variant = 'default', hover = true, ...props }) => {
  const baseStyles = 'bg-white rounded-xl transition-all duration-300'
  
  const variants = {
    default: 'shadow-lg hover:shadow-xl',
    flat: 'border border-gray-200 hover:border-primary-500',
    glass: 'bg-white/80 backdrop-blur-lg shadow-lg hover:shadow-xl',
    outline: 'border-2 border-gray-200 hover:border-primary-500',
  }

  const hoverStyles = hover ? 'hover:-translate-y-1 active:translate-y-0 active:scale-[0.98]' : ''

  return (
    <div
      className={cn(
        baseStyles,
        variants[variant],
        hoverStyles,
        'p-6',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const CardHeader = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        'flex flex-col space-y-1.5 mb-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const CardTitle = ({ children, className, ...props }) => {
  return (
    <h3
      className={cn(
        'text-2xl font-semibold leading-none tracking-tight text-gray-900',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  )
}

const CardDescription = ({ children, className, ...props }) => {
  return (
    <p
      className={cn(
        'text-sm text-gray-500 leading-relaxed',
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}

const CardContent = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        'text-gray-600',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const CardFooter = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        'flex items-center mt-6 pt-4 border-t border-gray-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }