<template>
  <div class="container">
    <h1>Bienvenue : {{user_data.name}}</h1>

  </div>
</template>

<script>
export default {
  name: "TopRow",
  props : {
    user_data : Object
  }
}
</script>

<style scoped>

</style>