<template>
    <a v-if="href" class="icon" :href="href">
        <span>{{icon}}</span>
    </a>
    <span v-else class="icon">{{icon}}</span>
</template>
<style src="./Icon.css" scoped></style>
<script src="./Icon.js"></script>