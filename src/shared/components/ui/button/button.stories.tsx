import type { Meta, StoryObj } from '@storybook/react'
import { Mail } from 'lucide-react'

import { Button } from './button'

const meta: Meta<typeof Button> = {
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
    disabled: {
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
  },
  args: {
    children: 'Button',
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This is the default button with a basic style.',
      },
    },
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  parameters: {
    docs: {
      description: {
        story: 'This button is used for dangerous actions, such as deleting data.',
      },
    },
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
  parameters: {
    docs: {
      description: {
        story: 'An outlined button suitable for secondary actions.',
      },
    },
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  parameters: {
    docs: {
      description: {
        story: 'A secondary button with a less prominent style.',
      },
    },
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
  parameters: {
    docs: {
      description: {
        story: 'A transparent button, often used for less important actions.',
      },
    },
  },
}

export const IconButton: Story = {
  args: {
    size: 'icon',
    children: <Mail />,
  },
  parameters: {
    docs: {
      description: {
        story: 'An icon button designed for actions without a text label.',
      },
    },
  },
}
