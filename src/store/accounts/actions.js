import router from "@/router";

const axios = require('axios');


/**================================================================================================
 *                                         API - ACTIONS
 *================================================================================================**/

/**
 * Permet de s'inscrire
 * @axios : POST
 */
export function API_REQUEST_SIGNUP({commit}, {name, email, password})
{
    commit('SET_IS_DATA_LOADING_TRUE') //On lance le chargement

    axios
        .post('http://138.68.74.39/api/register', {
            name     : name,
            email    : email,
            password : password
        })
        .then((response) => {

            commit('SET_LOGIN_INFORMATION', response['data'].token),
            commit('SET_SUCCESS_MESSAGE', 'Inscription réussi, redirection en cours !'),

            setTimeout(() => {
                router.push('/home')
            }, 3000)

        }).catch((error) => {

            if (error.response) {

                if(error.response.status == 409) {  //Le compte est déja enregistré

                    commit('SET_ERROR_MESSAGE', 'Compte déja enregistré')

                }else if(error.request) {

                    commit('SET_ERROR_MESSAGE', 'Service indisponible')

                }else{

                    commit('SET_ERROR_MESSAGE', "Une erreur innatendu c'est produite")

                }

            }

        }).finally(() => commit('SET_IS_DATA_LOADING_FALSE')) //On arrête le chargement

}



/**
 * Permet de se connecter
 * @axios : POST
 */
export function API_REQUEST_LOGIN()
{

}

/**
 * Demande pour que les message soit reset pour éviter que il reste afficher
 * @param commit
 * @constructor
 */
export function RESET_MESSAGE({commit})
{
    commit('SET_RESET_MESSAGES')

}


