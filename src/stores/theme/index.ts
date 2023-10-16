import { create } from 'zustand'
import { THEMES } from '@constants'

type ThemeState = {
  theme: string
}

type ThemeActions = {
  toggleTheme: () => void
}

const INITIAL_THEME_STATE: ThemeState = {
  theme: THEMES.LIGHT,
}

export const useThemeStore = create<ThemeState & ThemeActions>((set) => ({
  ...INITIAL_THEME_STATE,
  toggleTheme: (): void => {
    set((state) => ({
      theme: state.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT,
    }))
  },
}))
