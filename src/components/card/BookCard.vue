<template>
  <div class="card card-equal-height is-horizontal">
    <div class="card-image">
      <figure class="image is-square">
        <a :href="link">
          <img :src="image" :alt="title" >
        </a>
      </figure>
    </div>
    <div class="card-content">
      <p class="title is-5 has-text-centered"> {{title}}</p>
          <div class="content">
            {{description}}
          </div>
          <p class="subtitle is-6 has-text-right">- {{author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['title', 'author', 'description', 'image', 'link'],
};
</script>
<style>
.card-equal-height {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 90%;
  margin-top: auto;
}
.card{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 0.5rem;
}
.card img{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
  border-radius: 0.5rem;
  max-width: 96.5%;
  max-height: 96.5%;
  margin: 0 auto;
  margin-top: -2.5%;
}
</style>
