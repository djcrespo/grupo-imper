<template>
  <div class="container">
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

      <b-carousel-list v-model="test" :data="items" :items-to-show="4">
        <template #item="list">
          <div class="card">
            <div class="card-image">
              <figure class="image is-1by1">
                <img :src="list.image" alt="">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <p class="title is-6">{{list.text}}</p>
              </div>
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
  name: 'portafolioPage',
  data () {
    return {
      test: 0,
      items: [
        {
          text: 'Yucatán Country Club',
          image: 'https://scontent.fmid1-4.fna.fbcdn.net/v/t31.18172-8/18358792_10155742823845730_7995532379953598131_o.png?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEmrDhTIHnTmEA3xPbIhgGfEsgsesycq38SyCx6zJyrf2LE1K_-f-Jy0_BcMg8HOSd6c1FMQ_HYHAxzTA2MhI5Y&_nc_ohc=lqMEybX2mzwAX_pOlBk&_nc_oc=AQkvxn27jopKv4yPXstAJkqaDnZ3CHg2UpOecphef2dUWzi1KyOnwF5wME2ZK7F3x-I&_nc_ht=scontent.fmid1-4.fna&oh=00_AT9UcjRmcnxGtHxaNZ0A1L-1BEwcOmvYagyDiK48bPcJzw&oe=62E90C4B'
        },
        {
          text: 'Soriana',
          image: 'https://scontent.fmid1-2.fna.fbcdn.net/v/t1.6435-9/88114641_2872286176150221_7339260417715208192_n.png?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF527eicXJVG6q5axQj0LCsXwMA-Atmz6dfAwD4C2bPpxvyxBXLd-SjHss-a_yvsk3mEqhb517DzeuqZI8iOakF&_nc_ohc=q-Gun38l56oAX-REVG_&_nc_ht=scontent.fmid1-2.fna&oh=00_AT90KcCarNiJQvghFRWzqulytVkGAe4o_94NnYdzf8s4Mg&oe=62EA17C9'
        },
        {
          text: 'Holiday Inn',
          image: 'https://scontent.fmid1-4.fna.fbcdn.net/v/t39.30808-6/279490537_4364977416872021_5015835590068876600_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFXb83BJHUfRQJctYw6KQDgF8_3MvWFKoMXz_cy9YUqg4-IIgOtwteK1Y6fdfipgeA6-U1sDWZl7yS12xOwyoeV&_nc_ohc=my1So13ZUPYAX-Y4K6k&_nc_ht=scontent.fmid1-4.fna&oh=00_AT_riGjttyqXdn4RZD2han5JKVYbwkNujS2VexGXr8tGFA&oe=62C8B005'
        },
        {
          text: 'Holiday Inn Express',
          image: 'https://scontent.fmid1-2.fna.fbcdn.net/v/t39.30808-6/208084657_6342023969144932_1470822320613249419_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFJPuuZR2FRFniuLkoDtyOa6Xe6F_T5kefpd7oX9PmR5yClL36xcK_cZ63WRFwRd2-cvCYzDqIuGADowjtZIz62&_nc_ohc=w7UncQ9e17wAX97DUsO&tn=YTkklZZDErrpHeGi&_nc_ht=scontent.fmid1-2.fna&oh=00_AT95ZK8EEyGqGCzLkm4yzGgprUmYZK8ZPI2TNNlLEQ1mZg&oe=62C8F644'
        },
        {
          text: 'Valentin Imperial Maya',
          image: 'https://scontent.fmid1-3.fna.fbcdn.net/v/t39.30808-6/272970554_10159906120554736_919093344214318775_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEFSPXfDNj2pCUX-Nqf8waQu_RvxTI2U2m79G_FMjZTaUcopqxFP1bkIyrRzLIImSykZYrVlASoSiU7fTn-Y3Yv&_nc_ohc=reiKU7WUJAEAX873Yys&_nc_ht=scontent.fmid1-3.fna&oh=00_AT8hmVBTeJdhka3nUjI6VtBhgPWfNLUXTIa0wJKndwkCkQ&oe=62C84C06'
        },
        {
          text: 'Bacsa',
          image: 'https://scontent.fmid1-4.fna.fbcdn.net/v/t31.18172-8/12764683_1109671349084616_6502697550356567548_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE1iESwMyJTi3W6lCLyYWkA0G4f2-uYsVvQbh_b65ixW9GjnpDcvEOJYTtb_XdP27X1bLA_cgPnRH1JUXa0De9K&_nc_ohc=-uyZardsR5UAX8cEdav&_nc_ht=scontent.fmid1-4.fna&oh=00_AT9I_BCPACw_Ka32TbPq7qZhtRKBIv6yF_gv4P5eFSM_WQ&oe=62EBAFC9'
        }
      ]
    }
  }
}
</script>
