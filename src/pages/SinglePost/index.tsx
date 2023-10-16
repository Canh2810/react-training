// Libs
import { memo } from 'react'
import { useParams } from 'react-router-dom'

// Components
import {
  Advertisement,
  Badge,
  LoadingIndicator,
  Typography,
  SearchResults,
} from '@components'

// Types
import { TypoVariants } from '@types'

//Style
import './index.css'
import { useDebounce, useFetchPost, useFetchPosts } from '@hooks'
import { usePostsStore, useQueryStore } from '@stores'

const SinglePost = () => {
  const param = useParams()
  const { id } = param || {}
  const { posts } = usePostsStore((state) => state)
  const { query } = useQueryStore((state) => state)
  const {
    data,
    isLoading: isLoadingFetchPost,
    isError: isErrorFetchPost,
    error: errorFetchPost,
  } = useFetchPost(id || '')

  const debouncedValue = useDebounce<string>(query)
  const isEnableFetchListPosts = query.length > 0

  const {
    isFetching: isLoadingFetchListPosts,
    isError: isErrorFetchListPosts,
    error: errorFetchListPosts,
  } = useFetchPosts('', debouncedValue, isEnableFetchListPosts)

  const { category, title, author, date, imageURL } = data || {}
  const { avatar, username } = author || {}

  const isLoading = isLoadingFetchPost || isLoadingFetchListPosts
  const isError = isErrorFetchPost || isErrorFetchListPosts
  const errorMessage = errorFetchPost?.message || errorFetchListPosts?.message

  return (
    <article className="single-post">
      {isError && <Typography>{errorMessage}</Typography>}
      {debouncedValue.length > 0 ? (
        <SearchResults posts={posts} />
      ) : (
        <>
          <Badge title={category} />
          <Typography component="h1" variant={TypoVariants.HeadingExtraLarge}>
            {title}
          </Typography>
          <div className="single-post__short-info">
            <div className="single-post__short-info-author">
              <img
                className="single-post__short-info-avatar"
                src={avatar}
                alt={username}
              />
              <Typography variant={TypoVariants.TextExtraSmall}>
                {username}
              </Typography>
            </div>
            <Typography variant={TypoVariants.TextExtraSmall}>
              {date}
            </Typography>
          </div>
          <img src={imageURL} alt={title} className="single-post__img" />
          <article>
            <Typography variant={TypoVariants.TextLarge}>
              Traveling is an enriching experience that opens up new horizons,
              exposes us to different cultures, and creates memories that last a
              lifetime. However, traveling can also be stressful and
              overwhelming, especially if you don't plan and prepare adequately.
              In this blog article, we'll explore tips and tricks for a
              memorable journey and how to make the most of your travels. One of
              the most rewarding aspects of traveling is immersing yourself in
              the local culture and customs. This includes trying local cuisine,
              attending cultural events and festivals, and interacting with
              locals. Learning a few phrases in the local language can also go a
              long way in making connections and showing respect.
            </Typography>
          </article>
          <article>
            <Typography component="h2" variant={TypoVariants.HeadingLarge}>
              Research Your Destination
            </Typography>
            <Typography variant={TypoVariants.TextLarge}>
              Before embarking on your journey, take the time to research your
              destination. This includes understanding the local culture,
              customs, and laws, as well as identifying top attractions,
              restaurants, and accommodations. Doing so will help you navigate
              your destination with confidence and avoid any cultural faux pas.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi
              ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean
              euismod elementum nisi quis eleifend quam adipiscing vitae.
              Viverra adipiscing at in tellus.
            </Typography>
          </article>
          <article>
            <Typography component="h2" variant={TypoVariants.HeadingLarge}>
              Plan Your Itinerary
            </Typography>
            <Typography variant={TypoVariants.TextLarge}>
              While it's essential to leave room for spontaneity and unexpected
              adventures, having a rough itinerary can help you make the most of
              your time and budget. Identify the must-see sights and experiences
              and prioritize them according to your interests and preferences.
              This will help you avoid overscheduling and ensure that you have
              time to relax and enjoy your journey. Vitae sapien pellentesque
              habitant morbi tristique. Luctus venenatis lectus magna fringilla.
              Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu
              non sodales neque sodales ut etiam sit amet.
            </Typography>
            <div className="single-post__quote">
              <Typography
                variant={TypoVariants.TexExtraLarge}
                className="single-post__quote-content"
              >
                “ Traveling can expose you to new environments and potential
                health risks, so it's crucial to take precautions to stay safe
                and healthy. ”
              </Typography>
            </div>
            <img
              src="https://plus.unsplash.com/premium_photo-1666963323736-5ee1c16ef19d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
              alt="Plan Your Itinerary"
              className="single-post__img"
            />
          </article>
          <Advertisement />
          <article>
            <Typography component="h2" variant={TypoVariants.HeadingLarge}>
              Pack Lightly and Smartly
            </Typography>
            <Typography variant={TypoVariants.TextLarge}>
              Packing can be a daunting task, but with some careful planning and
              smart choices, you can pack light and efficiently. Start by making
              a packing list and sticking to it, focusing on versatile and
              comfortable clothing that can be mixed and matched. Invest in
              quality luggage and packing organizers to maximize space and
              minimize wrinkles.
            </Typography>
          </article>
          <article>
            <Typography component="h2" variant={TypoVariants.HeadingLarge}>
              Stay Safe and Healthy
            </Typography>
            <Typography variant={TypoVariants.TextLarge}>
              Traveling can expose you to new environments and potential health
              risks, so it's crucial to take precautions to stay safe and
              healthy. This includes researching any required vaccinations or
              medications, staying hydrated, washing your hands frequently, and
              using sunscreen and insect repellent. It's also essential to keep
              your valuables safe and secure and to be aware of your
              surroundings at all times.
            </Typography>
          </article>
          <article>
            <Typography component="h2" variant={TypoVariants.HeadingLarge}>
              Immerse Yourself in the Local Culture
            </Typography>
            <Typography variant={TypoVariants.TextLarge}>
              One of the most rewarding aspects of traveling is immersing
              yourself in the local culture and customs. This includes trying
              local cuisine, attending cultural events and festivals, and
              interacting with locals. Learning a few phrases in the local
              language can also go a long way in making connections and showing
              respect.
            </Typography>
          </article>
          <article>
            <Typography component="h2" variant={TypoVariants.HeadingLarge}>
              Capture Memories
            </Typography>
            <Typography variant={TypoVariants.TextLarge}>
              Finally, don't forget to capture memories of your journey. Whether
              it's through photographs, journaling, or souvenirs, preserving the
              moments and experiences of your travels can bring joy and
              nostalgia for years to come. However, it's also essential to be
              present in the moment and not let technology distract you from the
              beauty of your surroundings.
            </Typography>
          </article>
          <article>
            <Typography component="h2" variant={TypoVariants.HeadingLarge}>
              Conclusion:
            </Typography>
            <Typography variant={TypoVariants.TextLarge}>
              Traveling is an art form that requires a blend of planning,
              preparation, and spontaneity. By following these tips and tricks,
              you can make the most of your journey and create memories that
              last a lifetime. So pack your bags, embrace the adventure, and
              enjoy the ride.
            </Typography>
          </article>
        </>
      )}
      {isLoading && <LoadingIndicator />}
    </article>
  )
}

export default memo(SinglePost)
