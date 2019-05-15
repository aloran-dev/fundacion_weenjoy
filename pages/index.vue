<template>
  <section class="home">
    <Wrapper
      class="welcome"
      data-aos="fade-down"
    >
      <h2> {{ home.welcome.title }} </h2>
      <article
        class="welcome__article"
        v-html="home.welcome.content"
      ></article>
    </Wrapper>

    <Video :src="home.video" />

    <Wrapper
      class="about"
      data-aos="fade-down"
    >
      <div
        v-for="(item, index) in home.about"
        :key="`about-${index}`"
      >
        <h3> {{ item.title }} </h3>
        <article v-html="item.content"></article>
      </div>
    </Wrapper>

    <Wrapper class="programs">
      <h3
        class="programs__title"
        data-aos="fade-down"
      > {{ home.programs.title }} </h3>
      <div class="programs__list">
        <div
          data-aos="fade-down"
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

    <Wrapper
      class="phrase"
      data-aos="fade-down"
    >
      <blockquote> {{ home.phrase }} </blockquote>
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
  grid-gap: 50px;
}

.programs {
  background: #eee;

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 25px;

    &__program {
      position: relative;
      width: calc(50% - 50px);
      margin: 25px;

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
        height: 250px;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
      }
    }
  }
}

.phrase {
  text-align: center;
}

@media screen and (max-width: 750px) {
  .home {
    .welcome {
      &__article {
        column-count: 1;
      }
    }
    .programs {
      &__list {
        &__program {
          width: 100%;
        }
      }
    }
  }
}
</style>
