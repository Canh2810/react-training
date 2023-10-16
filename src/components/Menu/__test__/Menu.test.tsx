import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import Menu from '..'
import { MenuVariants } from '@types'
import { LIST_MENU_ITEM } from '@constants'

describe('Menu component', () => {
  it('should render correctly with variant is horizontal', () => {
    const { container } = render(
      <MemoryRouter>
        <Menu listItems={LIST_MENU_ITEM} />
      </MemoryRouter>,
    )
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with variant is vertical', () => {
    const { container } = render(
      <MemoryRouter>
        <Menu listItems={LIST_MENU_ITEM} variant={MenuVariants.Vertical} />
      </MemoryRouter>,
    )
    expect(container).toMatchSnapshot()
  })

  it('calls the correct onClick handler when a menu item is clicked', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route
            path="/about"
            element={<div data-testid="about-page">About Page</div>}
          />
        </Routes>
        <Menu listItems={LIST_MENU_ITEM} />
      </MemoryRouter>,
    )

    const menuItem = screen.getByText('About')

    fireEvent.click(menuItem)
    const aboutPage = screen.getByTestId('about-page')
    expect(aboutPage).toBeInTheDocument()
  })
})
