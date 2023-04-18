'use strict'
//Создайте объект класса UserForm
class UserForm { 
    constructor(){
        this.data = etData(form)

    }
//Присвойте свойству loginFormCallback созданного объекта значение функции, которая в качестве аргумента принимает объект data
    loginFormCallback(data){ 

//Функция должна выполнять запрос на сервер для попытки авторизации пользователя (авторизацию пользователя выполняйте с помощью ApiConnector.login
        ApiConnector.login({login, password}, callback); 

//Передайте в запрос авторизации функцию, которая будет выполняться при попытке авторизации.
        loginFormAction(loginFormCallback);

//Проверьте успешность запроса.
        if(loginFormCallback()){
            location.reload(); 
        } else {
            setLoginErrorMessage(message);
            //console.error('Ошибка!');
        }
    }

    registerFormCallback(data){
        ApiConnector.register({login, password}, callback);
        registerFormAction(registerFormCallback);
        if (registerFormCallback()){
            location.reload(); 
        } else {
            setRegisterErrorMessage(message);
        }

    }    
}