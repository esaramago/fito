<template>
    <div>
        <label :for="id">{{label}}</label>
        <select
            :name="id"
            :id="id"
            @change="onSelect"
        >
            <option value="">Selecione</option>
            <option
                v-for="option in source"
                :value="option.id"
            >{{option.description}}</option>
        </select>
    </div>
</template>
<script src="./Select.js"></script>