export const createUser = payload => ({
    type: "CREATE_USER",
    payload
})

export const login = payload => ({
    type: "LOGIN_SUCCESFULLY",
    payload
});

export const authenticateUser = payload => ({
    type: "USER_AUTHENTICATE",
    payload
})