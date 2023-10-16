import { render } from '@testing-library/react'
import ScrollToTop from '..'

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(() => ({
    pathname: '/mock-pathname',
  })),
}))

describe('ScrollToTop component', () => {
  it('should scroll to top when the pathname changes', () => {
    const scrollTo = jest.fn()
    window.scrollTo = scrollTo

    render(<ScrollToTop />)

    // Expect that the window.scrollTo function was called with (0, 0)
    expect(scrollTo).toHaveBeenCalledWith(0, 0)
  })
  // it('should render null', () => {
  //   const { container } = render(
  //     <MemoryRouter initialEntries={['/']} initialIndex={0}>
  //       <ScrollToTop />
  //     </MemoryRouter>,
  //   )

  //   expect(container.firstChild).toBeNull()
  // })
})
