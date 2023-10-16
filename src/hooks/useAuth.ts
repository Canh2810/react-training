import { END_POINTS, MOCK_URL } from '@constants'
import { useMutation } from '@tanstack/react-query'
import { ApiErrorResponse, ILoginForm, IUser } from '@types'
import { post } from '@utils'

export const useAuth = () => {
  const login = useMutation<IUser, ApiErrorResponse, ILoginForm>({
    mutationFn: ({ email, password }: ILoginForm) =>
      post(`/${MOCK_URL}/${END_POINTS.LOGIN}`, { email, password }),
  })
  return { login }
}
