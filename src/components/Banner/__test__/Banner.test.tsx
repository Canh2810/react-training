import { render } from '@testing-library/react'
import Banner from '..'
import { POST_MOCK } from '@constants'

describe('Banner component', () => {
  it('should render correctly', () => {
    const { container } = render(<Banner post={POST_MOCK} />)
    expect(container).toMatchSnapshot()
  })
})
