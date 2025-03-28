'use client'

import * as LabelPrimitive from '@radix-ui/react-label'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib'

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  {
    variants: {
      error: {
        true: 'text-red',
        false: '',
      },
    },
    defaultVariants: {
      error: false,
    },
  },
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, error, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants({ error, className }))} {...props} />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
