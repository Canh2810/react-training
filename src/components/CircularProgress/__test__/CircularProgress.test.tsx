import { render } from '@testing-library/react'
import CircularProgress from '..'

describe('CircularProgress component', () => {
  it('should render correctly', () => {
    const { container } = render(<CircularProgress />)
    expect(container).toMatchSnapshot()
  })
})
