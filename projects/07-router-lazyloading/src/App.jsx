import { lazy, Suspense } from 'react'

// IMPORTACIONES ESTÁTICAS
import Page404 from './pages/404'
import SearchPage from './pages/Search'

import { Route, Router } from './Router'
// En la importaciones se estan cargando todos los archivos
// Inpedendientemente si los usamos, para eso usamos el lazy de react

// IMPORTACIONES DINÁMICAS
const LazyHomePage = lazy(() => import('./pages/Home.jsx'))
const LazyAboutPage = lazy(() => import('./pages/About.jsx'))

const appRoutes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
