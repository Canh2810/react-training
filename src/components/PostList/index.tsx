// Libs
import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

// Components
import { PostCard } from '../index'

// Types
import { IPost } from '@types'

// Style
import './index.css'
import { ROUTES } from '@constants'
import { useQueryStore } from '@stores'

export interface PostListProps {
  posts: IPost[]
}

const PostList = ({ posts }: PostListProps) => {
  const navigate = useNavigate()
  const { clearQuery } = useQueryStore((state) => state)

  const handleClickPostCard = useCallback(
    (id: string) => {
      navigate(ROUTES.SINGLE_POST_PARAM + id)
      clearQuery()
    },
    [clearQuery],
  )

  return (
    <div className="post-list">
      {posts.map((post: IPost) => {
        const { id } = post || {}
        const handleClick = () => handleClickPostCard(id)
        return <PostCard key={id} post={post} onClick={handleClick} />
      })}
    </div>
  )
}

export default memo(PostList)
