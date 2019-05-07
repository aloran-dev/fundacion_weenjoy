<template>
  <section class="home">
    <Wrapper class="welcome">
      <h2> {{ home.welcome.title }} </h2>
      <article
        class="welcome__article"
        v-html="home.welcome.content"
      ></article>
    </Wrapper>

    <Video :src="home.video" />

    <Wrapper class="about">
      <div
        v-for="(item, index) in home.about"
        :key="`about-${index}`"
      >
        <h3> {{ item.title }} </h3>
        <article v-html="item.content"></article>
      </div>
    </Wrapper>

    <Wrapper
      class="programs"
      simple
    >
      <h3 class="programs__title"> {{ home.programs.title }} </h3>
      <div class="programs__list">
        <div
          class="programs__list__program"
          v-lazy-container="{ selector: 'img' }"
          v-for="(program, index) in home.programs.list"
          :key="`program-${index}`"
        >
          <h4 class="programs__list__program__title"> {{ program.title }} </h4>
          <img
            :data-src="program.img"
            :data-loading="program.lazy"
            :alt="program.alt"
          >
        </div>
      </div>
    </Wrapper>

    <Wrapper class="stats">
      <h4> {{ home.stats.title }} </h4>
      <h1 class="stats__quantity"> {{ home.stats.quantity }} </h1>
      <p> {{ home.stats.subtitle }} </p>
    </Wrapper>
  </section>
</template>

<script>
  import Wrapper from '~/components/Wrapper'
  import Video from '~/components/Video'

  export default {
    name: 'Home',
    components: {
      Wrapper,
      Video
    },
    data () {
      return {
        home: this.$store.state.home
      }
    }
  }
</script>


<style lang="scss" scoped>
.home {
  .welcome {
    &__article {
      margin-top: 2rem;
      column-count: 2;
      column-gap: 50px;
      text-align: justify;
    }
  }
}

.about {
  text-align: justify;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 100px;
}

.programs {
  background: #eee;
  padding: 50px 2%;

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 30px;
    margin-top: 50px;

    &__program {
      position: relative;

      &__title {
        position: absolute;
        top: 0;
        left: 0;
        color: rgba(255, 255, 255, 0.8);
        padding: 15px 20px;
        background: rgb(7, 33, 48);
        background: linear-gradient(
          90deg,
          rgba(7, 33, 48, 0.8) 0%,
          rgba(255, 255, 255, 0) 100%
        );
        border-radius: 10px 0 0 0;
      }

      & > img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
      }
    }
  }
}

.stats {
  text-align: center;

  &__quantity {
    color: var(--p_color);
  }

  & > *:last-child {
    margin-bottom: 0;
  }
}

@media screen and (max-width: 750px) {
  .home {
    .welcome {
      &__article {
        column-count: 1;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .home {
    .programs {
      &__list {
        grid-template-columns: 100%;
      }
    }
  }
}
</style>
