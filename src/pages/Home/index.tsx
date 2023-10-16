// Libs
import { memo, useCallback, useState } from 'react'

// Types
import { ButtonVariants } from '@types'

// Components
import {
  Advertisement,
  Banner,
  Button,
  LoadingIndicator,
  PostList,
  SearchResults,
  Typography,
} from '@components'

// Constants
import { LIMIT_POSTS } from '@constants'

// Stores
import { usePostsStore, useQueryStore } from '@stores'

// Style
import './index.css'
import { useFetchPosts, useDebounce, useFetchUser } from '@hooks'

const Home = () => {
  const [limitPosts, setLimitPosts] = useState<string>(LIMIT_POSTS)
  const { posts } = usePostsStore((state) => state)
  const { query } = useQueryStore((state) => state)
  const debouncedValue = useDebounce<string>(query)
  const {
    isLoading: isLoadingFetchPosts,
    isError: isErrorFetchPosts,
    error: errorFetchPosts,
  } = useFetchPosts(limitPosts, debouncedValue)
  const {
    isLoading: isLoadingFetchUser,
    isError: isErrorFetchUser,
    error: errorFetchUser,
  } = useFetchUser()

  const handleToggleViewALlPosts = useCallback(() => {
    setLimitPosts((prev) => (prev === LIMIT_POSTS ? '' : LIMIT_POSTS))
  }, [setLimitPosts])

  const buttonTitle = limitPosts === LIMIT_POSTS ? 'View all post' : 'Hide less'
  const isLoading = isLoadingFetchPosts || isLoadingFetchUser
  const isError = isErrorFetchPosts || isErrorFetchUser
  const errorMessage = errorFetchPosts?.message || errorFetchUser?.message

  return (
    <div className="home">
      {isError && <Typography>{errorMessage}</Typography>}
      {debouncedValue.length > 0 ? (
        <SearchResults posts={posts} />
      ) : (
        <>
          <Banner post={posts[0]} />
          <Advertisement />
          <section className="home__content">
            <PostList posts={posts} />
            <Button
              variant={ButtonVariants.Outlined}
              onClick={handleToggleViewALlPosts}
            >
              {buttonTitle}
            </Button>
          </section>
          <Advertisement />
        </>
      )}
      {isLoading && <LoadingIndicator />}
    </div>
  )
}

export default memo(Home)
