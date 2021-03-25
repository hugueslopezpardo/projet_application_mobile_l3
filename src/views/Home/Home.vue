<template>

    <div class="container-fluid">
        <div class="row">
            <div class="col-3 mt-5">
                <SideBar :todos_lists="GET_TODOS_LISTS"/>
            </div>
            <div class="col mt-5">
                <TodosLists :current_list="GET_CURRENT_LIST"/>
            </div>

        </div>


    </div>

</template>

<script>

import SideBar from '@/components/Home/SideBar/SideBar.vue'
import TodosLists from '@/components/Home/TodoLists/TodosLists.vue'
import {mapActions, mapGetters} from "vuex";

export default {
    name: "Home",
    components : {
        SideBar,
        TodosLists
    },
    methods : {

        ...mapActions('todos',['API_REQUEST_GET_TODO_LISTS'])

    },
    computed : {

        ...mapGetters('accounts',['GET_AUTHENTIFICATION_TOKEN']),
        ...mapGetters('todos',['GET_TODOS_LISTS']),
        ...mapGetters('todos',['GET_CURRENT_LIST'])

    },
    mounted() {

        if(localStorage.authentification_token){
            this.API_REQUEST_GET_TODO_LISTS(localStorage.authentification_token)
        }else{
            this.API_REQUEST_GET_TODO_LISTS(this.GET_AUTHENTIFICATION_TOKEN)

        }
    }
}
</script>

<style scoped>

</style>