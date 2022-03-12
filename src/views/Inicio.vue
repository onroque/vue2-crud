<template>
    <div><h1>Inicio</h1></div>
</template>

<script>

import {mapActions} from 'vuex';

export default {
    name: "Inicio",

    created() {
        this.getTareas();
    },
    methods: {
        ...mapActions(['getTareas'])
    }
};
</script>

<style scoped>

</style>