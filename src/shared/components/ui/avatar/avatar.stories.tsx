import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarFallback, AvatarImage } from './avatar'

const meta = {
  title: 'ui/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  render: args => (
    <Avatar {...args}>
      <AvatarImage src='https://github.com/shadcn.png' />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

/**
 * A default Avatar with a basic style.
 */
export const Default: Story = {}
