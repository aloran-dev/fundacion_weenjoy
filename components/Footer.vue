<template>
  <footer class="footer">
    <div class="footer__legal">
      <p> {{ footer.legal }} </p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    data () {
      return {
        footer: this.$store.state.footer
      }
    }
  }
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  padding: 40px var(--global_padding);
  background: var(--bg_color);
  color: #fff;

  &__legal {
    text-align: center;

    & > *:last-child {
      margin-bottom: 0;
    }
  }
}
</style>

