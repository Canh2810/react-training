import { render } from '@testing-library/react'
import Advertisement from '..'

describe('Advertisement component', () => {
  it('should render correctly', () => {
    const { container } = render(<Advertisement />)
    expect(container).toMatchSnapshot()
  })
})
