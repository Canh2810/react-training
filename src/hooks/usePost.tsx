// Libs
import { useQuery } from '@tanstack/react-query'

// Constants
import { END_POINTS, INITIAL_POST, MOCK_URL } from '@constants'

// Stores
import { usePostsStore } from '@stores'

// Types
import { ApiErrorResponse, IPost } from '@types'

// Utils
import { get } from '@utils'

export const useFetchPosts = (
  limit: string,
  query?: string,
  isEnabled?: boolean,
) => {
  const { setPosts } = usePostsStore((state) => state)

  return useQuery<IPost[], ApiErrorResponse>({
    queryKey: [`${MOCK_URL}/${END_POINTS.POSTS}` + limit + query],
    queryFn: () =>
      get(`/${MOCK_URL}/${END_POINTS.POSTS}?limit=${limit}&title=${query}`),
    enabled: isEnabled,
    onSuccess(data) {
      setPosts(data)
    },
  })
}

export const useFetchPost = (id: string) => {
  return useQuery<IPost, ApiErrorResponse>({
    queryKey: [`${MOCK_URL}/${END_POINTS.POST}` + id],
    queryFn: () => get(`/${MOCK_URL}/${END_POINTS.POST}/${id}`),
    initialData: INITIAL_POST,
  })
}
