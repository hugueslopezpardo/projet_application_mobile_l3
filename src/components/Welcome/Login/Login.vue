<template>

    <div class="container shadow-lg p-3 mb-5 bg-body rounded">

        <div class="row mt-3 mb-3">
            <h1>Connexion</h1>
        </div>

        <form>
            <div class="mb-3">
                <label for="login-email-input" class="form-label">Email</label>
                <input type="email" class="form-control" id="login-email-input" aria-describedby="login-email-help" placeholder="Votre adresse email ...">
                <div id="login-email-help" class="form-text">Ne partagez jamais vos données personnel.</div>
            </div>
            <div class="mb-3">
                <label for="login-password-input" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="login-password-input" placeholder="Votre mot de passe ...">
            </div>

            <button type="submit" class="btn btn-outline-primary mt-3">Connexion</button>
        </form>

    </div>

</template>

<script>
export default {
    name: "Login"
}
</script>

<style scoped>

</style>