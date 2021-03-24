<template>

    <div class="container-fluid" v-if="current_list != null">


        <h1>aze</h1>

        <div class="progress mt-4">
            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
        </div>


        <div class="mb-3 mt-5">
            <label for="create-new-list-input" class="form-label">Créer une TODO</label>
            <input type="text" class="form-control" id="create-new-list-input" placeholder="Nom de votre tâche ...">
            <div id="emailHelp" class="form-text">20 caractère maximum</div>
        </div>

        <div class="mt-2 mb-4">
            <button type="submit" class="btn btn-outline-primary">Créer</button>
        </div>

        <ul class="list-group">
        </ul>

    </div></template>

<script>
export default {
    name  : "TodosLists",
    props : {
        current_list : Array
    }
}
</script>

<style scoped>

</style>