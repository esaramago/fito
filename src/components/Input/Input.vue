<template>
    <div>
        <label :for="id" class="label">{{label}}</label>
        <input
            class="input"
            :id="id"
            type="text"
            v-model="text"
            @input="onInput"
            :placeholder="placeholder"
        >
    </div>
</template>
<style src="./Input.css" scoped></style>
<script src="./Input.js"></script>