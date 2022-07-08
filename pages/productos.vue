<template>
  <div class="container">
    <br />
    <section>
      <div class="video-container">
        <video playsinline autoplay muted loop>
          <source src="@/assets/video/video4.mp4" type="video/mp4" />
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
      <b-carousel :repeat="true" :indicator="false">
        <b-carousel-item v-for="(item, i) in items" :key="i">
          <div class="container">
            <div class="card">
              <div class="card-image is-flex is-justify-content-center">
                <img :src="item.image" class="img" alt="">
              </div>
            </div>
          </div>
        </b-carousel-item>
      </b-carousel>
    </section>
    <br />
  </div>
</template>

<script>
export default {
  name: 'productosPage',
  data () {
    return {
      items: [
        {
          image:
            'https://dm.henkel-dam.com/is/image/henkel/mx-fester-fester-key-visual-teaser',
          text: 'Fester'
        },
        {
          image:
            'data:image/png;base64,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',
          text: 'Woodtech'
        },
        {
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV9ON8RXKgYf1FlJpXfrstocawvpJmaoSFYQ&usqp=CAU',
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
