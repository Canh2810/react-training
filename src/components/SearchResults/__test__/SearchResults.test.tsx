import { render } from '@testing-library/react'
import SearchResults from '..'
import { POSTS_MOCK } from '@constants'
import { MemoryRouter } from 'react-router-dom'

describe('SearchResults component', () => {
  it('render when list posts not empty', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchResults posts={POSTS_MOCK} />
      </MemoryRouter>,
    )
    expect(container).toMatchSnapshot()
  })

  it('render no results when list posts empty', () => {
    const { getByText } = render(
      <MemoryRouter>
        <SearchResults posts={[]} />
      </MemoryRouter>,
    )
    expect(getByText('No Result Found')).toBeInTheDocument()
  })
})
