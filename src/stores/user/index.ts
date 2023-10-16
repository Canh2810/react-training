import { IUser } from '@types'
import { create } from 'zustand'

type UserState = {
  user: IUser | null
}

type UserActions = {
  setUser: (user: IUser) => void
  clearUser: () => void
}

const INITIAL_USER_STATE: UserState = {
  user: null,
}

export const useUserStore = create<UserState & UserActions>((set) => ({
  ...INITIAL_USER_STATE,
  setUser: (user: IUser) => {
    set({ user })
  },
  clearUser: () => {
    set({
      ...INITIAL_USER_STATE,
    })
  },
}))
