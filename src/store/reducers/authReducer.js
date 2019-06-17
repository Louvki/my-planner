const initState = {
    authError: null,

}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SIGNIN_ERROR':
            console.log('signin  failed');
            return {
                ...state,
                authError: 'Signin failed'
            }
        case 'SIGNIN_SUCCESS':
            console.log('signin success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout succ');
            return state;
        case 'SIGNOUT_ERROR':
            console.log('signout error');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return {
                ...state,
                authError: null,
            };
        case 'SIGNUP_ERROR':
            console.log('signup error', action.error.message);
            return {
                ...state,
                authError: action.error.message,
            };
        default: return state;
    }
}

export default authReducer;