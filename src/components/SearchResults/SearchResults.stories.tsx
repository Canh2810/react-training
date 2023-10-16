import { StoryObj, Meta } from '@storybook/react'
import SearchResults from '.'
import { POSTS_MOCK } from '@constants'
import { MemoryRouter } from 'react-router-dom'

export default {
  title: 'Components/SearchResults',
  component: SearchResults,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta

type Story = StoryObj<typeof SearchResults>

export const Default: Story = {
  args: {
    posts: POSTS_MOCK,
  },
}
