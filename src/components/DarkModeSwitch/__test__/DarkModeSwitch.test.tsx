// DarkModeSwitch.test.js
import { fireEvent, render } from '@testing-library/react'
import DarkModeSwitch from '..'

describe('DarkModeSwitch Component', () => {
  it('renders without errors', () => {
    const { container } = render(<DarkModeSwitch />)
    expect(container).toMatchSnapshot()
  })
  it('toggle theme on checkbox change', () => {
    const { getByRole } = render(<DarkModeSwitch />)
    const checkbox = getByRole('checkbox')

    fireEvent.click(checkbox)

    expect(checkbox).toBeChecked()
  })
})
