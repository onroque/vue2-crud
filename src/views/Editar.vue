<template>
    <div>
        {{ tarea.id }} - {{ tarea.nombre }}
        <h1>Editar</h1>
        <form
            class="form-inline"
            @submit.prevent="editarTarea(tarea)">
            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                    <div class="input-group-text">Nombre</div>
                </div>
                <input v-model="tarea.nombre" class="form-control" type="text">
            </div>
            <button type="submit" class="btn btn-primary mb-2">Editar</button>
        </form>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
    name: "Editar",

    data() {
        return {
            id: this.$route.params.id
        };
    },

    created() {
        this.getTarea(this.id);
    },

    methods: {
        ...mapActions(['getTarea', 'editarTarea'])
    },

    computed: {
        ...mapState(['tarea'])
    }
};
</script>

<style scoped>

</style>