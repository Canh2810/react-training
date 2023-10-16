import { StoryObj, Meta } from '@storybook/react'

import LoadingIndicator from '.'

export default {
  title: 'Components/LoadingIndicator',
  component: LoadingIndicator,
} as Meta

type Story = StoryObj<typeof LoadingIndicator>

export const Default: Story = {}
