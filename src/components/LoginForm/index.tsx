// Libs
import { memo, useCallback } from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'

// Components
import { Button, TextField, Typography } from '../index'

// Types
import {
  ButtonVariants,
  ILoginForm,
  LoginFormField,
  TextFieldTypes,
  TypoColors,
  TypoVariants,
} from '@types'

// Constants
import { ERROR_MESSAGES } from '@constants'

// Icons
import { Email, Lock } from '@assets/icons'

// Utils
import { checkEmail } from '@utils'

// Style
import './index.css'

export interface LoginFormProps {
  errorMessage?: string
  onSubmit: (data: ILoginForm) => void
}

const LoginForm = ({ errorMessage, onSubmit }: LoginFormProps) => {
  const loginFormField: LoginFormField[] = ['email', 'password']
  const { control, clearErrors, handleSubmit } = useForm<ILoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const handleSubmitLoginForm: SubmitHandler<ILoginForm> = useCallback(
    (data: ILoginForm) => {
      onSubmit(data)
    },
    [onSubmit],
  )

  return (
    <form onSubmit={handleSubmit(handleSubmitLoginForm)} className="login-form">
      <Typography component="h1" variant={TypoVariants.HeadingMedium}>
        LOGIN
      </Typography>
      {loginFormField.map((item) => {
        const title = item === 'email' ? 'Email' : 'Password'
        return (
          <Controller
            key={item}
            control={control}
            name={item}
            rules={{
              required: ERROR_MESSAGES.FIELD_REQUIRED(title),
              ...(item === 'email' && {
                validate: (value: string) => checkEmail(value),
              }),
            }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <TextField
                icon={item === 'email' ? <Email /> : <Lock />}
                id={item}
                type={
                  item === 'email'
                    ? TextFieldTypes.Text
                    : TextFieldTypes.Password
                }
                name={item}
                placeholder={title}
                value={value}
                errorMessage={error?.message}
                onChange={(data) => {
                  clearErrors(item)
                  onChange(data)
                }}
              />
            )}
          />
        )
      })}
      <Button variant={ButtonVariants.Container} type="submit">
        Login
      </Button>
      {errorMessage && (
        <Typography
          className="login-form__error-message"
          color={TypoColors.Danger}
        >
          {errorMessage}
        </Typography>
      )}
    </form>
  )
}

export default memo(LoginForm)
