export const state = () => ({
  logo: {
    img: require("~/assets/img/logo.svg"),
    alt: 'Fundación Weenjoy',
    to: '/'
  },

  links: [
    {
      name: 'INICIO',
      to: '/'
    },
    {
      name: 'WE-U',
      to: '/we-u/'
    }
  ]
})
