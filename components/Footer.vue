<template>
  <footer class="footer">
    <div class="footer__body">
      <a
        :href="logos.link"
        v-for="(logos, index) in footer.logos"
        :key="index"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          :src="logos.icon"
          :alt="logos.title"
        >
      </a>
    </div>
    <div class="footer__social">
      <a
        :href="social.link"
        v-for="(social, index) in footer.social"
        :key="index"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          :src="social.icon"
          :alt="social.title"
        >
      </a>
    </div>
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
  background: var(--bg_color);
  color: #fff;

  &__body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 30px var(--global_padding) 15px var(--global_padding);

    & > a img {
      margin: 25px;
      height: 50px;
      object-fit: contain;
    }
  }

  &__social {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0 var(--global_padding) 30px var(--global_padding);

    & > a img {
      margin: 10px;
      height: 30px;
      object-fit: contain;
      opacity: 0.8;
      transition: ease 0.3s;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    }
  }

  &__legal {
    text-align: center;
    background: var(--bg_color--dark);
    padding: 15px var(--global_padding);

    & > p {
      font-size: 0.9rem;
    }

    & > *:last-child {
      margin-bottom: 0;
    }
  }
}
</style>

