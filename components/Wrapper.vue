<template>
  <section :class="type">
    <slot />
  </section>
</template>

<script>
  export default {
    name: 'Wrapper',
    props: {
      simple: {
        type: Boolean,
        default: false,
        required: false
      }
    },
    computed: {
      type () {
        if (this.simple == true) {
          return 'wrapper--simple'
        } else {
          return 'wrapper--padded'
        }
      }
    }
  }
</script>


<style lang="scss" scoped>
%wrapper {
  width: 100%;
}

.wrapper--simple {
  @extend %wrapper;
  padding: 0;
}

.wrapper--padded {
  @extend %wrapper;
  padding: 150px var(--global_padding);
}
</style>
