<template>
    <div>
        <h1>Lista de tareas</h1>
        <router-link class="block" to="/agregar">
            <button class="btn btn-success btn-block my-2">Agregar</button>
        </router-link>
        <ul v-if="tareas.length !== 0" class="list-group">
            <li v-for="(tarea, index) in tareas"
                :key="tarea.id"
                class="list-group-item d-flex justify-content-between align-items-center">
                {{ tarea.nombre }} - {{ tarea.id }}
                <div>
                    <router-link
                        :to="{name:'Editar', params:{id: tarea.id}}"
                        class="btn btn-warning btn-sm mx-2">
                        Editar
                    </router-link>
                    <button
                        class="btn btn-danger btn-sm"
                        @click="eliminarTarea(tarea.id)">Eliminar
                    </button>
                </div>
            </li>
        </ul>
        <p v-else>Sin tareas</p>
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
        ...mapActions(['getTareas', 'eliminarTarea'])
    },
    computed: {
        ...mapState(['tareas'])
    }
};
</script>

<style scoped>

</style>