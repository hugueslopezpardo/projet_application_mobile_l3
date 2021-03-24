<template>

    <div class="mt-5">

        <Login />

        <Register />

    </div>

</template>

<script>

import Login        from '@/components/Welcome/Login/Login.vue'
import Register     from '@/components/Welcome/Register/Register.vue'

export default {
    name: "Welcome",
    components : {
        Login,
        Register,

    },
    computed : {
    }
}
</script>

<style scoped>

</style>