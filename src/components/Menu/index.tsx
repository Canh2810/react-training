// Libs
import { CSSProperties, memo } from 'react'
import { Link } from 'react-router-dom'

// Types
import { IMenuItem, MenuVariants } from '@types'

// Stores
import { useThemeStore } from '@stores'

// Themes
import { variants } from '@themes'

// Style
import './index.css'

export interface MenuProps {
  listItems: IMenuItem[]
  variant?: MenuVariants
  className?: string
}

const Menu = ({
  listItems,
  variant = MenuVariants.Horizontal,
  className = '',
}: MenuProps) => {
  const { theme } = useThemeStore((state) => state)

  const menuStyle = {
    ...(variants[variant] as CSSProperties),
  }

  return (
    <ul className={`menu ${className}`} style={{ ...menuStyle }}>
      {listItems.map(({ title, href }: IMenuItem) => (
        <li
          key={title}
          className={`menu__item menu__item--${variant} menu__item--${variant}--${theme}`}
        >
          <Link to={href}>{title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default memo(Menu)
