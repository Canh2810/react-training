import { INITIAL_POST } from '@constants'
import { IPost } from '@types'
import { create } from 'zustand'

type PostsState = {
  posts: IPost[]
}

type PostsActions = {
  setPosts: (posts: IPost[]) => void
}

const INITIAL_POSTS_STATE: PostsState = {
  posts: [INITIAL_POST],
}

export const usePostsStore = create<PostsState & PostsActions>((set) => ({
  ...INITIAL_POSTS_STATE,
  setPosts: (posts: IPost[]) => {
    set({ posts })
  },
}))
