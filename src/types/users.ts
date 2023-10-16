import { ILoginForm } from './common'

export interface IUser extends ILoginForm {
  id: string
  user_name: string
  avatar: string
  token: string
}
