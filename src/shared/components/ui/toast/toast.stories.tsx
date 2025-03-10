import type { Meta, StoryObj } from '@storybook/react'

import { Toast, ToastAction, ToastActionElement, ToastProps, Toaster } from '@/components/ui'

import { useToast } from '@/hooks'

/**
 * A succinct message that is displayed temporarily.
 */
const meta = {
  title: 'ui/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  render: args => <ToastStory args={args} />,
} satisfies Meta<typeof Toast>

export default meta

type Story = Omit<StoryObj<typeof meta>, 'args'> & {
  args: Omit<ToasterToast, 'id'>
}

type ToasterToast = ToastProps & {
  id: string
  title?: string
  description?: string
  action?: ToastActionElement
}

/**
 * The default form of the toast.
 */
export const Default: Story = {
  args: {
    description: 'Your message has been sent.',
  },
}

/**
 * Use the `title` prop to provide a title for the toast.
 */
export const WithTitle: Story = {
  args: {
    title: 'Uh oh! Something went wrong.',
    description: 'There was a problem with your request.',
  },
}

/**
 * Use the `action` prop to provide an action for the toast.
 */
export const WithAction: Story = {
  args: {
    title: 'Uh oh! Something went wrong.',
    description: 'There was a problem with your request.',
    action: <ToastAction altText='Try again'>Try again</ToastAction>,
  },
}

/**
 * Use the `destructive` variant to indicate a destructive action.
 */
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    title: 'Uh oh! Something went wrong.',
    description: 'There was a problem with your request.',
    action: <ToastAction altText='Try again'>Try again</ToastAction>,
  },
}

const ToastStory = ({ args }: { args: ToastProps }) => {
  const { toast } = useToast()

  return (
    <div>
      <button
        onClick={() => {
          toast(args)
        }}
      >
        Show Toast
      </button>
      <Toaster />
    </div>
  )
}
