<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <div class="columns">
        <div class="column">
          <span class="icon-text">
            <span class="icon has-text-imper">
              <i class="fa-solid fa-phone" />
            </span>
            <span>
              <a class="has-text-white" href="tel:+529999201212">
                (999) 920 12 12
              </a>
            </span>
          </span>
        </div>
        <div class="column">
          <p>© Grupo Imper</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterImper'
}
</script>

<style>
.footer {
  background-color: #004eab !important;
  color: rgb(255, 255, 255);
  padding-top: 0.6rem;
  padding-bottom: 0.8rem;
}
</style>
