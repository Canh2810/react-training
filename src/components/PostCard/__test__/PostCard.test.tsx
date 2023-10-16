import { fireEvent, render } from '@testing-library/react'
import PostCard from '..'
import { POST_MOCK } from '@constants'

describe('PostCard component', () => {
  const mockClick = jest.fn()

  it('should render correctly', () => {
    const { container } = render(
      <PostCard post={POST_MOCK} onClick={mockClick} />,
    )
    expect(container).toMatchSnapshot()
  })

  it('calls onClick callback when clicked', () => {
    const { container } = render(
      <PostCard post={POST_MOCK} onClick={mockClick} />,
    )
    const postCard = container.querySelector('.post-card')

    if (postCard) {
      fireEvent.click(postCard)
      expect(mockClick).toHaveBeenCalledTimes(1)
    }
  })
})
