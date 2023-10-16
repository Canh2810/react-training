// Libs
import { memo } from 'react'

// Types
import { TypoVariants, TypoColors } from '@types'

// Stores
import { useThemeStore } from '@stores'

// Themes
import { palette, variants } from '@themes'

export interface TypographyProps {
  variant?: TypoVariants
  color?: TypoColors
  children: React.ReactNode
  component?: keyof JSX.IntrinsicElements
  className?: string
}

const Typography = ({
  variant = TypoVariants.TextSmall,
  color = TypoColors.Primary,
  children,
  component = 'p',
  className = '',
}: TypographyProps) => {
  const { theme } = useThemeStore((state) => state)
  const Component = component as keyof JSX.IntrinsicElements
  const typographyStyles = {
    ...variants[variant],
    ...palette[color](theme),
  }

  return (
    <Component className={className} style={typographyStyles}>
      {children}
    </Component>
  )
}

export default memo(Typography)
