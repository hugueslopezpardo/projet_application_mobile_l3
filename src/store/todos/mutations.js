export function SET_IS_DATA_LOADING_TRUE(state)
{
    state.is_data_loading = true
}

export function SET_IS_DATA_LOADING_FALSE(state)
{
    state.is_data_loading = false
}

export function SET_TODOS_LISTS(state, api_todos_lists)
{
    state.todos_lists = api_todos_lists
}

export function SET_SUCCESS_MESSAGE(state, success_message)
{
    state.success_message = success_message
}

export function SET_ERROR_MESSAGE(state, error_message)
{
    state.error_message = error_message
}

export function SET_CURRENT_LIST(state, list_position_id)
{
    state.current_list = state.todos_lists[list_position_id]
    SET_CURRENT_TODOS(state)
}

export function SET_CURRENT_TODOS(state)
{
    state.current_todos = state.current_list.todos
}

export function SET_CURRENT_TODOS_FILTER(state, todos_filter)
{
    state.current_todos = todos_filter
}