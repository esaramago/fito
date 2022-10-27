<template>
    <a v-if="href" class="icon icon--clickable" :href="href">
        <slot v-if="isSvg"></slot>
        <span v-else>{{icon}}</span>
    </a>
    <button v-else-if="isButton" class="icon icon--clickable" type="button">
        <slot v-if="isSvg"></slot>
        <span v-else>{{icon}}</span>
    </button>
    <span v-else class="icon">
        <slot v-if="isSvg"></slot>
        <span v-else>{{icon}}</span>
    </span>
</template>
<style src="./Icon.css" scoped></style>
<script src="./Icon.js"></script>