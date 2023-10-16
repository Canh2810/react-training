import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Header from '..'
import { useQueryStore, useThemeStore, useUserStore } from '@stores'
import { THEMES, USERS_MOCK } from '@constants'

const setup = () => render(<Header />, { wrapper: MemoryRouter })

describe('Header component', () => {
  const mockSetQuery = jest.fn()
  const mockClearUser = jest.fn()
  beforeEach(() => {
    useThemeStore.setState({
      theme: THEMES.LIGHT,
    }),
      useUserStore.setState({
        user: USERS_MOCK[0],
        clearUser: mockClearUser,
      }),
      useQueryStore.setState({
        query: '',
        setQuery: mockSetQuery,
      })
  })

  it('should render correctly', () => {
    const { container } = setup()
    expect(container).toMatchSnapshot()
  })

  it('toggles user dropdown on click', () => {
    setup()

    fireEvent.click(screen.getByText(USERS_MOCK[0].user_name))

    const userDropdown = screen.getByText('Logout')

    expect(userDropdown).toBeVisible()
  })

  it('handle logout', () => {
    setup()

    fireEvent.click(screen.getByText(USERS_MOCK[0].user_name))
    const logout = screen.getByText('Logout')
    fireEvent.click(logout)
    expect(mockClearUser).toBeCalled()
  })

  it('handles search input correctly', async () => {
    setup()
    const searchInput = screen.getByPlaceholderText('search')

    fireEvent.change(searchInput, { target: { value: 'Test search' } })
    expect(mockSetQuery).toBeCalled()
  })
})
