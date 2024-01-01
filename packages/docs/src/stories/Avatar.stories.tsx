import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@caiomeirelles/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/caiomeirelles22.png',
    alt: 'Caio Meirelles',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
