const LoginAuth = (result) => {
 const {accessToken, userId } = result;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('userId', userId);
    return true;
};

export default LoginAuth;