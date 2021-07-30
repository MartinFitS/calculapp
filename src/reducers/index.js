const reducer = (state,action) => {
    switch(action.type){
        case "CREATE_USER":
            return{
                ...state.action,
                user: action.payload
            }
            case "LOGIN_SUCCESFULLY":
                return{
                    ...state.action,
                    login: action.payload
            }
            case "USER_AUTHENTICATE":
                return{
                    ...state.action,
                    authenticateUser : action.payload
                }
            default:
                return state;
    }
};

export default reducer;
