export const state = () => ({
  welcome: {
    title: '¡Bienvenido!',
    content: `
    <p>En Weenjoy nos preocupamos por el bienestar y la economía de las personas en diferentes ámbitos, tales como la educación, salud, empleo, inclusión y el desarrollo integral de las comunidades y las personas que las conforman.</p>
    <p>El altruismo y la generosidad nos impulsa a hacer algo por nuestro entorno y nuestros semejantes es la mejor manera de agradecer el privilegio de tener cubiertas nuestras necesidades básicas.</p>
    <p>El altruismo y la generosidad pueden hacer que logremos un cambio social si realizamos las prácticas adecuadas en cada una de nuestras causas.</p>
    <p>Es por ello que creemos que entre más personas se involucren en los proyectos, más ideas, más acciones y más resultados asertivos se pueden lograr para beneficiar a la comunidad.</p>
    <p>Actualmente, son tres programas los que se llevan a cabo dentro de la fundación: Premios Causas, Aún Creo y Viajeros de Luz.</p>`
  },

  video: 'https://player.vimeo.com/video/267414782',

  about: [
    {
      title: 'Misión',
      content: `<p>Llevar los recursos y elementos necesarios a las personas y motivarlas para que puedan impulsar su talento y oportunidades, y de éste forma logremos una mejora en la sociedad en cada comunidad a la que lleguemos.</p>`
    },
    {
      title: 'Vision',
      content: `<p>Nuestro ideal va más allá del reconocimiento por nuestra labor. El reconocimiento más importante es el que las comunidades logren una estabilidad económica, educativa, social y justa que les genere las oportunidades que merecen. Queremos contagiar a las personas con buenas intenciones y acciones para lograr el inicio del cambio.</p>`
    }
  ],

  programs: {
    title: 'Nuestros programas',
    list: [
      {
        title: 'WE-U',
        img: require('~/assets/img/programs/we_u.png'),
        lazy: require('~/assets/img/programs/we_u--low.png'),
        alt: 'WE-U'
      },
      {
        title: 'PREMIOS CAUSAS',
        img: require('~/assets/img/programs/premios_causas.png'),
        lazy: require('~/assets/img/programs/premios_causas--low.png'),
        alt: 'PREMIOS CAUSAS'
      },
      {
        title: 'AÚN CREO',
        img: require('~/assets/img/programs/aun_creo.png'),
        lazy: require('~/assets/img/programs/aun_creo--low.png'),
        alt: 'AÚN CREO'
      },
      {
        title: 'VIAJEROS DE LUZ',
        img: require('~/assets/img/programs/viajeros_de_luz.png'),
        lazy: require('~/assets/img/programs/viajeros_de_luz--low.png'),
        alt: 'VIAJEROS DE LUZ'
      }
    ]
  },

  phrase: 'No hay que esperar sentados a que los demás cambien al mundo, hay que empezar con el ejemplo.'
})
