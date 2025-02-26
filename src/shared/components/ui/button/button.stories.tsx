import type { Meta, StoryObj } from '@storybook/react'
import { Mail } from 'lucide-react'

import { Button } from './button'

const meta = {
  title: 'ui/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      table: {
        type: {
          summary: `"default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null`,
        },
      },
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'md', 'lg', 'icon', 'iconLg', 'iconExtraLg'],
      table: {
        type: {
          summary: `"default" | "sm" | "md" | "lg" | "icon" | "iconLg" | iconExtraLg`,
        },
      },
    },
  },
  args: {
    children: 'Button',
    disabled: false,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

/**
 * A default button with a basic style.
 */
export const Default: Story = {}

/**
 * A button is used for dangerous actions, such as deleting data.
 */
export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
}

/**
 * An outlined button suitable for secondary actions.
 */
export const Outline: Story = {
  args: {
    variant: 'outline',
  },
}

/**
 * A secondary button with a less prominent style.
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

/**
 * A transparent button, often used for less important actions.
 */
export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
}

/**
 * An icon button designed for actions without a text label.
 */
export const IconButton: Story = {
  args: {
    size: 'icon',
    children: <Mail />,
  },
}
