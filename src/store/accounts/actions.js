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
        .then(response => (

            //commit('SET_LOGIN_INFORMATION', response['data'].token)
            commit('SET_SUCCESS_MESSAGE', 'Inscription réussi !'),
            console.log(response)

        )).catch((

            commit('SET_ERROR_MESSAGE', 'Inscription échoué !')

        )).finally(() => commit('SET_IS_DATA_LOADING_FALSE')) //On arrête le chargement

}



/**
 * Permet de se connecter
 * @axios : POST
 */
export function API_REQUEST_LOGIN()
{

}


