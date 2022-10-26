<template>
    <div>
        <label :for="id">{{label}}</label>
        <input
            :id="id"
            type="text"
            @input="onInput"
            :placeholder="placeholder"
        >
    </div>
</template>
<script src="./Input.js"></script>