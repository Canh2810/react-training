// Libs
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Assets
import { Logo } from '@assets/images'
import { ChevronDown, Search } from '@assets/icons'

// Components
import { Menu, TextField, DarkModeSwitch, Typography } from '../'

// Stores
import { useQueryStore, useThemeStore, useUserStore } from '@stores'

// Themes
import { colors } from '@themes/color'

// Constants
import { HEADER_MENU, ROUTES, THEMES } from '@constants'

// Types
import { TextFieldVariants } from '@types'

// Style
import './index.css'

const Header = () => {
  const navigate = useNavigate()
  const [isShowDropDown, setIsShowDropdown] = useState<boolean>(false)
  const { theme } = useThemeStore((state) => state)
  const { query, setQuery } = useQueryStore((state) => state)
  const { user, clearUser } = useUserStore((state) => state)
  const { avatar, user_name } = user || {}
  const isDarkMode = theme === THEMES.DARK

  const handleLogout = useCallback(() => {
    clearUser()
    localStorage.removeItem('auth')
    navigate(ROUTES.LOGIN)
  }, [clearUser])

  const handleChangeSearchBar = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value)
    },
    [setQuery],
  )

  const handleToggleShowDropdown = useCallback(() => {
    setIsShowDropdown((prev) => !prev)
  }, [])

  return (
    <div className="header">
      <Logo
        {...(isDarkMode && {
          colorFill: colors.common.white,
        })}
      />
      <Menu listItems={HEADER_MENU} />
      <div className="header__right">
        <TextField
          name="search"
          id="search"
          placeholder="search"
          value={query}
          icon={<Search />}
          onChange={handleChangeSearchBar}
          {...(isDarkMode && {
            variant: TextFieldVariants.Filled,
          })}
        />
        <DarkModeSwitch />
        <div className="user" onClick={handleToggleShowDropdown}>
          <div className="user__info">
            <img src={avatar} alt={user_name} className="user__avatar" />
            <Typography>{user_name}</Typography>
            <ChevronDown
              {...(isDarkMode && {
                colorFill: colors.light[400],
              })}
            />
          </div>
          {isShowDropDown && (
            <div className="user__dropdown">
              <ul>
                <li onClick={handleLogout}>
                  <Typography>Logout</Typography>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
