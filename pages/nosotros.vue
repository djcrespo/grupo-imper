<template>
  <div class="container">
    <section>
      <div class="video-container">
        <video playsinline autoplay muted loop>
          <source src="@/assets/video/video2.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
    <section>
      <div class="hero-body">
        <div class="container has-text-justified">
          <div class="column is-8 is-offset-2">
            <h2 class="subtitle">
              Grupo Imper nace como un negocio familiar hace más de 50 años, con
              el esfuerzo y dedicación del trabajo duro, la empresa empezó a
              crecer.
            </h2>
            <h2 class="subtitle">
              De la mano de Fester, hemos aplicado y distribuido a más de la
              mitad de la península de Yucatán, convirtiéndonos en el
              distribuidor número 1 de la región.
            </h2>
            <h2 class="subtitle">
              Gracias a la confianza de nuestros clientes, logramos tener
              sucursales en Yucatán, Campeche y Quintana Roo.
            </h2>
            <h2 class="subtitle">
              La especialidad de Grupo Imper es proteger su patrimonio con los
              impermeabilizantes Fester. Nuestro servicio de aplicación de
              impermeabilizantes es de primera calidad, por la amplia
              experiencia de nuestros supervisores y aplicadores.
            </h2>
            <div class="column has-text-centered">
              <nuxt-link to="/portafolio" class="button is-imper">
                Nuestro portafolio
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
  name: 'nosotrosPage'
}
</script>
