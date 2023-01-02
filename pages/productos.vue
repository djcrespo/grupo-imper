<template>
  <div class="container">
    <br>
    <section>
      <div class="video-container">
        <video playsinline autoplay muted loop>
          <source src="@/assets/video/video4.mp4" type="video/mp4">
        </video>
      </div>
    </section>

    <section>
      <div class="hero-body">
        <div class="container has-text-justified">
          <div class="column is-8 is-offset-2">
            <h2 class="subtitle">
              Ofrecemos productos de alta calidad y con una gran variedad de
              proveedores.
            </h2>
          </div>
        </div>
      </div>
    </section>

    <section>
      <b-carousel-list v-model="test" :data="items" :items-to-show="3" :autoplay="true">
        <template #item="list">
          <div class="card">
            <div class="card-image">
              <img :src="list.image" alt="">
            </div>
          </div>
        </template>
      </b-carousel-list>
    </section>
    <br>
  </div>
</template>

<script>
export default {
  name: 'ProductosPage',
  data () {
    return {
      items: [
        {
          image: require('@/assets/img/productos/fester.jpg'),
          text: 'Fester'
        },
        {
          image: require('@/assets/img/productos/new_wood_tech.jpg'),
          text: 'New Wood Tech'
        },
        {
          image: require('@/assets/img/productos/cemix.jpg'),
          text: 'Cemix'
        }
      ]
    }
  }
}
</script>

<style>
.img {
  margin: 10px;
  width: 35%;
  height: 35%;
}
</style>
