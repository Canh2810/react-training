// Libs
import { memo } from 'react'

// Types
import { IPost, TypoVariants, commonVariants } from '@types'

// Components
import { Badge, Typography } from '../index'

// Styles
import './index.css'

export interface PostCardProps {
  post: IPost
  onClick: () => void
}

const PostCard = ({ post, onClick }: PostCardProps) => {
  const { title, imageURL, author, category, date } = post || {}
  const { username, avatar } = author || {}

  return (
    <div className="post-card" onClick={onClick}>
      <img className="post-card__img" src={imageURL} alt={title} />
      <div className="post-card__content">
        <Badge variant={commonVariants.Secondary} title={category} />
        <Typography variant={TypoVariants.HeadingLarge}>{title}</Typography>
        <div className="post-card__footer">
          <img
            className="post-card__author-avatar"
            src={avatar}
            alt={username}
          />
          <Typography variant={TypoVariants.TextMedium}>{username}</Typography>
          <Typography variant={TypoVariants.TextMedium}>{date}</Typography>
        </div>
      </div>
    </div>
  )
}

export default memo(PostCard)
