import { render } from '@testing-library/react'
import Badge from '..'
import { commonVariants } from '@types'

describe('Badge component', () => {
  it('should render primary variant', () => {
    const { container } = render(<Badge title="Test Badge" />)
    expect(container).toMatchSnapshot()
  })
  it('should render secondary variant', () => {
    const { container } = render(
      <Badge variant={commonVariants.Secondary} title="Test Badge" />,
    )
    expect(container).toMatchSnapshot()
  })
})
