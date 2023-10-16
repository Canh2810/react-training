// Libs
import { Outlet, Navigate } from 'react-router-dom'

// Constants
import { ROUTES } from '@constants'

const ProtectedLayout = () => {
  const token = localStorage.getItem('auth')

  if (!token) {
    return <Navigate to={ROUTES.LOGIN} replace />
  }
  return <Outlet />
}

export default ProtectedLayout
