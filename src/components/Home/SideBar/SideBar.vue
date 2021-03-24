<template>
    <div class="mb-3">
        <label for="create-new-list-input" class="form-label">Créer une liste</label>
        <input type="text" class="form-control" id="create-new-list-input" placeholder="Nom de votre liste ...">
        <div id="emailHelp" class="form-text">20 caractère maximum</div>
    </div>
    <button type="submit" class="btn btn-outline-primary">Créer</button>

    <div class="list-group mt-3" id="list-tab" role="tablist">
        <SideBarItem  v-for="(todo, key) in todos_lists" v-bind:key="key" :list_name="todo.name" :list_position_id="key"/>
    </div>
</template>

<script>
import SideBarItem from '@/components/Home/SideBar/SideBarItem.vue'

export default {
    name: "SideBar",
    props : {
        todos_lists : Array
    },
    components : {
        SideBarItem
    }
}
</script>

<style scoped>

</style>