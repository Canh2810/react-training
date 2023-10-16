// Libs
import { useQuery } from '@tanstack/react-query'

// Constants
import { END_POINTS, MOCK_URL } from '@constants'

// Stores
import { useUserStore } from '@stores'

// Types
import { ApiErrorResponse, IUser } from '@types'

// Utils
import { get } from '@utils'

export const useFetchUser = () => {
  const [setUser] = useUserStore((state) => [state.setUser])
  const token = localStorage.getItem('auth')
  return useQuery<IUser, ApiErrorResponse>({
    queryKey: [`${MOCK_URL}/${END_POINTS.USER}` + token],
    queryFn: () => get(`/${MOCK_URL}/${END_POINTS.USER}/${token}`),
    onSuccess(data) {
      setUser(data)
    },
  })
}
