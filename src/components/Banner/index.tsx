// Libs
import { memo } from 'react'

// Types
import { IPost, TypoVariants } from '@types'

// Components
import { Badge, Typography } from '../index'

// Styles
import './index.css'

export interface PostCardProps {
  post: IPost
}

const Banner = ({ post }: PostCardProps) => {
  const { title, imageURL, author, category, date } = post || {}
  const { username, avatar } = author || {}

  return (
    <section className="banner">
      <img className="banner__img" src={imageURL} alt={title} />
      <div className="banner__card">
        <Badge title={category} />
        <Typography variant={TypoVariants.HeadingExtraLarge}>
          {title}
        </Typography>
        <div className="banner__card-footer">
          <img className="banner__author-avatar" src={avatar} alt={username} />
          <Typography>{username}</Typography>
          <Typography>{date}</Typography>
        </div>
      </div>
    </section>
  )
}

export default memo(Banner)
