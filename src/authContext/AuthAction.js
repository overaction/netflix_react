export const loginStart = () => ({
    type: "LOGIN_START",
});
export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});
export const loginFailure = (err) => ({
    type: "LOGIN_FAILURE",
});

// ๋ก๊ทธ์์
export const logout = () => ({
    type: "LOGOUT_START",
});
