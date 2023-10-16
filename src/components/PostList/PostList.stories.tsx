import { StoryObj, Meta } from '@storybook/react'
import PostList from '.'
import { POSTS_MOCK } from '@constants'
import { MemoryRouter } from 'react-router-dom'

export default {
  title: 'Components/PostList',
  component: PostList,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta

type Story = StoryObj<typeof PostList>

export const Default: Story = {
  args: {
    posts: POSTS_MOCK,
  },
}
