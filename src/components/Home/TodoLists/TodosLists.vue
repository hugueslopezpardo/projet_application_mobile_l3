<template>

    <div class="container-fluid" v-if="current_list != null">

        <h1>
            {{current_list.name}}
        </h1>

        <div class="mt-4 mb-4">
            <button v-on:click="REQUEST_DELETE_TODO" type="submit" class="btn btn-outline-danger">Supprimer la liste</button>
        </div>

        <div class="progress mt-4">
            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
        </div>



        <div class="mb-3 mt-4">
            <label for="create-new-list-input" class="form-label">Créer une TODO</label>
            <input v-model="todo_name" type="text" class="form-control" id="create-new-list-input" placeholder="Nom de votre tâche ...">
            <div id="emailHelp" class="form-text">20 caractère maximum</div>
        </div>

        <div class="mt-2 mb-4">
            <button v-on:click="REQUEST_CREATE_TODO" type="submit" class="btn btn-outline-primary">Créer</button>
        </div>

        <div class="btn-group mt-4 mb-4" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary">Toutes</button>
            <button type="button" class="btn btn-primary">A faire</button>
            <button type="button" class="btn btn-primary">Faites</button>
        </div>

        <ul class="list-group">
            <TodosListsItem v-for="todo in GET_CURRENT_TODOS" v-bind:key="todo" :todo="todo"/>
        </ul>

    </div>
</template>

<script>
import TodosListsItem from '@/components/Home/TodoLists/TodoListsItem.vue'
import {mapActions, mapGetters} from "vuex";

export default {
    name  : "TodosLists",
    data() {
        return {
            todo_name : ''
        }
    },
    props : {
        current_list : Object
    },
    components : {
        TodosListsItem
    },
    methods : {

        /***********************Création de la TODO ****************************************/

        ...mapActions('todos',['API_REQUEST_CREATE_TODO']),
        REQUEST_CREATE_TODO()
        {
            this.API_REQUEST_CREATE_TODO({
                authentification_token : localStorage.authentification_token,
                name                   : this.todo_name,
                completed              : 0,
                todolist_id            : this.current_list.id

            })
        },

        /***********************************************************************************/
        /***********************Supréssion de la TODO LISTS*********************************/

        ...mapActions('todos',['API_REQUEST_DELETE_TODO_LIST']),
        REQUEST_DELETE_TODO()
        {
            this.API_REQUEST_DELETE_TODO_LIST({
                todo_list_id : this.current_list.id,
                authentification_token : localStorage.authentification_token
            })

        }

        /***********************************************************************************/

    },
    computed : {
        ...mapGetters('todos',['GET_CURRENT_TODOS'])
    }
}
</script>

<style scoped>

</style>