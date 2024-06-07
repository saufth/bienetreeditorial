import { LinkAuthor } from '@/components/link-author'
import type {
  Author,
  CardStackItem,
  NavItemExternal
} from '@/types'

export const founder: Author = {
  name: 'Keila González Báez',
  url: 'https://www.keilagonzalezbaez.com/'
}

export const magazine: Author = {
  name: 'Bien-être',
  url: 'https://issuu.com/bienetremedia/'
}

export const aboutUs = {
  label: 'Acerca de nosotros',
  title: 'Descubre Bienetre',
  description: 'Conoce nuestro origen y cómo podemos ayudarte a ganar.',
  content: {
    description: () => (
      <p className='text-muted-foreground f-subhead-1 text-balance'>
        <b>Bienetre Editorial</b> nació en 2010 con el objetivo de acercar a las personas a vivir una vida más feliz
        y saludable, a través de su revista bimestral <LinkAuthor {...magazine} />. Durante más de 10 años docenas de
        personalidades han desfilado por sus páginas brindando entrevistas exclusivas, así como sus secretos para el éxito.
        {' '}<LinkAuthor url='https://www.isabelallende.com/' name='Isabel Allende' />,
        {' '}<LinkAuthor url='https://juliobevione.com/' name='Julio Bevione' />,
        {' '}<LinkAuthor url='https://gloriaestefan.com/' name='Gloria Estefan' />,
        {' '}<LinkAuthor url='https://es.wikipedia.org/wiki/Rigoberta_Mench%C3%BA' name='Rigoberta Menchú' />{' '}
        son solo algunas de ellas.
      </p>
    ),
    items: [
      {
        title: 'Reinvención',
        description: () => (
          <p className='text-muted-foreground f-subhead-2 text-balance'>
            A mediados de esa década, su fundadora <LinkAuthor {...founder} /> decide publicar
            su primer libro y con ese nacimiento llegó un gran interés por parte de la audiencia
            expresando su deseo de publicar. Es allí donde decide abrir una nueva línea de
            negocios para ofrecer a las personas la posibilidad de <b>publicar sus libros</b>{' '}
            con la <b>calidad y el rigor</b> que amerita dicho trabajo.
          </p>
        )
      },
      {
        title: 'Resultados',
        description: () => (
          <>
            <p className='text-muted-foreground f-subhead-2 text-balance'>
              Hasta la fecha alrededor de 300 personas se han convertido en autores gracias a su método
              de escritura llamado <b>A90D</b> o, a través de los <b>servicios de edición y publicación</b> que
              brindamos en la editorial de la mano de nuestro equipo: gente responsable, profesional,
              organizada, eficiente, innovadora y creativa.
            </p>
            <p className='text-muted-foreground f-subhead-2 text-balance'>
              Un gran porcentaje de nuestros autores han alcanzado el rango de <b>best sellers en Amazon</b> con
              sus libros; estrategia en la que la editorial <b>Bienetre</b> se especializa.
            </p>
          </>
        )
      },
      {
        title: 'Porqué podemos ayudarte',
        description: () => (
          <>
            <p className='text-muted-foreground f-subhead-2 text-balance'>
              Así pues, el camino como escritora recorrido por nuestra CEO <LinkAuthor {...founder} />,
              nuestra <b>experiencia de 14 años</b> en el mundo de la edición, así como nuestra{' '}
              <b>maestría en los secretos de Amazon</b>, son tu pase dorado para elevarte al
              siguiente nivel de autoridad en tu vida y carrera. <b>¡Trabajemos juntos y hagámoslo posible!</b>
            </p>
          </>
        )
      }
    ]
  }
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

export const faq = {
  title: 'Preguntas frecuentes',
  description: 'No te quedes con dudas.',
  items: [
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
}

export const socialWork = [
  {
    title: 'Editorial Bienetre pone a circular poemario maya-español escrito por niños y niñas',
    description: 'Trece niños y niñas mexicanos de edades entre 8 y 11 años, se conviertieron en autores gracias a A90D Impulsa: una iniciativa promovida por la editorial dominicana Bienetre.',
    url: 'https://elnuevodiario.com.do/editorial-bienetre-pone-a-circular-poemario-maya-espanol-escrito-por-ninos-y-ninas/',
    image: {
      src: '/images/social-work/social-work-00.webp',
      alt: 'Editorial Bienetre pone a circular poemario maya-español escrito por niños y niñas',
      width: 512,
      height: 512
    }
  },
  {
    title: 'Realizarán primera entrega del Premio Manuel Salvador Gautier de Novela 2022',
    description: 'El Ateneo Insular y Bienetre Editorial se complacen en anunciar la primera entrega del Premio Literario Manuel Salvador Gautier de Novela, patrocinado oficialmente por Banreservas.',
    url: 'https://www.diariolibre.com/revista/cultura/2023/01/23/entregaran-premio-manuel-salvador-gautier-de-novela-2022/2204788',
    image: {
      src: '/images/social-work/social-work-01.webp',
      alt: 'Realizarán primera entrega del Premio Manuel Salvador Gautier de Novela 2022',
      width: 512,
      height: 512
    }
  },
  {
    title: 'Fundación dona libros escritos por niños para niños',
    description: 'Niños de entre 6 y 10 años de edad fueron los protagonistas del lanzamiento de la 4ta edición del libro de cuentos escrito por niños para niños, en el Colegio de los periodistas de Santiago.',
    url: 'https://listindiario.com/ventana/20230621/fundacion-dona-libros-escritos-ninos-ninos_759826.html',
    image: {
      src: '/images/social-work/social-work-02.webp',
      alt: 'Fundación dona libros escritos por niños para niños',
      width: 512,
      height: 512
    }
  },
  {
    title: 'Víctor Xavier Ureña gana el Premio Manuel Salvador Gautier de Novela 2023 con Un futuro prometedor',
    description: 'La Editorial Bienetre y el Ateneo Insular, liderados por Keila González Báez y el Dr. Bruno Rosario Candelier respectivamente, se enorgullecen de anunciar a Víctor Xavier Ureña como el laureado de la segunda edición del Premio Manuel Salvador Gautier de Novela 2023 por su obra «Un Futuro Prometedor».',
    url: 'https://diariosocialrd.com/victor-xavier-urena-gana-el-premio-manuel-salvador-gautier-de-novela-2023-con-un-futuro-prometedor/',
    image: {
      src: '/images/social-work/social-work-03.webp',
      alt: 'Víctor Xavier Ureña gana el Premio Manuel Salvador Gautier de Novela 2023 con Un futuro prometedor',
      width: 512,
      height: 512
    }
  }
]
