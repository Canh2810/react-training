import { LazyExoticComponent, MemoExoticComponent } from 'react'

export type RouteType = {
  path: string
  Component: LazyExoticComponent<MemoExoticComponent<() => JSX.Element>>
}
