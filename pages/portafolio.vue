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
              Entre las obras más destacadas por su importancia, dimensiones y
              grado de dificultad se pueden mencionar: más de 20,000 m2 de
              impermeabilización en los centros comerciales de plaza Dorada y
              Gran Chapur Norte, de la ciudad de Mérida; aplicación de 1,200 m2
              de pisos epóxicos epoxine 1000 mortero en dos plantas
              embotelladoras de Coca-cola; trabajos de aplicación de
              recubrimiento epóxico epoxine 510 terracota en 10 tanques de 300
              m2 cada uno, del megaproyecto porcícola de Yucatán; aplicación de
              8,600 m2 de impermeabilizante prefabricado en las instalaciones de
              las tiendas Soriana de Mérida y Cancún.
            </h2>
            <h2 class="subtitle">
              También se destacan obras de impermeabilización a base de sistemas
              de cristalización en fosa de elevadores y cisternas del hotel
              Fiesta Americana, empresas maquiladoras y embotelladoras;
              impermeabilización con sistema Ferrofest-i a cinco capas para la
              empresa Campi S. A. de C.V. en lagunas de oxidación con más de
              5,500 m2D; impermeabilización para la empresa Télefonos de México,
              S.A de C.V. con más de 6,000 m2 en Cancún, Campeche y Mérida;
              sello de juntas frías en el centro de convenciones de Hotel Moon
              Palace y Hotel Aventura Spa Palace, pertenecientes al Grupo Palace
              Resorts.
            </h2>
            <h2 class="subtitle">
              Llámenos nosotros le visitamos, nuestra garantía es por escrito.
            </h2>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div>
        <h1 class="title is-size-x has-text-centered mt-6 mb-6">
          Hemos trabajado con
        </h1>
      </div>

      <div class="container">
        <b-carousel-list v-model="test" :data="items" :items-to-show="4" :autoplay="true">
          <template #item="list">
            <div class="card">
              <div class="card-image">
                <img :src="list.image" alt="">
              </div>
            </div>
          </template>
        </b-carousel-list>
      </div>
    </section>
    <br>
  </div>
</template>

<script>
export default {
  name: 'PortafolioPage',
  data () {
    return {
      test: 0,
      items: [
        {
          image: require('@/assets/img/portafolio/yucatan_country_club.png')
        },
        {
          image: require('@/assets/img/portafolio/holiday_inn.png')
        },
        {
          image: require('@/assets/img/portafolio/holday_inn_express.jpg')
        },
        {
          image: require('@/assets/img/portafolio/soriana.png')
        },
        {
          image: require('@/assets/img/portafolio/valentin_imperial_maya.jpg')
        },
        {
          image: require('@/assets/img/portafolio/bacsa_3.png')
        }
      ]
    }
  }
}
</script>

<style>
b-carousel {
  height: 100%;
}
</style>
