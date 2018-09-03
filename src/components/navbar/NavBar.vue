<template>
<div class="hero-head">
<div class="columns is-centered">
  <div class="column is-centered is-one-half">
    <section class="section">
      <div class="container has-text-centered">
        <nav class="tabs is-centered is-large">
            <ul>
              <strong>
                <router-link
                  :to="{name: 'About'}"
                >
                  pradeep thirunavukkarau
                </router-link>
              </strong>
            </ul>
        </nav>
        <h2 class="subtitle">
          <nav class="breadcrumb is-right " aria-label="breadcrumbs">
            <ul>
            <router-link
              v-for="route in $router.options.routes"
              :to="route"
              :key="route.path"
              tag="li"
            >
              <a>
                <span class="icon is-small">
                  <i :class="route.meta.icon"></i>
                </span>
                {{route.name}}
              </a>
            </router-link>
            </ul>
          </nav>
        </h2>
      </div>
    </section>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .router-link-active a{
    color: black;
  }
</style>

<script>
export default {
  name: 'NavBar',
  data() {
    return { activeItem: 'about' }
  },
};
</script>
