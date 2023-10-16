// Libs
import { memo, ButtonHTMLAttributes, ReactNode } from 'react'

// Types
import { ButtonVariants } from '@types'

// Themes
import { variants } from '@themes'

// Stores
import { useThemeStore } from '@stores'

// Styles
import './index.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
  children?: ReactNode
  isLoading?: boolean
  className?: string
  onClick?: () => void
}

const Button = ({
  variant = ButtonVariants.Outlined,
  children,
  isLoading,
  className = '',
  onClick,
  ...props
}: ButtonProps) => {
  const [theme] = useThemeStore((state) => [state.theme])

  const buttonStyle =
    variant === ButtonVariants.Container
      ? variants.container
      : variants.outlined(theme)

  return (
    <button
      className={`btn ${className}`}
      disabled={isLoading}
      onClick={onClick}
      style={{ ...buttonStyle }}
      {...props}
    >
      {children}
    </button>
  )
}

export default memo(Button)
