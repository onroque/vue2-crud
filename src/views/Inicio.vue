<template>
    <div>
        <h1>Inicio</h1>
        <router-link to="/agregar">
            <button>Agregar</button>
        </router-link>
        <ul>
            <li
                v-for="(tarea, index) in tareas"
                :key="tarea.id">
                {{ tarea.nombre }} - {{ tarea.id }}
                <router-link :to="{name:'Editar', params:{id: tarea.id}}">
                    <button>Editar</button>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

import {mapActions, mapState} from 'vuex';

export default {
    name: "Inicio",

    created() {
        this.getTareas();
    },
    methods: {
        ...mapActions(['getTareas'])
    },
    computed: {
        ...mapState(['tareas'])
    }
};
</script>

<style scoped>

</style>