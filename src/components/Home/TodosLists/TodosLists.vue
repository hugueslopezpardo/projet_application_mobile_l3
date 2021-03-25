<template>

    <div class="container-fluid" v-if="current_list != null">

        <h1>
            {{current_list.name}}
        </h1>

        <div class="mt-4 mb-4">
            <button v-on:click="API_REQUEST_DELETE_TODO_LIST(current_list.id)" type="submit" class="btn btn-outline-danger">Supprimer la liste</button>
        </div>

        <div class="progress mt-4">
          <div v-if="GET_POURCENTAGE_FINISH_BAR <= 25" class="progress-bar progress-bar-striped bg-danger" role="progressbar" v-bind:style="{width: GET_POURCENTAGE_FINISH_BAR + '%'}" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
          <div v-else-if="GET_POURCENTAGE_FINISH_BAR > 25 && GET_POURCENTAGE_FINISH_BAR <= 60" class="progress-bar progress-bar-striped bg-warning" role="progressbar" v-bind:style="{width: GET_POURCENTAGE_FINISH_BAR + '%'}" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
          <div v-else class="progress-bar progress-bar-striped bg-success" role="progressbar" v-bind:style="{width: GET_POURCENTAGE_FINISH_BAR + '%'}" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>

        </div>

      <div class="row mt-3">

        <h3>{{GET_NB_TODOS_FINISH}} / {{GET_NB_TODOS}}</h3>

      </div>

        <div class="mb-3 mt-3">
            <label for="create-new-list-input" class="form-label">Créer une TODO</label>
            <input v-model="todo_name" type="text" class="form-control" id="create-new-list-input" placeholder="Nom de votre tâche ...">
            <div id="emailHelp" class="form-text">3 caractère minimum / 20 caractère maximum</div>
        </div>

        <div class="mt-2 mb-4">
            <button v-on:click="CREATE_TODO()" type="submit" class="btn btn-outline-primary">Créer</button>
        </div>


        <!-------------------------------------------------------------------------------------------------------------->
        <div class="btn-group mt-4 mb-4" role="group" aria-label="Basic example">
            <button v-on:click="REQUEST_SET_ALL_TODOS"        type="button" class="btn btn-outline-primary">Toutes</button>
            <button v-on:click="REQUEST_SET_NOT_FINISH_TODOS" type="button" class="btn btn-outline-primary">A faire</button>
            <button v-on:click="REQUEST_SET_FINISH_TODOS"     type="button" class="btn btn-outline-primary">Faites</button>
        </div>
      <!-------------------------------------------------------------------------------------------------------------->

      <ul class="list-group">
            <TodosListsItem v-for="(todo, key) in GET_CURRENT_FILTRED_LIST" v-bind:key="key" :todo="todo" :todo_position_in_list="key"/>
        </ul>
    </div>

</template>



<script>

import TodosListsItem from "@/components/Home/TodosLists/TodosListsItem";
import {mapActions, mapGetters} from "vuex";

export default {
    name: "TodosLists",
    data() {
        return {
            todo_name : null,
            pourcentage : '0'
        }
    },
    components: {
        TodosListsItem
    },
    props : {
        current_list : Object,
    },
    methods : {
        ...mapActions('todos',['API_REQUEST_CREATE_TODO','REQUEST_SET_ALL_TODOS','REQUEST_SET_FINISH_TODOS','REQUEST_SET_NOT_FINISH_TODOS','API_REQUEST_DELETE_TODO_LIST']),


        CREATE_TODO()
        {
            if(this.todo_name) {

                if(this.todo_name.length < 3) {
                    return
                }

                this.API_REQUEST_CREATE_TODO({name : this.todo_name, todolist_id : this.current_list.id})
                this.todo_name = ''

            }
        }
    },
    computed : {
        ...mapGetters('todos',['GET_CURRENT_FILTRED_LIST','GET_DEFAULT_LIST','GET_CURRENT_LIST','GET_NB_TODOS_FINISH','GET_NB_TODOS']),

        GET_POURCENTAGE_FINISH_BAR()
        {

          return ( this.GET_NB_TODOS_FINISH / this.GET_NB_TODOS ) * 100

        }


    }
}
</script>

<style scoped>

</style>