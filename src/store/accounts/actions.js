import router from "@/router";

const axios = require('axios');

/**
 * Permet de faire une requête de connexion via l'API
 * @param commit
 * @param email
 * @param password
 * @constructor
 * @axios : POST
 */
export function API_REQUEST_LOGIN({commit},{email, password})
{

    commit('SET_IS_DATA_LOADING_TRUE') //On lance l'écran de chargement

    axios
        .post('http://138.68.74.39/api/login',{
            email    : email,
            password : password
        })
        .then(response => {

            commit('SET_AUTHENTIFICATION_TOKEN', response['data'].token),
            commit('SET_SUCCESS_MESSAGE', 'Connexion effectué, redirection en cours ...'),
            commit('SET_IS_ACCESS_AUTHORIZED_TRUE')

            /**
             *  Nous allons enregistrer nos données en local pour éviter de devoir refaire des appelle à l'API
             *  pour re récupérer le token d'authentification
             */

            localStorage.authentification_token = response['data'].token

            setTimeout(() => {  //On effectue une redirection vers la page des todos
                router.push('/home')
            }, 1000)

        })
        .catch(error => {

            commit('SET_IS_ACCESS_AUTHORIZED_FALSE')


            if(error.response) {

                /**
                 * Nous mettons un IF car si dans le futur il y'a plusieurs code d'erreur à gérer
                 * il sera alors plus facile d'adapter pour gérer les différents code
                 */

                if(error.response.status == 401){   //Impossible de se connecter

                    commit('SET_ERROR_MESSAGE','Connexion impossible')
                }else{
                    commit('SET_ERROR_MESSAGE','Connexion impossible')
                }

            }else{
                commit('SET_ERROR_MESSAGE','Service indisponible pour le moment ')

            }

        })
        .finally(() => commit('SET_IS_DATA_LOADING_FALSE')) //On arrête l'écran de chargement

}


/**
 * Permet de faire une requête à l'API pour s'inscrire
 * @param commit
 * @param name
 * @param email
 * @param password
 * @constructor
 * @axios : POST
 */
export function API_REQUEST_SIGNUP({commit},{name, email, password})
{
    commit('SET_IS_DATA_LOADING_TRUE'); //On lance l'écran de chargement

    axios
        .post('http://138.68.74.39/api/register', {
            name     : name,
            email    : email,
            password : password
        })
        .then(response => {

            commit('SET_AUTHENTIFICATION_TOKEN', response['data'].token),
            commit('SET_SUCCESS_MESSAGE','Inscription effectué, redirection en cours ...')
            commit('SET_IS_ACCESS_AUTHORIZED_TRUE')

            /**
             *  Nous allons enregistrer nos données en local pour éviter de devoir refaire des appelle à l'API
             *  pour re récupérer le token d'authentification
             */

            localStorage.authentification_token = response['data'].token


            setTimeout(() => {  //On effectue une redirection vers la page des todos
                router.push('/home')
            }, 1000)

        })
        .catch(error => {

            commit('SET_IS_ACCESS_AUTHORIZED_FALSE')


            if(error.response) {

                /**
                 * Nous mettons un IF car si dans le futur il y'a plusieurs code d'erreur à gérer
                 * il sera alors plus facile d'adapter pour gérer les différents code
                 */

                if(error.response.status == 409){
                    commit('SET_ERROR_MESSAGE','Ce compte est déja enregistrer')
                }else{
                    commit('SET_ERROR_MESSAGE','Inscription impossible')
                }

            }else{
                commit('SET_ERROR_MESSAGE','Service indisponible pour le moment ')

            }

        })
        .finally(() => commit('SET_IS_DATA_LOADING_FALSE')) //On arrête l'écran de chargement

}


export function API_REQUEST_GET_USER({commit}, authentification_token)
{

    commit('SET_IS_DATA_LOADING_TRUE'); //On lance l'écran de chargement

    axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ authentification_token
        }
    })
        .get('http://138.68.74.39/api/user')
        .then((response) => {

            commit('SET_USER_DATA',response['data'])
            commit('SET_IS_ACCESS_AUTHORIZED_TRUE')

        })
        .catch((error) => {

            commit('SET_IS_ACCESS_AUTHORIZED_FALSE')

            if(error.response)
            {

                if(error.response.status == 429)
                {
                    commit('SET_ERROR_MESSAGE','Service indisponible')

                }else{
                    commit('SET_ERROR_MESSAGE','Erreur interne')
                }

            }else{
                commit('SET_ERROR_MESSAGE','Erreur intener')
            }


        })

        .finally(() => commit('SET_IS_DATA_LOADING_FALSE')) //On arrête l'écran de chargement

}




export function REQUEST_LOGOUT({commit})
{
    commit('SET_IS_CONNECTED_FALSE')            //L'utilisateur sera signifier comme deconnecté
    commit('SET_AUTHENTIFICATION_TOKEN','')     //Nous remettons son token par défaut
}

export function REQUEST_SET_INFO_MESSAGE({commit},info_message)
{
    commit('SET_INFO_MESSAGE',info_message)
}

export function REQUEST_SET_DEFAULT_MESSAGE({commit})
{
    commit('SET_DEFAULT_MESSAGE')
}


