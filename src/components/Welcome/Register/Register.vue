<template>
    <div class="container shadow-lg p-3 mb-5 bg-body rounded">

        <div class="row mt-3 mb-3">
            <h1>Inscription</h1>
        </div>

        <InfoMessage v-if="info_message != ''" :message="info_message" />



        <div class="mb-3">
            <label for="register-email-input" class="form-label">Email</label>
            <input v-model="email" type="email" class="form-control" id="register-email-input" aria-describedby="register-email-help" placeholder="Votre adresse email ...">
            <div id="register-email-help" class="form-text">Ne partagez jamais vos données personnel.</div>
        </div>

            <div class="mb-3">
                <label for="register-pseudo-input" class="form-label">Pseudo</label>
                <input v-model="pseudo" type="text" class="form-control" id="register-pseudo-input" aria-describedby="register-pseudo-help" placeholder="Votre pseudo ...">
                <div id="register-pseudo-help" class="form-text">3 caractère minimum / 15 caractère maximum</div>

            </div>

            <div class="mb-3">
                <label for="register-password-input" class="form-label">Mot de passe</label>
                <input v-model="password" type="password" class="form-control" id="register-password-input" aria-describedby="register-password-help" placeholder="Votre mot de passe ...">
                <div id="register-password-help" class="form-text">8 caractère minimum / 15 caractère maximum</div>

            </div>

            <div class="mb-3">
                <label for="register-password-confirmation-input" class="form-label">Confirmation mot de passe</label>
                <input v-model="password_confirmation" type="password" class="form-control" id="register-password-confirmation-input" placeholder="Confirmation mot de passe ...">
            </div>

            <button v-on:click="SIGNUP" type="submit" class="btn btn-outline-primary mt-3">Inscription</button>



    </div>
</template>

<script>

import InfoMessage from '@/components/Message/InfoMessage.vue'

export default {
    name: "Register",
    components : {
        InfoMessage
    },
    data() {
        return{

            info_message          : '',
            email                 : null,
            pseudo                : null,
            password              : null,
            password_confirmation : null,


        }
    },
    methods : {
        SIGNUP()
        {

            if(this.email && this.pseudo && this.password && this.password_confirmation) {

                this.info_message = ''


                if(this.pseudo.length < 3)
                {
                    this.info_message = 'Pseudo trop court'
                    return
                }

                if(this.pseudo.length > 15)
                {
                    this.info_message = 'Pseudo trop long'
                    return
                }

                if(this.password.length < 8)
                {
                    this.info_message = 'Mot de passe trop court'
                    return
                }

                if(this.password.length > 15)
                {
                    this.info_message = 'Mot de passe trop long'
                    return
                }

                if(this.password != this.password_confirmation)
                {
                    this.info_message = 'Erreur les mots de passe ne correspond pas'
                    return
                }


                console.log("Coucou")

            }else{
                this.info_message = 'Veuillez remplir tous les champ'
            }


        }
    }
}
</script>

<style scoped>

</style>