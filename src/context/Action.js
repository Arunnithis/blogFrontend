export const LoginStart =(userCredential) =>({
    type : "LOGIN_START",
});
export const LoginSuccess = (user) =>({
    type : "LOGIN_SUCCESS",
    payload : user,
}); 

export const LoginFailure = ()=> ({
    tpye :"LOGIN_FAILURE",
});
export const updateStart =(userCredential) =>({
    type : "UPDATE_START",
});
export const updateSuccess = (user) =>({
    type : "UPDATE_SUCCESS",
    payload : user,
}); 

export const updateFailure = ()=> ({
    tpye :"UPDATE_FAILURE",
});
export const Logout = ()=> ({
    tpye :"LOGOUT",
});