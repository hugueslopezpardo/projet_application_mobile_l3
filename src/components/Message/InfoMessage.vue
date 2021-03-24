<template>
    <div class="alert alert-warning" role="alert">
        {{ message }}
    </div>
</template>

<script>
export default {
    name: "InfoMessage",
    props : {
        message : String
    }
}
</script>

<style scoped>

</style>