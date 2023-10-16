import { StoryObj, Meta } from '@storybook/react'

import DarkModeSwitch from '.'

export default {
  title: 'Components/DarkModeSwitch',
  component: DarkModeSwitch,
} as Meta

type Story = StoryObj<typeof DarkModeSwitch>

export const Default: Story = {}
