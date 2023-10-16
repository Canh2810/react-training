export interface IPost {
  id: string
  category: string
  title: string
  author: {
    avatar: string
    username: string
  }
  date: string
  imageURL: string
}
