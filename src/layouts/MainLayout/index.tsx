import { Outlet } from 'react-router-dom'
import { Header, Footer, ErrorBoundary } from '@components'

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
          <Outlet />
        </ErrorBoundary>
      </div>
      <Footer />
    </>
  )
}

export default MainLayout
