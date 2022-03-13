<template>
    <div>
        <h1>Agregar tarea</h1>
        <form class="form-inline"
            @submit.prevent="agregarTarea(nombre)">
            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                    <div class="input-group-text">Nombre</div>
                </div>
                <input v-model="nombre" class="form-control" type="text">
            </div>
                <button type="submit" class="btn btn-primary mb-2">Agregar</button>
        </form>
    </div>
</template>

<script>

import {mapActions} from "vuex";

export default {
    name: "Agregar",

    data() {
        return {
            nombre: ''
        };
    },

    methods: {
        ...mapActions(['agregarTarea'])
    }
};
</script>

<style scoped>

</style>