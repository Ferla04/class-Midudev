import { Link } from '../Router'

export default function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un React Router desde cero</p>
      <Link to='/about'>Ir a sobre mi</Link>
    </>
  )
}
