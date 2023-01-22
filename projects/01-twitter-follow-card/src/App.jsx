import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'juanerq',
    name: 'Juan Reyes',
    isFollowing: false
  },
  {
    userName: 'Ferla04',
    name: 'Fernanda Velasquez',
    isFollowing: true
  }
]

export const App = () => {
  return (
    <section className='App'>
      {
        users.map(({ name, userName, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            isFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>

  )
}
