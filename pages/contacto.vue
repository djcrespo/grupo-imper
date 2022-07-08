<template>
  <div class="container">
    <section class="section">
      <div class="columns">
        <div class="column">
          <section>
            <h1 class="title has-text-white is-1">
              ¿Quieres pedir una cotización? <br />
              ¡Contactanos!
            </h1>
            <p class="subtitle has-text-white">
              Recuerda que puedes seguirnos en nuestras redes sociales para
              estar atento a todo.
            </p>
          </section>
          <section>
            <h3 class="subtitle has-text-white">Siguenos en</h3>
          </section>
        </div>
        <div class="column is-5">
          <form action="">
            <b-field label="Nombre">
              <b-input v-model="form.name"></b-input>
            </b-field>
            <b-field label="Correo electrónico">
              <b-input v-model="form.mail"></b-input>
            </b-field>
            <b-field label="Teléfono">
              <b-input v-model="form.phone"></b-input>
            </b-field>
            <b-field label="Empresa">
              <b-input v-model="form.company"></b-input>
            </b-field>
            <b-field label="Mensaje">
              <b-input
                v-model="form.message"
                maxlength="200"
                type="textarea"
              ></b-input>
            </b-field>
          </form>
        </div>
      </div>
    </section>
    <section class="section">
      <h1 class="title has-text-centered">Nuestras sucursales en Yucatán</h1>
      <br />
      <b-carousel
        :repeat="true"
        :indicator="false"
      >
        <b-carousel-item v-for="(point, i) in points" :key="i">
          <div class="container m-4">
            <div class="card">
            <div class="card-content has-text-centered">
              <p class="title is-size-4">{{ point.name }}</p>
              <p class="subtitle is-size-6">{{ point.address }}</p>
            </div>
            <div class="card-footer">
              <div class="container has-text-centered">
                <a :href="point.phone">Contacto</a>
              </div>
            </div>
          </div>
          <br>
          </div>
        </b-carousel-item>
      </b-carousel>
    </section>
    <section class="section">
      <h1 class="title has-text-centered">Nuestras sucursales en resto del país</h1>
      <br />
      <b-carousel
        :repeat="true"
        :indicator="false"
      >
        <b-carousel-item v-for="(point, i) in pointsExterns" :key="i">
          <div class="container m-4">
            <div class="card">
            <div class="card-content has-text-centered">
              <p class="title is-size-4">{{ point.name }}</p>
              <p class="subtitle is-size-6">{{ point.address }}</p>
            </div>
            <div class="card-footer">
              <div class="container has-text-centered">
                <a :href="point.phone">Contacto</a>
              </div>
            </div>
          </div>
          <br>
          </div>
        </b-carousel-item>
      </b-carousel>
    </section>
  </div>
</template>

<script>
export default {
  name: 'contactoPage',
  data () {
    return {
      form: {},
      points: [
        {
          name: 'Matriz',
          address: 'C. 21 #310B por 50 y 52 Col. Roma',
          phone: 'tel:+52(999) 920 12 12'
        },
        {
          name: 'Buenavista',
          address: 'C. 31 #148 local 3 por 40 y 60 Col. Buena Vista',
          phone: 'tel:+52(999) 925 96 78'
        },
        {
          name: 'Alemán',
          address:
            'Circuito Colonias #168 por 29A Locales 5 y 6 Col. Miguel Alemán CP. 97148',
          phone: 'tel:+52(999) 926 20 40'
        },
        {
          name: 'Sur',
          address:
            'C. 96 #877A Circuito Colonias por 81D Col. Obrera CP. 97260',
          phone: 'tel:+52(999) 984 28 88'
        }
      ],
      pointsExterns: [
        {
          name: 'Suc. Cancún',
          address: 'Av. Uxmal #248 Sm. 22 Mz 24 Lote 46 por Calle Margaritas y Ave. Yaxchilán',
          phone: 'tel:+52(998) 884 12 20'
        },
        {
          name: 'Playa del Carmen',
          address: 'Av. Constituyentes lote 2 int. 4 por 95 Av. Norte y 100 Av. Norte Co. Elido, CP. 77710',
          phone: 'tel:+52(984) 873 11 71'
        },
        {
          name: 'Chetumal',
          address: 'Av. Fransisco I Madero #167 por Efrain Aguilar y Mahatma Gandhi Col. Centro',
          phone: 'tel:+52(999) 832 26 19'
        },
        {
          name: 'Campeche',
          address: 'Av. Gobernadores #387 Local C, entre ecuador y Perú Col. Santa Ana, CP. 24050',
          phone: 'tel:+52(981) 811 04 93'
        }
      ]
    }
  }
}
</script>

<style>

</style>
