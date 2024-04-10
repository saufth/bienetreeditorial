import { calculateYears } from '@/lib/utils'
import { CardStackItem, Heading, type NavItemExternal, type Section } from '@/types'

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

export const testimonials: CardStackItem[] = [
  {
    name: 'María Esther',
    designation: 'Autora',
    content: (
      <p>
        Valoro la comunicación clara, oportuna y a tiempo que
        mantiene el equipo Bienetre con el cliente.{' '}
        <b>Siempre dispuestos a atender nuestras dudas con mucho profesionalismo.</b>
        Estoy muy agradecida y bendecida de tenerlos en este camino.
      </p>
    ),
    image: {
      src: '/images/testimonials/home-testimonials0.webp',
      alt: 'María Esther, autora.',
      width: 240,
      height: 240
    }
  },
  {
    name: 'Manu Arora',
    designation: 'Autora',
    content: (
      <p>
        Al trabajar con <b>Bienetre</b>, recibí un trato personalizado,{' '}
        <b>calidad en el servicio y cumplimiento en las fechas</b>.
        Me gustó mucho su honestidad, ya que me habían hecho un
        presupuesto, pero al final, el libro tuvo una cantidad
        menor de hojas, y realizaron el ajuste del precio al final para
        cobrar menos de lo que habían presupuestado al inicio.
      </p>
    ),
    image: {
      src: '/images/testimonials/home-testimonials1.webp',
      alt: 'Manu Aurora, autora.',
      width: 240,
      height: 240
    }
  },
  {
    name: 'Pamela Bernal',
    designation: 'Autora',
    content: (
      <p>
        Aprecio a la organización y <b>buena atención del equipo Bienetre</b>{' '}
        en sus respectivas áreas. Tienen <b>precios razonables y planes de pagos</b>.
        Obtuve un trabajo final de calidad y excelencia.
      </p>
    ),
    image: {
      src: '/images/testimonials/home-testimonials2.webp',
      alt: 'Pamela Bernal, autora.',
      width: 240,
      height: 240
    }
  },
  {
    name: 'Nilvia Sención',
    designation: 'Autora',
    content: (
      <p>
        El equipo <b>Bienetre</b> tiene un <b>excelente servicio al cliente</b>,
        calidad humana y <b>cercanía con el cliente</b> sin perder el profesionalismo.
      </p>
    ),
    image: {
      src: '/images/testimonials/home-testimonials3.webp',
      alt: 'Nilvia Sención, autora.',
      width: 240,
      height: 240
    }
  }
]

export const trustedBy: NavItemExternal[] = [
  {
    name: 'Clinica Union Medica',
    url: 'https://clinicaunionmedica.com',
    image: {
      src: '/images/clients/clinicaunionmedica.webp',
      alt: 'Logo de la Clínica Unión Médica',
      width: 340,
      height: 234
    }
  },
  {
    name: 'jetBlue',
    url: 'https://www.jetblue.com',
    image: {
      src: '/images/clients/jetblue.webp',
      alt: 'Logo de jetBlue',
      width: 400,
      height: 134
    }
  },
  {
    name: 'Paloma De La Cruz',
    url: 'https://www.palomadelacruz.com.do',
    image: {
      src: '/images/clients/paloma-de-la-cruz.webp',
      alt: 'Logo de Paloma De La Cruz',
      width: 288,
      height: 154
    }
  },
  {
    name: 'TED',
    url: 'https://www.ted.com',
    image: {
      src: '/images/clients/ted.webp',
      alt: 'Logo de TED',
      width: 640,
      height: 230
    }
  },
  {
    name: 'REUTERS',
    url: 'https://www.reuters.com',
    image: {
      src: '/images/clients/reuters.webp',
      alt: 'Logo de REUTERS',
      width: 626,
      height: 150
    }
  }
]

export const faq: Heading[] = [
  {
    title: '¿Corrigen las faltas ortográficas y mejoran el texto para que sea más entendible?',
    description: 'El texto pasa por tres correcciones para que el resultado final tenga un mejor acabado, pues a través del tiempo hemos notado que con una sola corrección o dos no es suficiente. Se le realizan correcciones ortotipográficas y de sintaxis, además se le da formato de acuerdo a las normas APA o Vancouver, según sea el caso.'
  },
  {
    title: '¿Veré el texto final antes de la diagramación?',
    description: 'Sí, el autor está involucrado durante todo el proceso. Luego de las primeras dos correcciones se le hará entrega del texto para que corrobore todas las modificaciones realizadas y agregue o siga sugerencias de los correctores. Una vez realizadas esas primeras observaciones, se le volverá a enviar para que apruebe el texto final.'
  },
  {
    title: '¿Cuánto tiempo toma el proceso de edición, diagramación y publicación?',
    description: 'Esto dependerá de la demanda de trabajo que tenga el equipo, el tipo de texto que envíe el cliente y su extensión. Por lo regular el tiempo oscila entre los 3 y 6 meses.'
  },
  {
    title: '¿Cuál es el intervalo entre pagos?',
    description: 'Todo dependerá del tiempo de duración del proceso y la cantidad de servicios que solicite. De todas formas, ofrecemos planes de pago al autor de manera que el trabajo vaya avanzando conforme a los pagos.'
  },
  {
    title: '¿Con qué porcentaje se queda Bienetre por la venta de mis libros?',
    description: 'Con ningún porcentaje. Las ganancias o regalías por la venta de los libros vendidos son 100% para el autor. Nosotros solo cobramos por servicios realizados.'
  },
  {
    title: '¿El precio de mi libro lo establece Amazon?',
    description: 'No, tú decides el precio de tu libro. Nosotros te asesoraremos y propondremos un precio, según las características que posea el libro y nuestra expereiencia en el sector.'
  },
  {
    title: '¿Tendré acceso a la cuenta de kdp Amazon?',
    description: 'Sí. Luego de creado el usuario se le facilitarán los accesos con unos videos de orientación, para que se familiarice con la página y agregue los datos bancarios para recibir las regalías. Una vez publicado el libro, puede cambiar la clave si así lo desea. Tendrá control total de su cuenta de Amazon y ganancias. '
  },
  {
    title: '¿Cuántos libros puedo pedir como autor en Amazon?',
    description: 'Puede pedir desde 1 hasta 999 ejemplares a precio de autor.'
  },
  {
    title: '¿Puedo saber cómo se verá mi libro impreso antes de publicar?',
    description: 'Si el cliente desea revisar la versión impresa antes de la publicación, deberá manifestarlo al equipo encargado de publicación para que coloquen el material anticipadamente y así el autor pueda recibir una copia de prueba o prueba de color.'
  }
]
