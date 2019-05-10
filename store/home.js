export const state = () => ({
  welcome: {
    title: '¡Bienvenido!',
    content: `
      <p>Weenjoy es una organización que busca como principal objetivo mejorar la vida de las personas.</p>

      <p>La Fundación Weenjoy es una organización benéfica sin fines de lucro que apoya diversas causas con un propósito
        caritativo y de ayuda humanitaria, como la educación, salud, empleo, bienestar, inclusión, el desarrollo integral de las
        personas, así como de las comunidades.</p>

      <p>Hacer algo por nuestro mundo y nuestros semejantes es la mejor manera de agradecer el privilegio de tener cubiertas
        nuestras necesidades básicas. <br>
        El altruismo y la generosidad pueden hacer que logremos un cambio social si realizamos las prácticas adecuadas en cada
        una de nuestras causas. Es por ello que creemos que entre más personas se involucren en los proyectos, más ideas, más acciones y más
        resultados asertivos se pueden lograr para beneficiar a la comunidad.</p>

      <p>Actualmente, son tres programas los que se llevan a cabo dentro de la fundación: Premios Causas, Aún Creo y Viajeros
        de Luz.</p>`
  },

  video: 'https://player.vimeo.com/video/267414782',

  about: [
    {
      title: 'Misión',
      content: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, corrupti ex odit ut cupiditate magni asperiores quisquam corporis alias distinctio voluptates. Quos consectetur voluptates et, nam similique provident impedit minus.</p>`
    },
    {
      title: 'Vision',
      content: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, corrupti ex odit ut cupiditate magni asperiores quisquam corporis alias distinctio voluptates. Quos consectetur voluptates et, nam similique provident impedit minus.</p>`
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

  stats: {
    title: 'Al día de hoy hemos apoyado a',
    quantity: '28,998',
    subtitle: 'niños, jovenes y adultos en nuestro estado'
  }
})
