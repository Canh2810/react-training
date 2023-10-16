import { render } from '@testing-library/react'
import LoadingIndicator from '..'

describe('LoadingIndicator Component', () => {
  it('should render correctly', () => {
    const { container } = render(<LoadingIndicator />)
    expect(container).toMatchSnapshot()
  })
})
