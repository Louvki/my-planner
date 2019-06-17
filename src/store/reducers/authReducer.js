const initState = {
    authError: null,
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SIGNIN_ERROR':
            console.log('SIGNIN_ERROR');
            return {
                ...state,
                authError: 'Signin failed'
            }
        case 'SIGNIN_SUCCESS':
            console.log('SIGNIN_SUCCESS');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('SIGNOUT_SUCCESS');
            return state;
        case 'SIGNOUT_ERROR':
            console.log('SIGNOUT_ERROR');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('SIGNUP_SUCCESS');
            return {
                ...state,
                authError: null,
            };
        case 'SIGNUP_ERROR':
            console.log('SIGNUP_ERROR', action.error.message);
            return {
                ...state,
                authError: action.error.message,
            };
        default: return state;
    }
}

export default authReducer;