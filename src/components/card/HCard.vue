<template>
  <article class="media">
  <figure class="media-left">
    <p class="image is-128x128">
      <img :src="image">
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <strong>{{title}}</strong>
        <p>{{description}}</p>
        <p class="has-text-left"><small >- {{author}}</small> </p>
    </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'HCard',
  props: ['title', 'author', 'description', 'image', 'link'],
};
</script>
<style>
.card-equal-height {
  display: flex;
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
