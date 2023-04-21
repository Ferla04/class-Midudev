import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { Link, Route, Router } from '../Router'
import { getCurrentPath } from '../utils'

vi.mock('../utils.js', () => ({
  getCurrentPath: vi.fn()
}))

describe('Router', () => {
  // Limpiar la pantalla cada vez que hacemos un tets
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('should render without problems', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })

  it('should render 404 if no routes match', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
    expect(screen.getByText('404')).toBeTruthy()
  })

  it('should render the component od the first route that matches', () => {
    getCurrentPath.mockReturnValue('/about')

    const routes = [
      {
        path: '/',
        Component: () => <h1>Home</h1>
      },
      {
        path: '/about',
        Component: () => <h1>About</h1>
      }
    ]

    render(<Router routes={routes} />)
    expect(screen.getByText('About')).toBeTruthy()
  })

  it('should navigate using links', async () => {
    getCurrentPath.mockReturnValueOnce('/')

    render(
      <Router>
        <Route
          path='/' Component={() => {
            return (
              <>
                <h1>Home</h1>
                <Link to='/about'>Go to About</Link>
              </>
            )
          }}
        />
        <Route path='/about' Component={() => <h1>About</h1>} />
      </Router>
    )

    // click on link
    const button = screen.getByText(/Go to About/)
    fireEvent.click(button)

    const aboutTitle = await screen.findByText('About')

    // check the new route is rendered
    expect(aboutTitle).toBeTruthy()
  })
})

// ASYNC queries
// * https://testing-library.com/docs/react-testing-library/cheatsheet
