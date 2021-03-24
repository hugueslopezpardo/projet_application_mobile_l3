export function SET_LOGIN_INFORMATION(state, authentification_token)
{
    state.authentification_token = authentification_token //On stocke le token d'authentification dans le store
}

export function SET_IS_AUTHENTICATED_FALSE(state)
{
    state.is_authenticated = false
}

export function SET_IS_DATA_LOADING_TRUE(state)
{
    state.is_data_loading = true
}

export function SET_IS_DATA_LOADING_FALSE(state)
{
    state.is_data_loading = false
}

export function SET_SUCCESS_MESSAGE(state, success_message)
{
    state.success_message = success_message
}

export function SET_ERROR_MESSAGE(state, error_message)
{
    state.error_message = error_message
}

