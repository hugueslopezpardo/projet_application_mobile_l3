<template>

    <div class="container-fluid mt-3">

        <div class="row">
          <TopRow :user_data="GET_USER_DATA"/>
        </div>

        <InfoMessage    v-if="GET_INFO_MESSAGE    != ''"  :message="GET_INFO_MESSAGE" />
        <SuccessMessage v-if="GET_SUCCESS_MESSAGE != '' " :message="GET_SUCCESS_MESSAGE" />
        <ErrorMessage   v-if="GET_ERROR_MESSAGE   != '' " :message="GET_ERROR_MESSAGE" />

        <div class="row">
            <div class="col-3 mt-5">
                <SideBar :default_list="GET_DEFAULT_LIST"/>
            </div>
            <div id="todos-lists" class="col mt-5">
                <TodosLists v-if="GET_CURRENT_LIST != null" :current_list="GET_CURRENT_LIST" />
                <InfoMessage v-else message="Cliquez sur une liste pour pouvoir y acceder" />
            </div>
        </div>

    </div>

</template>

<script>


import {mapActions, mapGetters} from "vuex";
import SideBar from "@/components/Home/SideBar/SideBar";
import TodosLists from "@/components/Home/TodosLists/TodosLists";
import TopRow from "@/components/Home/TopRow/TopRow";
import InfoMessage from "@/components/Message/InfoMessage.vue";
import SuccessMessage from '@/components/Message/SuccessMessage.vue'
import ErrorMessage   from '@/components/Message/ErrorMessage.vue'

export default {
    name: "Home",
    components: {TopRow, InfoMessage, TodosLists, SideBar, SuccessMessage, ErrorMessage},
    methods : {
        ...mapActions('accounts',['API_REQUEST_GET_USER']),
        ...mapActions('todos',['API_REQUEST_GET_TODOS_LISTS']),

    },
    computed : {
        ...mapGetters('accounts',['GET_USER_DATA','GET_IS_ACCESS_AUTHORIZED']),
        ...mapGetters('todos',['GET_DEFAULT_LIST','GET_CURRENT_LIST']),
        ...mapGetters('todos',['GET_SUCCESS_MESSAGE','GET_ERROR_MESSAGE','GET_INFO_MESSAGE']),

    },
    mounted() {
        this.API_REQUEST_GET_USER(localStorage.authentification_token)
        this.API_REQUEST_GET_TODOS_LISTS(localStorage.authentification_token)
    }
}

</script>

<style scoped>

</style>