export const state = () => ([
  {
    id: '/',
    img: require('~/assets/img/hero/home.png'),
    lazy: require('~/assets/img/hero/home--low.png'),
    alt: 'Fundación Weenjoy',
    content: {
      title: 'FUNDACIÓN WEENJOY',
      subtitle: 'La obra humana más bella, es la de ser útil al prójimo'
    }
  },
  {
    id: '/we-u',
    img: require('~/assets/img/hero/we_u.png'),
    lazy: require('~/assets/img/hero/we_u--low.png'),
    alt: 'WE-U',
    content: {
      img: require('~/assets/img/we_u_logo.png'),
      lazy: require('~/assets/img/we_u_logo--low.png'),
      alt: 'WE-U',
    }
  }
])
