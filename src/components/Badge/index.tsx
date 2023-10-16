// Themes
import { variants } from '@themes'

// Types
import { commonVariants } from '@types'

// Style
import './index.css'

export interface BadgeProps {
  variant?: commonVariants
  title: string
}

const Badge = ({ variant = commonVariants.Primary, title }: BadgeProps) => {
  const badgeStyle = variants[variant]
  return (
    <span className="badge" style={badgeStyle}>
      {title}
    </span>
  )
}

export default Badge
