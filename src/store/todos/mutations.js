/**
 * Permet d'affecter la liste de TODO en cours
 * @param state
 * @param list_position
 * @constructor
 */
export function SET_CURRENT_LIST(state, list_position)
{
    state.current_list = state.default_list[list_position]
}

/**
 * Permet de stocker la liste récupérer depuis l'API
 * @param state
 * @param default_list
 * @constructor
 */
export function SET_DEFAULT_LIST(state, default_list)
{
    state.default_list = default_list
}

/**
 * Permet de reinitialiser les message d'erreur
 * @param state
 */
export function SET_DEFAULT_MESSAGE(state)
{
    SET_DEFAULT_SUCCESS_MESSAGE(state,'')
    SET_ERROR_MESSAGE(state,'')
    SET_INFO_MESSAGE(state,'')
}


export function SET_DEFAULT_SUCCESS_MESSAGE()
{
    SET_SUCCESS_MESSAGE('')
}

export function SET_DEFAULT_ERROR_MESSAGE()
{
    SET_ERROR_MESSAGE('')
}

export function SET_DEFAULT_INFO_MESSAGE()
{
    SET_INFO_MESSAGE('')
}

/**
 * Permet de donner le message en cas de success
 * @param state
 * @param success_message
 */
export function SET_SUCCESS_MESSAGE(state, success_message)
{

    state.success_message = success_message
    SET_DEFAULT_ERROR_MESSAGE()
    SET_DEFAULT_INFO_MESSAGE()

}

/**
 * Permet de donner le message en cas d'erreur
 * @param state
 * @param error_message
 */
export function SET_ERROR_MESSAGE(state, error_message)
{
    state.error_message = error_message
    SET_DEFAULT_INFO_MESSAGE()
    SET_DEFAULT_SUCCESS_MESSAGE()
}

/**
 * Permet d'afficher un message pour prévenir l'utilisateur
 * @param state
 * @param info_message
 */
export function SET_INFO_MESSAGE(state, info_message)
{
    state.info_message = info_message;
    SET_DEFAULT_ERROR_MESSAGE()
    SET_DEFAULT_SUCCESS_MESSAGE()

}


/**
 * Permet d'afficher l'écran de chargement
 * @param state
 */
export function SET_IS_DATA_LOADING_TRUE(state)
{
    state.is_data_loading = true;
}


/**
 * Permet d'enlever l'écran de chargement
 * @param state
 */
export function SET_IS_DATA_LOADING_FALSE(state)
{
    state.is_data_loading = false;
}

/*----------------------------------------------------*/

export function ADD_TODO_IN_LIST(state,{ id, todolist_id, name, completed, created_at, update_at})
{

    state.current_list.todos.push({
        id          : id,
        todolist_id : todolist_id,
        name        : name,
        completed   : completed,
        created_at  : created_at,
        update_at   : update_at,
    })

}


export function REMOVE_TODO_IN_LIST(state, todo_id)
{
    let i = get_index(state.current_list.todos, todo_id)
    state.current_list.todos.splice(i, 1)
}

export function UPDATE_TODO_STATUS_IN_LIST(state, todo_id)
{
    let i = get_index(state.current_list.todos, todo_id)
    state.current_list.todos[i].completed = !state.current_list.todos[i].completed
}


export function UPDATE_TODO_NAME_IN_LIST(state, {todo_id, new_name})
{
    let i = get_index(state.current_list.todos, todo_id)
    state.current_list.todos[i].name = new_name

}



export function DELETE_TODO_LIST(state, todo_list_id)
{
    let i = get_index(state.default_list, todo_list_id)
    state.default_list.splice(i, 1)
    SET_CURRENT_LIST(state, null)
}


export function DELETE_TODO_LIST(state, todo_list_id)
{
    let i = get_index(state.default_list, todo_list_id)
    state.default_list.splice(i, 1)
    SET_CURRENT_LIST(state, null)
}


export function CREATE_TODO_LIST(state, {id, name, user_id, created_at, updated_at, nb_todos, todos})
{

    state.default_list.push({
        id          : id,
        name        : name,
        user_id     : user_id,
        created_at  : created_at,
        updated_at  : updated_at,
        nb_todos    : nb_todos,
        todos       : todos
    })

}

/**
 * Permet de mettre le filtre sur les todo non finis
 * @param state
 * @constructor
 */
export function SET_NOT_FINISH_TODOS(state)
{
    state.filter = 'todo'
}

/**
 * Permet de mettre le filtre sur les todos finis
 * @param state
 * @constructor
 */
export function SET_FINISH_TODOS(state)
{
    state.filter = 'do'
}

/**
 * Permet de mettre le filtre sur toutes les todos
 * @param state
 * @constructor
 */
export function SET_ALL_TODOS(state)
{
    state.filter = 'all'
}


/**
 * Permet de récupérer la position de la todo dans une liste
 * @param todo_id
 */
function get_index(liste,todo_id)
{
    return liste.map(item => item.id).indexOf(todo_id)
}


/**
 * Permet de récupérer la position de la todo dans une liste
 * @param todo_id
 */
function get_index(liste,todo_id)
{
    return liste.map(item => item.id).indexOf(todo_id)
}

