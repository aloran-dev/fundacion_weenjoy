<template>
  <section class="we-u">
    <Wrapper
      class="description"
      v-html="weu.description"
    />

    <Wrapper class="categories">
      <h4> {{ weu.categories.title }} </h4>
      <div class="categories__img">
        <img
          :src="weu.categories.img"
          :alt="weu.categories.alt"
        >
      </div>
    </Wrapper>

    <Wrapper
      class="how"
      v-html="weu.how.content"
    />

    <Wrapper
      class="cover"
      v-lazy-container="{ selector: 'img' }"
      simple
    >
      <img
        :data-src="weu.cover.src"
        :data-loading="weu.cover.lazy"
        :alt="weu.cover.alt"
      >
    </Wrapper>

    <Wrapper class="guidelines">
      <h4> {{ weu.guidelines.title }} </h4>
      <div class="guidelines__list">
        <ol>
          <li
            v-for="(item, index) in weu.guidelines.list"
            :key="`guideline-${index}`"
          > {{ item }} </li>
        </ol>
      </div>
    </Wrapper>
  </section>
</template>

<script>
  import Wrapper from '~/components/Wrapper'

  export default {
    name: 'WEU',
    components: {
      Wrapper
    },
    data () {
      return {
        weu: this.$store.state.weu
      }
    }
  }
</script>

<style lang="scss" scoped>
.we-u {
  .description {
    column-count: 2;
    column-gap: 50px;
    text-align: justify;
  }

  .categories {
    background: var(--bg_color);
    color: #fff;

    &__img {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      margin-top: 80px;
      margin-bottom: 60px;

      & > img {
        width: 100%;
        max-width: 700px;
        object-fit: contain;
      }
    }
  }

  .how {
    column-count: 2;
    column-gap: 50px;
    text-align: justify;
  }

  .cover {
    width: 100%;
    height: 700px;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .guidelines {
    &__list {
      column-count: 2;
      column-gap: 50px;
      text-align: justify;
    }
  }
}

@media screen and (max-width: 750px) {
  .we-u {
    .description,
    .how,
    .guidelines .guidelines__list {
      column-count: 1;
    }
  }
}
</style>

