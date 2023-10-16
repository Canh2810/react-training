// Libs
import { memo } from 'react'

// Components
import { PostList, Typography } from '@components'

// Types
import { IPost } from '@types'

// Style
import './index.css'

interface SearchResultsProps {
  posts: IPost[]
}

const SearchResults = ({ posts }: SearchResultsProps) =>
  posts.length > 0 ? (
    <PostList posts={posts} />
  ) : (
    <Typography className="search-no-result">No Result Found</Typography>
  )

export default memo(SearchResults)
