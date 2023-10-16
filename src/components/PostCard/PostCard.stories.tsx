import { StoryObj, Meta } from '@storybook/react'
import PostCard from '.'
import { POST_MOCK } from '@constants'

export default {
  title: 'Components/PostCard',
  component: PostCard,
} as Meta

type Story = StoryObj<typeof PostCard>

export const Default: Story = {
  args: {
    post: POST_MOCK,
    onClick: () => {},
  },
}
