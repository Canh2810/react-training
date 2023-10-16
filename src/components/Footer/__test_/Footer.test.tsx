import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Footer from '..'
import { useThemeStore } from '@stores'
import { THEMES } from '@constants'

const setup = () => render(<Footer />, { wrapper: MemoryRouter })

describe('Footer component', () => {
  beforeEach(() => {
    useThemeStore.setState({
      theme: THEMES.LIGHT,
    })
  })

  it('should render correctly', () => {
    const { container } = setup()
    expect(container).toMatchSnapshot()
  })

  it('should display an error message for an invalid email', async () => {
    setup()

    const emailInput = screen.getByPlaceholderText('Your Email')
    const subscribeButton = screen.getByText('Subscribe')

    fireEvent.change(emailInput, { target: { value: 'invalidemail' } })
    fireEvent.click(subscribeButton)

    const errorMessage = await waitFor(() =>
      screen.getByText('Invalid format of email, please check.'),
    )

    expect(errorMessage).toBeInTheDocument()
  })

  it('should display an error message for an empty email', async () => {
    setup()

    const emailInput = screen.getByPlaceholderText('Your Email')
    const subscribeButton = screen.getByText('Subscribe')

    fireEvent.change(emailInput, { target: { value: '' } })
    fireEvent.click(subscribeButton)

    const errorMessage = await waitFor(() =>
      screen.getByText('Email is required'),
    )

    expect(errorMessage).toBeInTheDocument()
  })
})
