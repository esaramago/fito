<template>
  <div class="card">
    <div class="card__img">
      <img :src="imageUrl" :alt="title" loading="lazy">
    </div>
    <div class="card__titles">
      <h2>{{title}}</h2>
      <h3>{{subTitle}}</h3>
    </div>
    <div class="card__table">
      <slot></slot>
    </div>
  </div>
</template>
<style src="./Card.css" scoped></style>
<script src="./Card.js"></script>