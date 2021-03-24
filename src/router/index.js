import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'; // <-- aliased path
const axios = require('axios');




const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: () => import('../views/Welcome/Welcome.vue')
    },
    {
        path: '/home',
        name: 'Home',
        beforeEnter: () => {


            /**
             * Pour savoir si nous pouvons acceder à la page, nous essayons de récupérer les données de l'utilisateur
             * avec le token d'authentification, si il réussis, alors nous somme autorisé à acceder à la page, sinon
             * la connexion est impossible
             */

            let authentification_token = ''

            if(!localStorage.authentification_token) {
                 authentification_token = store.getters['accounts/GET_AUTHENTIFICATION_TOKEN'];
            }else{
                 authentification_token = localStorage.authentification_token
            }

            console.log(authentification_token)

            axios.create({
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ authentification_token
                }
            })
            .get('http://138.68.74.39/api/user')
            .catch((error) => (

                router.push('/'),
                console.log(error)

            ))

        },
        component: () => import('../views/Home/Home.vue')
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
