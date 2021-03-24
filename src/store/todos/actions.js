const axios = require('axios');

/**================================================================================================
 *                                       API - CREATE
 *================================================================================================**/

/**
 * Permet de créer une TODO
 * @axios : POST
 */
export function API_REQUEST_CREATE_TODO()
{

}

/**
 * Permet de créer une liste de TODO
 * @axios : POST
 */
export function API_REQUEST_CREATE_TODO_LIST()
{


}



/**================================================================================================
 *                                         API - DELETE
 *================================================================================================**/

/**
 * Permet de supprimer une TODO
 * @axios : DEL
 */
export function API_REQUEST_DELETE_TODO()
{

}

/**
 * Permet de supprimer une liste de TODO
 * @axios : DEL
 */
export function API_REQUEST_DELETE_TODO_LIST()
{

}


/**================================================================================================
 *                                         API - UPDATE
 *================================================================================================**/

/**
 * Permet de mettre à jour une TODO
 * @axios : PATCH
 */
export function API_REQUEST_UPDATE_TODO()
{

}


/**================================================================================================
 *                                         API - GET
 *================================================================================================**/


/**
 * Permet de récupérer une TODO
 * @axios : GET
 */
export function API_REQUEST_GET_TODO()
{

}

/**
 * Permet de récupérer les lists de TODO de l'utilisateur
 * @axios : GET
 */
export function API_REQUEST_GET_TODO_LISTS({commit}, authentification_token)
{
    axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ authentification_token
        }
    })
        .get('http://138.68.74.39/api/todolists')
        .then(reponse => {

            commit('SET_TODOS_LISTS', reponse['data'])

        })
        .catch(error => (

            console.log(error)

        ))
        .finally(() => commit('SET_IS_DATA_LOADING_FALSE')) //On arrête le chargement
}


/**================================================================================================
 *                                         LOCAL - CREATE
 *================================================================================================**/


/**================================================================================================
 *                                         LOCAL - DELETE
 *================================================================================================**/


/**================================================================================================
 *                                         LOCAL - ACTIONS
 *================================================================================================**/


export function REQUEST_SET_CURRENT_LIST({commit}, list_position_id)
{
    commit('SET_CURRENT_LIST',list_position_id)
}


/**================================================================================================
 *                                         LOCAL - GET
 *================================================================================================**/
