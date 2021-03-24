<template>

    <div class="container shadow-lg p-3 mb-5 bg-body rounded">

        <div class="row mt-3 mb-3">
            <h1>Connexion</h1>
        </div>

        <InfoMessage    v-if="info_message        != ''"  :message="info_message" />
        <SuccessMessage v-if="GET_SUCCESS_MESSAGE != '' " :message="GET_SUCCESS_MESSAGE" />
        <ErrorMessage   v-if="GET_ERROR_MESSAGE   != '' " :message="GET_ERROR_MESSAGE" />

        <div class="mb-3">
            <label for="login-email-input" class="form-label">Email</label>
            <input v-model="email" type="email" class="form-control" id="login-email-input" aria-describedby="login-email-help" placeholder="Votre adresse email ...">
            <div id="login-email-help" class="form-text">Ne partagez jamais vos données personnel.</div>
        </div>
        <div class="mb-3">
            <label for="login-password-input" class="form-label">Mot de passe</label>
            <input v-model="password" type="password" class="form-control" id="login-password-input" placeholder="Votre mot de passe ...">
        </div>

        <button v-on:click="LOGIN" type="submit" class="btn btn-outline-primary mt-3">Connexion</button>

    </div>

</template>

<script>
import InfoMessage from '@/components/Message/InfoMessage.vue'
import SuccessMessage from '@/components/Message/SuccessMessage.vue'
import ErrorMessage   from '@/components/Message/ErrorMessage.vue'
import {mapGetters, mapActions} from "vuex";

export default {
    name: "Login",
    components : {
        InfoMessage,
        SuccessMessage,
        ErrorMessage
    },
    data() {
        return {
            info_message : '',
            email        : null,
            password     : null
        }
    },
    methods : {

        ...mapActions('accounts',['API_REQUEST_LOGIN']),

        LOGIN()
        {
            if(this.email && this.password) {
                this.info_message = ''

                this.API_REQUEST_LOGIN({
                    email    : this.email,
                    password :this.password
                })

            }else{
                this.info_message = 'Veuillez remplir tous les champs'
            }
        }

    },
    computed : {
        ...mapGetters('accounts',['GET_SUCCESS_MESSAGE']),
        ...mapGetters('accounts',['GET_ERROR_MESSAGE'])
    }
}
</script>

<style scoped>

</style>