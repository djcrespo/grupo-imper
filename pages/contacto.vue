<template>
  <div class="contact">
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
          <br />
          <section>
            <h3 class="subtitle has-text-white">Siguenos en</h3>
            <div class="columns">
              <div class="column">
                <a href="https://www.facebook.com/somosgrupoimper">
                  <b-icon
                    icon="facebook"
                    size="is-large"
                    class="has-text-white"
                  ></b-icon>
                </a>
                <a href="https://instagram.com">
                  <b-icon
                    icon="instagram"
                    size="is-large"
                    class="has-text-white"
                  ></b-icon>
                </a>
                <a href="https://twitter.com">
                  <b-icon
                    icon="twitter"
                    size="is-large"
                    class="has-text-white"
                  ></b-icon>
                </a>
              </div>
            </div>
          </section>
        </div>
        <div class="column is-5">
          <form>
            <b-field custom-class="has-text-white" label="Nombre">
              <b-input v-model="form.name"></b-input>
            </b-field>
            <b-field custom-class="has-text-white" label="Correo electrónico">
              <b-input v-model="form.mail"></b-input>
            </b-field>
            <b-field custom-class="has-text-white" label="Teléfono">
              <b-input v-model="form.phone"></b-input>
            </b-field>
            <b-field custom-class="has-text-white" label="Empresa">
              <b-input v-model="form.company"></b-input>
            </b-field>
            <b-switch v-model="isSwitched" type="is-light">
              <p class="text">{{ isSwitched ? 'Fuera de yucatán' : 'En Yucatán' }}</p>
            </b-switch>
            <b-field custom-class="has-text-white" label="Dirigido a">
              <b-select v-model="form.email" placeholder="Selecciona una sucursal">
                <option
                  v-for="option in (isSwitched ? pointsExterns : points)"
                  :value="option.email"
                  :key="option.name"
                >
                  {{ option.name }}
                </option>
              </b-select>
            </b-field>
            <b-field custom-class="has-text-white" label="Mensaje">
              <b-input
                v-model="form.message"
                maxlength="200"
                type="textarea"
              ></b-input>
            </b-field>
            <b-button @click="sendEmail">Enviar</b-button>
          </form>
        </div>
      </div>
    </section>
    <section class="section">
      <h1 class="title has-text-white has-text-centered">
        Nuestras surcursales
      </h1>
      <br />
      <div class="columns">
        <div class="column is-6">
          <h1 class="title has-text-white has-text-centered">
            En Yucatán
          </h1>
          <b-carousel :repeat="true" :indicator="false">
            <b-carousel-item v-for="(point, i) in points" :key="i">
              <div class="container m-4">
                <div class="card">
                  <div class="card-content has-text-centered">
                    <p class="title is-size-4">{{ point.name }}</p>
                    <p class="subtitle is-size-6">{{ point.address }}</p>
                  </div>
                  <div class="card-footer">
                      <div class="container">
                        <div class="columns has-text-centered">
                        <div class="column is-6">
                        <a :href="'tel:+52' + point.phone">{{point.phone}}</a>
                        </div>
                        <div class="column is-6">
                          <a :href="'mailito:' + point.email">{{point.email}}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-carousel-item>
          </b-carousel>
        </div>
        <div class="column is-6">
          <h1 class="title has-text-white has-text-centered">
            En el resto del país
          </h1>
          <b-carousel :repeat="true" :indicator="false">
            <b-carousel-item v-for="(point, i) in pointsExterns" :key="i">
              <div class="container m-4">
                <div class="card">
                  <div class="card-content has-text-centered">
                    <p class="title is-size-4">{{ point.name }}</p>
                    <p class="subtitle is-size-6">{{ point.address }}</p>
                  </div>
                  <div class="card-footer">
                    <div class="container">
                      <div class="columns has-text-centered">
                      <div class="column is-6">
                      <a :href="'tel:+52' + point.phone">{{point.phone}}</a>
                      </div>
                      <div class="column is-6">
                        <a :href="'mailito:' + point.email">{{point.email}}</a>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </b-carousel-item>
          </b-carousel>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
  name: 'contactoPage',
  data () {
    return {
      form: {},
      isSwitched: false,
      type: [
        {
          id: 1,
          name: 'Yucatán'
        },
        {
          id: 2,
          name: 'Fuera de Yucatán'
        }
      ],
      points: [
        {
          name: 'Matriz',
          address: 'Calle 21 No. 310-B x 50 y 52 No. 310-B Col. Roma, C.P. 97218 Mérida, Yucatán, México',
          phone: '(999) 920 12 12',
          email: 'ventasmatriz@grupoimper.com.mx'
        },
        {
          name: 'Buenavista',
          address: 'Calle 31 No. 148 x 40 Y 60 Depto. 3 Col. Buenavista, C.P. 97127 Mérida, Yucatán, México',
          phone: '(999) 925 96 78',
          email: 'buenavista@grupoimper.com.mx'
        },
        {
          name: 'Alemán',
          address:
            'Calle 29-A No. 168 x 20 Deptos. 5 Y 6 Col. Miguel Alemán, C.P. 97148 Mérida, Yucatán, México',
          phone: '(999) 926 20 40',
          email: 'aleman@grupoimper.com.mx'
        },
        {
          name: 'Sur',
          address:
            'Calle 96 No. 802 Local 4 x 81-C y 81-D Col. Obrera, C.P. 97260 Mérida, Yucatán, México',
          phone: '(999) 984 28 88',
          email: 'sur96@grupoimper.com.mx'
        }
      ],
      pointsExterns: [
        {
          name: 'Suc. Cancún',
          address:
            'Av. Uxmal No. 248 por Av. Margaritas y Yaxchilán Mza 24 Smz 22 Col. Centro, C.P. 77500 Benito Juárez, Quintana Roo, México',
          phone: '(998) 884 12 20',
          email: 'cancun@grupoimper.com.mx'
        },
        {
          name: 'Playa del Carmen',
          address:
            'Av. Constituyentes Lote 2 x 95 y 100 Av. Norte Col. Ejido, C.P. 77710 Solidaridad, Quintana Roo, México',
          phone: '(984) 873 11 71',
          email: 'playa@grupoimper.com.mx'
        },
        {
          name: 'Chetumal',
          address:
            'Av. Francisco I. Madero por Efraín Aguilar y Mahatma Gandhi No. 179-A Col. Centro, C.P. 77000 Othón P. Blanco, Quintana Roo, México',
          phone: '(999) 832 26 19',
          email: 'chetumal@grupoimper.com.mx'
        },
        {
          name: 'Campeche',
          address:
            'Av. Gobernadores Local C entre Perú y Ecuador No. 387 Col. Santa Ana, C.P. 24050 Campeche, Campeche, México',
          phone: '(981) 811 04 93',
          email: 'campeche@grupoimper.com.mx'
        }
      ],
      pointsNames: [
        {
          name: 'Matriz',
          id: 1
        },
        {
          name: 'Buenavista',
          id: 2
        },
        {
          name: 'Alemán',
          id: 3
        },
        {
          name: 'Sur',
          id: 4
        },
        {
          name: 'Suc. Cancún',
          id: 5
        },
        {
          name: 'Playa del Carmen',
          id: 6
        },
        {
          name: 'Chetumal',
          id: 7
        },
        {
          name: 'Campeche',
          id: 8
        }
      ]
    }
  },
  methods: {
    sendEmail () {
      emailjs.sendForm('service_tiva1bq', 'template_3ah8b4q', this.form, '-tjZ1uNg3DaanP_pt')
        .then((result) => {
          console.log('SUCCESS!', result.text)
        }, (error) => {
          console.log('FAILED...', error.text)
        })
    }
  }
}
</script>

<style>
.text {
  color: aliceblue;
}

.contact {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),
    url('../assets/img/background-contact.png') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
