// Stores
import { useThemeStore } from '@stores'

// Icons
import { Sunny } from '@assets'

// Style
import './index.css'

const DarkModeSwitch = () => {
  const { toggleTheme } = useThemeStore((state) => state)

  return (
    <label className="dark-mode-switch" htmlFor="checkbox">
      <input type="checkbox" id="checkbox" onChange={toggleTheme} />
      <div className="dark-mode-switch__slider dark-mode-switch__slider--round">
        <div className="dark-mode-switch__icon">
          <Sunny />
        </div>
      </div>
    </label>
  )
}

export default DarkModeSwitch
