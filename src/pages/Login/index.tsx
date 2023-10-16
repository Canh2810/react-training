// Libs
import { memo, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Component
import { LoadingIndicator, LoginForm } from '@components'

// Hooks
import { useAuth } from '@hooks'

// Types
import { ILoginForm } from '@types'

// Constants
import { ROUTES } from '@constants'

// Style
import './index.css'

const Login = () => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState<string>('')

  const {
    login: { mutate, isLoading },
  } = useAuth()

  const handleSubmitLoginForm = useCallback(
    (data: ILoginForm) => {
      mutate(data, {
        onSuccess: (response) => {
          localStorage.setItem('auth', response.token)
          navigate(ROUTES.HOME)
        },
        onError: (error) => {
          setErrorMessage(error.message)
        },
      })
    },
    [mutate, navigate],
  )

  return (
    <div className="login">
      <LoginForm errorMessage={errorMessage} onSubmit={handleSubmitLoginForm} />
      {isLoading && <LoadingIndicator />}
    </div>
  )
}

export default memo(Login)
