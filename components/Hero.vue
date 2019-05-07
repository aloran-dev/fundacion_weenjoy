<template>
  <header class="hero">
    <img
      class="hero__bg"
      :src="hero.img"
      :alt="hero.alt"
    >

    <div class="hero__content">
      <template v-if="hero.content.img">
        <img
          :src="hero.content.img"
          :alt="hero.content.alt"
        >
      </template>
      <h1> {{ hero.content.title }} </h1>
      <p> {{ hero.content.subtitle }} </p>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Hero',
    data () {
      return {
        store: this.$store.state.hero
      }
    },
    computed: {
      id () {
        return this.$route.path
      },
      hero () {
        return this.store.find(item => item.id === this.id)
      }
    },
  }
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;
  height: calc(100vh - var(--nav_height));
  position: relative;

  &__bg,
  &__content {
    width: 100%;
    height: 100%;
  }

  &__bg {
    object-fit: cover;
    object-position: top;
  }

  &__content {
    background: rgba(var(--p_color--rgb), 0.5);
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;

    & > h1 {
      margin-bottom: 1rem;
    }

    & > img {
      width: 90%;
      max-width: 350px;
      object-fit: contain;
    }
  }
}
</style>

