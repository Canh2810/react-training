// PostList.test.js (or PostList.test.tsx for TypeScript)

import { fireEvent, render } from '@testing-library/react'
import PostList from '..'
import { POSTS_MOCK, ROUTES } from '@constants'
import { MemoryRouter } from 'react-router-dom'

// Mock the useNavigate hook
const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}))

describe('PostList component', () => {
  it('should render correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <PostList posts={POSTS_MOCK} />
      </MemoryRouter>,
    )
    expect(container).toMatchSnapshot()
  })

  it('navigates to a single post when a post card is clicked', () => {
    const { getByText } = render(
      <MemoryRouter>
        <PostList posts={POSTS_MOCK} />
      </MemoryRouter>,
    )
    fireEvent.click(getByText(POSTS_MOCK[1].title))
    expect(mockNavigate).toHaveBeenCalledWith(
      ROUTES.SINGLE_POST_PARAM + POSTS_MOCK[1].id,
    )
  })
})
