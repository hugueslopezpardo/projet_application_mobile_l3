<template>
    <div class="mb-3">
        <label for="create-new-list-input" class="form-label">Créer une liste</label>
        <input v-model="todo_list_name" type="text" class="form-control" id="create-new-list-input" placeholder="Nom de votre liste ...">
        <div id="emailHelp" class="form-text">20 caractère maximum</div>
    </div>
    <button v-on:click="REQUEST_CREATE_TODO_LIST" type="submit" class="btn btn-outline-primary">Créer</button>

    <div class="list-group mt-3" id="list-tab" role="tablist">
        <SideBarItem  v-for="(todo, key) in todos_lists" v-bind:key="key" :list_name="todo.name" :list_position_id="key"/>
    </div>
</template>

<script>
import SideBarItem from '@/components/Home/SideBar/SideBarItem.vue'
import {mapActions} from "vuex";

export default {
    name: "SideBar",
    data() {
        return {
            todo_list_name : ''
        }
    },
    props : {
        todos_lists : Array
    },
    components : {
        SideBarItem
    },
    methods : {

        /***********************Création d'une TODO LISTS***********************************/

        ...mapActions('todos',['API_REQUEST_CREATE_TODO_LIST']),
        REQUEST_CREATE_TODO_LIST()
        {
            this.API_REQUEST_CREATE_TODO_LIST({
                name : this.todo_list_name,
                authentification_token : localStorage.authentification_token
            })

        }

        /***********************************************************************************/

    }
}
</script>

<style scoped>

</style>