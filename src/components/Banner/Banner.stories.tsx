import { StoryObj, Meta } from '@storybook/react'
import Banner from '.'
import { POST_MOCK } from '@constants'

export default {
  title: 'Components/Banner',
  component: Banner,
} as Meta

type Story = StoryObj<typeof Banner>

export const Default: Story = {
  args: {
    post: POST_MOCK,
  },
}
