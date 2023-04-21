import { Link } from '../Router'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    description: '¡Hola! Me llamo Fer y estoy aprendiendo a hacer un React Router.',
    button: 'Ir a la home'
  },
  en: {
    title: 'Sobre us',
    description: '¡Hi! my name is Fer and I am learning to make a React Router.',
    button: 'Go to home page'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.es
}

export default function AboutPage ({ routeParams }) {
  const { title, description, button } = useI18n(routeParams.lang)

  return (
    <>
      <h1>{title}</h1>
      <img src='https://www.shutterstock.com/image-vector/waving-hand-bye-goodbye-silhouette-260nw-1613786689.jpg' alt='saludo' />
      <p>{description}</p>
      <Link to='/'>{button}</Link>
    </>
  )
}
