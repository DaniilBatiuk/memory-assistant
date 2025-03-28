import { VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib'

export const inputVariants = cva(
  'bg-transparent file:bg-transparent flex w-full rounded-md border border-input text-base shadow-sm transition-colors file:border-0 file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
  {
    variants: {
      size: {
        default: 'h-9 px-3 py-1',
        md: 'h-12 px-5 !text-base',
      },
      error: {
        true: 'border-red focus-visible:border-red',
        false: '',
      },
    },
    defaultVariants: {
      size: 'default',
      error: false,
    },
  },
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ size, error, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
