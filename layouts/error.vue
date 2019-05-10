<template>
  <div class="nuxt-error">
    <component
      :is="errorPage"
      :error="error"
    />
    <h1>Prueba de layout</h1>
  </div>
</template>

<script>
  import error404 from '~/components/error/404.vue';
  import error500 from '~/components/error/500.vue';

  export default {
    name: 'nuxt-error',
    layout: 'singleNav',
    props: {
      error: {
        type: Object,
        default: () => { },
      },
    },
    computed: {
      errorPage () {
        if (this.error.statusCode === 404) {
          return error404;
        }

        return error500;
      },
    }
  }
</script>

<style lang="scss" scoped>
.nuxt-error {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: teal;
}
</style>
