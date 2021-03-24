<template>
    <a v-on:click="SET_CURRENT_LIST" class="list-group-item list-group-item-action" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="home">{{list_name}}</a>
</template>

<script>

import {mapActions} from "vuex";


export default {
    name: "SideBarItem",
    props : {
        list_position_id   : Number,
        list_name : String
    },
    methods : {
        ...mapActions('todos',['REQUEST_SET_CURRENT_LIST']),
        SET_CURRENT_LIST()
        {
            this.REQUEST_SET_CURRENT_LIST(this.list_position_id)
        }
    }
}
</script>

<style scoped>

</style>