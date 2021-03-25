export function GET_IS_DATA_LOADING(state)
{
    return state.is_data_loading
}

export function GET_SUCCESS_MESSAGE(state)
{
    return state.success_message
}

export function GET_ERROR_MESSAGE(state)
{
    return state.error_message
}

export function GET_TODOS_LISTS(state)
{
    return state.todos_lists
}

export function GET_CURRENT_LIST(state)
{
    return state.current_list
}

export function GET_CURRENT_TODOS(state)
{

    if(state.todos_filter == 'all') {
        return state.current_list.todos
    }else if(state.todos_filter == 'todo'){
        return state.current_list.todos.filter(t => t.completed)
    }else if(state.todos_filter == 'do'){
        return state.current_list.todos.filter(t => !t.completed)
    }else{
        return state.current_todos.todos
    }

}

export function GET_TODOS_FILTER(state)
{
    return state.todos_filter
}