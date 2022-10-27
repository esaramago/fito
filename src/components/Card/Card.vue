<template>
  <div class="card">
    <div class="card__img">
      <img :src="imageUrl" :alt="title" loading="lazy">
      <a class="card__img-credits" href="https://jb.utad.pt/" target="_blank">Jardim Botânico UTAD</a>
    </div>
    <div class="card__titles">
      <h3 class="card__title">{{title}}</h3>
      <h4 class="card__subtitle">{{subTitle}}</h4>
    </div>
    <div class="card__table">
      <slot></slot>
    </div>
  </div>
</template>
<style src="./Card.css" scoped></style>
<script src="./Card.js"></script>