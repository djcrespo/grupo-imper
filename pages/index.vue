<template>
  <div class="container">
    <br>
    <section>
      <div class="video-container">
        <video playsinline autoplay muted loop>
          <source src="@/assets/video/video-promo.mp4" type="video/mp4">
        </video>
      </div>
    </section>

    <section>
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-8 is-offset-2">
            <h2 class="title">
              Distribuimos materiales para la construcción en el sureste de
              México.
            </h2>
            <h3 class="subtitle">
              Por más de 50 años hemos aplicado y distribuido la marca Fester,
              líder en México en la venta de impermabilizantes, aditivos,
              adhesivos y selladores para mortero y concreto.
            </h3>
            <h3 class="subtitle">
              ¡Estamos listos para ayudarte!
            </h3>
            <div class="column">
              <nuxt-link to="/contacto" class="button is-imper">
                Contacto
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  components: {}
}
</script>

<style>
.video-container {
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
}

video {
  /*
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  filter:opacity(40%);*/
  filter: brightness(90%);
}
</style>
