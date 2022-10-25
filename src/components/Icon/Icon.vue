<template>
    <a v-if="href" class="icon icon--clickable" :href="href">
        <span>{{icon}}</span>
    </a>
    <button v-else-if="isButton" class="icon icon--clickable" type="button">
        <span>{{icon}}</span>
    </button>
    <span v-else class="icon">{{icon}}</span>
</template>
<style src="./Icon.css" scoped></style>
<script src="./Icon.js"></script>