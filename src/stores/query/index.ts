import { create } from 'zustand'

type QueryState = {
  query: string
}

type QueryActions = {
  setQuery: (query: string) => void
  clearQuery: () => void
}

const INITIAL_QUERY_STATE: QueryState = {
  query: '',
}

export const useQueryStore = create<QueryState & QueryActions>((set) => ({
  ...INITIAL_QUERY_STATE,
  setQuery: (query: string) => {
    set({ query })
  },
  clearQuery: () => {
    set({ query: '' })
  },
}))
