// Libs
import { ChangeEvent, memo } from 'react'

// Types
import { TextFieldTypes, TextFieldVariants } from '@types'

// Themes
import { variants } from '@themes'

// Stores
import { useThemeStore } from '@stores'

// Style
import './index.css'

export interface TextFieldProps {
  variant?: TextFieldVariants
  icon: JSX.Element
  name: string
  placeholder: string
  id: string
  value: string
  type?: TextFieldTypes
  errorMessage?: string
  className?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const TextField = ({
  variant = TextFieldVariants.Outlined,
  icon,
  name,
  placeholder,
  id,
  value,
  type = TextFieldTypes.Text,
  className = '',
  errorMessage,
  onChange,
}: TextFieldProps) => {
  const { theme } = useThemeStore((state) => state)

  const textFieldStyle = variants[variant](theme)

  return (
    <div className={`text-field ${className}`} style={{ ...textFieldStyle }}>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {icon}
      {errorMessage && (
        <p className="text-field__error-message">{errorMessage}</p>
      )}
    </div>
  )
}

export default memo(TextField)
