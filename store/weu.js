export const state = () => ({
  description: `<p>We u es el primer programa de la Fundación Weenjoy. A través de la integración de comunidades de usuarios que se desprenderán de los alumnos de las principales universidades en México, la Fundación Weenjoy captará una gran cantidad de pinjoys, que se traducirán de manera directa a programas internos para cada universidad.</p>`,

  categories: {
    title: 'Categorias participantes',
    img: require('~/assets/img/categories.png'),
    alt: 'Categorias',
    texture: require('~/assets/img/textures/blue.png'),
    texture_alt: 'fondo'
  },

  how: {
    content: `
      <p>Los alumnos que se desplegan de la red del Usuario Institucional (Universidad), generan bonificaciones en forma de Pinjoys al consumir en los establecimientos de nuestros Partners.</p>
      <p>Una parte de estas bonificaciones caen en la cuenta del Usuario Institucional (Universidad); gestando un cúmulo de Pinjoys, que solo podrán ser aprovechados através de la Fundación Weenjoy para el beneficio de la Comunidad Universitaria.</p>
      <p>La Fundación Weenjoy establece la conexión entre la Institución Universitaria y los diferentes Weenjoy Partners, para realizar el cambio del acumulado de Pinjoys por el producto y/o especie que la universidad solicite para el beneficio de su comunidad.</p>
      <p>La Comunidad Universitaria disfrutará de grandes beneficios gracias a las bonificaciones que cada alumno le genera al Usuario Institucional.</p>`
  },

  cover: {
    src: require('~/assets/img/we_u_cover.jpg'),
    lazy: require('~/assets/img/we_u_cover--low.jpg'),
    alt: 'placeholder img'
  },

  guidelines: {
    title: 'Lineamientos',
    list: [
      'Todos los pinjoys que se generen mensualmente y de manera permanente dentro de la comunidad del programa We-U / Universidad se aplicarán a los programas que la Universidad establezca.',
      'El programa We-U de la Fundación Weenjoy en conjunto con la Universidad anunciarán los programas que la universidad determine cada vez que se vayan a implemnetar.',
      'La Fundación Weenjoy establecerá la conexión entre los diferentes Weenjoy Partners y la Universidad, para quee ésta última establezca con que Weenjoy Partner se trabajará',
      'En casos de aplicar los recursos a viajes de intercambio, de prácticas o cualquier tipo de viaje, éste se llevará a cabo de Weenjoy travel.'
    ]
  }

})
