<template>
  <nav class="nav">
    <nuxt-link :to="logo.to">
      <img
        class="nav__logo"
        :src="logo.img"
        :alt="logo.alt"
      >
    </nuxt-link>

    <div class="nav__links">
      <nuxt-link
        v-for="(link, index) in links"
        :key="index"
        :to="link.to"
      > {{ link.name }} </nuxt-link>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Nav',
    data () {
      return {
        logo: this.$store.state.nav.logo,
        links: this.$store.state.nav.links
      }
    }
  }
</script>


<style lang="scss" scoped>
.nav {
  width: 100%;
  height: var(--nav_height);
  background: var(--bg_color);
  padding: 0 var(--global_padding);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: var(--index_nav);

  &__logo {
    height: calc(var(--nav_height) - 30px);
    object-fit: contain;
  }

  &__links {
    & > a {
      color: #fff;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.95rem;
      margin: 0.2rem;
      padding: 0.5rem 0.7rem;
      opacity: 0.9;
      transition: ease 0.3s;
      border-radius: 30px;

      &:hover {
        background: rgba(#fff, 0.3);
        box-shadow: 0 1px 9px rgba(#000, 0.3);
        opacity: 1;
        color: var(--p_color);
      }
    }
  }
}
</style>
