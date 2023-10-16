import { StoryObj, Meta } from '@storybook/react'

import Button from './'
import { ButtonVariants } from '@types'
import { Search } from '@assets/icons'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    variant: ButtonVariants.Outlined,
    children: 'Click me',
    onClick: () => {
      alert('Button component')
    },
  },
}

export const Outlined: Story = {
  args: {
    variant: ButtonVariants.Container,
    children: 'Click me',
    onClick: () => {
      alert('Button component')
    },
  },
}

export const IconButton: Story = {
  args: {
    children: <Search />,
    onClick: () => {
      alert('Button component')
    },
  },
}
