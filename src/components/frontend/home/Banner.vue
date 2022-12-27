<template>
 <section class="home3 banner">
  <div class="container">
  <div class="banner-slider">
  <carousel :items-to-show="1">
    <slide v-for="slide in 4" :key="slide">
        <img src="frontend/assets/images//home3/banner/slide1.png" alt="Banner Image"/>
        <img src="frontend/assets/images//home3/banner/slide2.png" alt="Banner Image"/>
    </slide>
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
  </div>
  </div>
  </section>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
}
</script>
