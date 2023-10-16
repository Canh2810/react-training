import { fireEvent, render } from '@testing-library/react'
import Button from '..'
import { ButtonVariants } from '@types'

describe('Button component', () => {
  it('should render with outlined variant', () => {
    const { container } = render(<Button>Button</Button>)
    expect(container).toMatchSnapshot()
  })

  it('should render with container variant', () => {
    const { container } = render(
      <Button variant={ButtonVariants.Container}>Button</Button>,
    )
    expect(container).toMatchSnapshot()
  })

  it('handles onClick event', () => {
    const onClickMock = jest.fn()
    const { getByText } = render(
      <Button onClick={onClickMock}>Click me</Button>,
    )
    const button = getByText('Click me')
    fireEvent.click(button)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it('disables the button when isLoading is true', () => {
    const { getByRole } = render(<Button isLoading={true}>Loading</Button>)
    const button = getByRole('button')
    expect(button).toBeDisabled()
  })
})
