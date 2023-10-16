// Libs
import { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Routes
import { PUBLIC_ROUTES, PROTECTED_ROUTES } from '@routes'

// Types
import { RouteType } from '@types'

// UI
import { LoadingIndicator, ScrollToTop } from '@components'
import { ProtectedLayout, MainLayout } from '@layouts'

// Stores
import { useThemeStore } from '@stores'

import './app.css'

const App = () => {
  const [theme] = useThemeStore((state) => [state.theme])

  return (
    <div className="app" data-theme={theme}>
      <Router>
        <ScrollToTop />
        <Routes>
          {PUBLIC_ROUTES.map(({ path, Component }: RouteType) => (
            <Route
              key={path}
              path={path}
              element={
                <Suspense fallback={<LoadingIndicator />}>
                  <Component />
                </Suspense>
              }
            />
          ))}
          <Route element={<ProtectedLayout />}>
            <Route element={<MainLayout />}>
              {PROTECTED_ROUTES.map(({ path, Component }: RouteType) => (
                <Route
                  key={path}
                  path={path}
                  element={
                    <Suspense fallback={<LoadingIndicator />}>
                      <Component />
                    </Suspense>
                  }
                />
              ))}
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
