import { calculateYears } from '@/lib/utils'
import {
  type Article,
  type Section
} from '@/types'

const birthDate = new Date(2010, 3, 20)

export const aboutUs: Section = {
  title: 'Acerca de nosotros',
  description: `Somo un equipo de profesionales con más de ${calculateYears(birthDate, new Date())} años de experiencia en el negocio editorial. Nuestro objetivo es democratizar la literatura y el conocimiento, facilitando el acceso al consumo y producción de la literatura y el arte.`,
  image: {
    src: '/images/home-about-us.webp',
    alt: 'Especialistas en el negocio editorial discutiendo con su compañera sobre un proyecto de edición de un libro.',
    width: 2750,
    height: 2750
  },
  items: [
    {
      title: 'Misión',
      description: 'Sabemos cómo hacer que este negocio sea más justo para nuestros autores, por eso, buscamos facilitar el acceso al consumo y producción de la literatura y el conocimiento. Asimismo, buscamos democratizar la posibilidad de escribir un libro, vivir de ello y dejar un legado para las futuras generaciones.'
    },
    {
      title: 'Visión',
      description: 'Con miras a los tiempos actuales y más de 12 años de experiencia en el negocio editorial, nuestra visión es transformar el mercado a nivel mundial, innovando en la forma de crear y consumir la literatura, el arte y el conocimiento.'
    }
  ]
}

export const culture: Section = {
  title: 'Nuestra cultura',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec.',
  items: [
    {
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec.'
    },
    {
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec.'
    },
    {
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec.'
    },
    {
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec.'
    },
    {
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec.'
    }
  ]
}

export const ourHistory: Article = {
  title: 'Nuestra razón de ser',
  items: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies. Nullam auctor, nunc nec ultricies. Nullam auctor, nunc nec ultricies.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies. Nullam auctor, nunc nec ultricies. Nullam auctor, nunc nec ultricies.'
  ]
}
