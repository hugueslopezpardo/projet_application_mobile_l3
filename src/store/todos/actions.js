const axios = require('axios');

/**================================================================================================
 *                                       API - CREATE
 *================================================================================================**/

/**
 * Permet de créer une TODO
 * @axios : POST
 */
export function API_REQUEST_CREATE_TODO({commit},{authentification_token, name, completed, todolist_id})
{

    axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ authentification_token
        }
    })
        .post('http://138.68.74.39/api/todo',{
            name        : name,
            completed   : completed,
            todolist_id : todolist_id
        })

        .then(reponse => {

            console.log(reponse)

        })
        .catch(error => (

            console.log(error)

        ))
        .finally(() => commit('SET_IS_DATA_LOADING_FALSE')) //On arrête le chargement

}

/**
 * Permet de créer une liste de TODO
 * @axios : POST
 */
export function API_REQUEST_CREATE_TODO_LIST({commit}, {name, authentification_token})
{

    axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ authentification_token
        }
    })
        .post('http://138.68.74.39/api/todolist', {
            name : name
        })

        .then((response) => {

            commit('SET_SUCCESS_MESSAGE','Liste parfaitement créer'),
            console.log(response)

        })
        .catch((error) => (

            commit('SET_ERROR_MESSAGE','Erreur lors de la création de la liste'),
            console.log(error)

        ))

}



/**================================================================================================
 *                                         API - DELETE
 *================================================================================================**/

/**
 * Permet de supprimer une TODO
 * @axios : DEL
 */
export function API_REQUEST_DELETE_TODO({commit}, {todo_id, authentification_token})
{

    axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ authentification_token
        }
    })
        .delete('http://138.68.74.39/api/todo/' + todo_id)

        .then(reponse => {

            console.log(reponse)

        })
        .catch(error => (

            console.log(error)

        ))
        .finally(() => commit('SET_IS_DATA_LOADING_FALSE')) //On arrête le chargement
}

/**
 * Permet de supprimer une liste de TODO
 * @axios : DEL
 */
export function API_REQUEST_DELETE_TODO_LIST({commit}, {todo_list_id, authentification_token})
{

    axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ authentification_token
        }
    })
        .delete('http://138.68.74.39/api/todolist/' + todo_list_id)

        .then((response) => {

            commit('SET_SUCCESS_MESSAGE','Liste parfaitement supprimer'),
            console.log(response)

        })
        .catch((error) => (

            commit('SET_ERROR_MESSAGE','Erreur lors de la supréssion de la liste'),
            console.log(error)

        ))


}


/**================================================================================================
 *                                         API - UPDATE
 *================================================================================================**/

/**
 * Permet de mettre à jour une TODO
 * @axios : PATCH
 */
export function API_REQUEST_UPDATE_TODO({commit},{name, completed, todolist_id, todo_id, authentification_token})
{
    axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ authentification_token
        }
    })
        .patch('http://138.68.74.39/api/completeTodo/' + todo_id, {
            name        : name,
            completed   : completed,
            todolist_id : todolist_id
        })
        .then(reponse => {

            console.log(reponse)

        })
        .catch(error => (

            console.log(error)

        ))
        .finally(() => commit('SET_IS_DATA_LOADING_FALSE')) //On arrête le chargement
}

export function API_REQUEST_CHANCE_TODO_STATUS({commit},{name, completed, todolist_id, todo_id, authentification_token})
{

    axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ authentification_token
        }
    })
        .post('http://138.68.74.39/api/completeTodo/' + todo_id, {
            name        : name,
            completed   : completed,
            todolist_id : todolist_id
        })
        .then(reponse => {

            console.log(reponse)

        })
        .catch(error => (

            console.log(error)

        ))
        .finally(() => commit('SET_IS_DATA_LOADING_FALSE')) //On arrête le chargement

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

export function REQUEST_SET_CURRENT_LIST({commit}, list_positio_id)


/**================================================================================================
 *                                         LOCAL - GET
 *================================================================================================**/
