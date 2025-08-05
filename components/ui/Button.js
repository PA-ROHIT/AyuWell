import { forwardRef } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] hover:scale-[1.02] hover:-translate-y-1',
  {
    variants: {
      variant: {
        default:
          'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/25 hover:shadow-primary-600/35',
        secondary:
          'bg-white text-gray-700 border-2 border-gray-200 hover:border-primary-600 hover:text-primary-600 shadow-lg shadow-gray-200/25 hover:shadow-primary-600/25',
        outline:
          'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white',
        ghost:
          'text-gray-700 hover:bg-gray-100 hover:text-primary-600 shadow-none',
      },
      size: {
        default: 'h-11 px-6 py-2',
        sm: 'h-9 px-4 py-1.5 text-sm',
        lg: 'h-12 px-8 py-3 text-lg',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const Button = forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = 'Button'

export { Button as default, buttonVariants }