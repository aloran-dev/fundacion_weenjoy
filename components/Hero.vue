<template>
  <header class="header">
    <transition
      name="fade"
      v-for="(item, index) in hero"
      :key="`hero-${index}`"
    >
      <div
        class="hero"
        v-lazy-container="{ selector: 'img' }"
        :id="item.id"
        v-if="item.id == route"
      >
        <img
          class="hero__bg"
          :data-src="item.img"
          :data-loading="item.lazy"
          :alt="item.alt"
          v-rellax="{ speed: -2 }"
        >

        <div class="hero__content">
          <template v-if="item.content.img">
            <img
              :data-src="item.content.img"
              :data-loading="item.content.img"
              :alt="item.content.alt"
            >
          </template>
          <h1> {{ item.content.title }} </h1>
          <p> {{ item.content.subtitle }} </p>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
  export default {
    name: 'Hero',
    data () {
      return {
        hero: this.$store.state.hero
      }
    },
    computed: {
      route () {
        return this.$route.path
      }
    },
  }
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: calc(100vh - var(--nav_height));
  position: relative;
  overflow: hidden;

  .hero {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

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
      background: rgba(var(--p_color--rgb), 0.7);
      position: absolute;
      z-index: 2;
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
        color: inherit;
      }

      & > img {
        width: 90%;
        max-width: 350px;
        object-fit: contain;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

