<template>
  <div class="container has-text-centered">
    <nav class="tabs is-centered is-medium">
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
    <nav class="breadcrumb is-right" aria-label="breadcrumbs">
      <ul>
        <router-link
          v-for="route in $router.options.routes"
          :to="route"
          :key="route.path"
          tag="a"
        >
          <span class="icon is-small">
            <i :class="route.meta.icon"></i>
          </span>
          {{route.name}}
        </router-link>
      </ul>
    </nav>
  </div>
</template>
