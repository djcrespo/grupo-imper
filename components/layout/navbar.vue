<template>
  <b-navbar spaced type="is-imper">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="../../assets/img/logo-white.png" alt="Grupo Imper" />
      </b-navbar-item>
    </template>

    <template #end>
      <div class="buttons mx-4">
        <b-button
            type="is-nav"
            label="Inicio"
            tag="router-link"
            to="/"
            icon-pack="fas"
            icon-left="home"
        />
        <b-button
            type="is-nav"
            label="Nosotros"
            tag="router-link"
            to="/nosotros"
            icon-pack="fas"
            icon-left="user-friends"
        />
        <b-button
            type="is-nav"
            label="Productos"
            tag="router-link"
            to="/productos"
            icon-pack="fas"
            icon-left="paint-roller"
        />
        <b-button
            type="is-nav"
            label="Portafolio"
            tag="router-link"
            to="/portafolio"
            icon-pack="fas"
            icon-left="folder-open"
        />
        <b-button
            type="is-nav"
            label="Contacto"
            tag="router-link"
            to="/contacto"
            icon-pack="fas"
            icon-left="address-card"
        />
      </div>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavBarImper'
}
</script>

<style>
.is-imper {
  background-color: #004eab !important;
  color: rgb(255, 255, 255);
}

.navbar-burger {
  color: rgb(255, 255, 255);
}

.navbar-menu.is-active {
  background-color: #004eab !important;
  color: rgb(255, 255, 255);
}
</style>
