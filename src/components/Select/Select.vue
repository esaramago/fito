<template>
    <div>
        <label class="label" :for="id">{{label}}</label>
        <select class="select" :name="id" :id="id">
            <option
                v-for="option in source"
                :value="option.id"
            >{{option.description}}</option>
        </select>
    </div>
</template>
<style src="./Select.css"></style>
<script src="./Select.js"></script>