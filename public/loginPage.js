'use strict'
const loginResponseHandler = (response) => { response.success ? location.reload() : alert(response.error) };
userForm.loginFormCallback = (data) => { ApiConnector.login(data, loginResponseHandler) };

const registerResponseHandler = (response) => { response.success ? location.reload() : alert(response.error) };
userForm.registerFormCallback = (data) => { ApiConnector.register(data, registerResponseHandler) };