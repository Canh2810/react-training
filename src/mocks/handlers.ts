import { rest } from 'msw'
import { MOCK_URL, END_POINTS, USERS_MOCK, POSTS_MOCK } from '@constants'

export const handlers = [
  // Login
  rest.post(`/${MOCK_URL}/${END_POINTS.LOGIN}`, (req, res, ctx) => {
    const { email, password } = req.body as {
      email: string
      password: string
    }

    if (!email || !password) {
      return res(
        ctx.status(400),
        ctx.json({ error_message: 'Missing username or password' }),
      )
    }

    const user = USERS_MOCK.find(
      (user) => user.email === email && user.password === password,
    )

    if (user) {
      return res(ctx.status(200), ctx.json(user))
    } else {
      return res(
        ctx.status(401),
        ctx.json({ error_message: 'Invalid email or password' }),
      )
    }
  }),

  // List posts
  rest.get(`/${MOCK_URL}/${END_POINTS.POSTS}`, (req, res, ctx) => {
    const limitParam = req.url.searchParams.get('limit')
    const limit = limitParam ? parseInt(limitParam) : POSTS_MOCK.length
    const title = req.url.searchParams.get('title') || ''

    // Search post by title
    const filteredPosts = POSTS_MOCK.filter((post) => {
      return post.title.toLowerCase().includes(title.toLowerCase())
    })

    // Limit the number of posts
    const posts = filteredPosts.slice(0, limit)

    return res(ctx.status(200), ctx.json(posts))
  }),

  // Single post
  rest.get(`/${MOCK_URL}/${END_POINTS.POST}/:id`, (req, res, ctx) => {
    const postId = req.params.id

    const post = POSTS_MOCK.find((post) => post.id === postId)

    if (post) {
      return res(ctx.status(200), ctx.json(post))
    } else {
      return res(ctx.status(404), ctx.json({ error_message: 'Post not found' }))
    }
  }),

  // Get user by token
  rest.get(`/${MOCK_URL}/${END_POINTS.USER}/:token`, (req, res, ctx) => {
    const token = req.params.token

    const user = USERS_MOCK.find((user) => user.token === token)

    if (user) {
      return res(ctx.status(200), ctx.json(user))
    } else {
      return res(ctx.status(404), ctx.json({ error_message: 'User not found' }))
    }
  }),
]
