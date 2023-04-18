'use strict'
//Создайте объект класса LogoutButton. 
class LogoutButton{
    constructor (){
//В свойство action запишите функцию, которая будет вызывать запрос деавторизации (logout).
        this.action = function (logout){
//В колбек запроса добавьте проверку: если запрос выполнился успешно, то обновите страницу
            if(logout){
                location.reload();
            }
        }
    }
//Выполните запрос на получение текущего пользователя (current)?
//D колбеке которого проверьте ответ: если ответ успешный, то вызовите метод отображения данных профиля (ProfileWidget.showProfile) в который передавайте данные ответа от сервера.
    gettingUserInformation(){
        ApiConnector.current(callback) = () => ProfileWidget.showProfile(data);
    }

//Создайте объект типа RatesBoard.
    RatesBoard() {
//Напишите функцию, которая будет выполнять запрос получения курсов валют.
//В случае успешного запроса, очищайте таблицу с данными (clearTable) и заполняйте её (fillTable) полученными данными.
        ApiConnector.getStocks(callback) = () => clearTable() && fillTable(data);
//Вызовите данную функцию для получения текущих валют.
        RatesBoard();
//Напишите интервал, который будет многократно выполняться (раз в минуту) и вызывать вашу функцию с получением валют.
        setInterval(() => RatesBoard(), 1000);
    }

//Создайте объект типа MoneyManager
    MoneyManager(){
//Запишите в свойство addMoneyCallback функцию, которая будет выполнять запрос.
     addMoneyCallback = function(data){
//Внутри функции выполните запрос на пополнение баланса (addMoney).
        ApiConnector.addMoney({ currency, amount }, callback);
//Используйте аргумент функции свойства addMoneyCallback для передачи данных data в запрос.
        addMoneyCallback(data) = () => showProfile(data) && setMessage(isSuccess, message);
    }

//Реализуйте конвертирование валюты
    conversionMoneyCallback = function(data){
        ApiConnector.convertMoney({ fromCurrency, targetCurrency, fromAmount }, callback);
        conversionMoneyCallback(data) = () => showProfile(data) && setMessage(isSuccess, message);
    }

//Реализуйте перевод валюты
    sendMoneyCallback = function(data){
        ApiConnector.transferMoney({ to, currency, amount }, callback);
        sendMoneyCallback(data) = () => showProfile(data) && setMessage(isSuccess, message);
    }

    }

//Создайте объект типа FavoritesWidget

    FavoritesWidget(){
//Запросите начальный список избранного
        ApiConnector.getFavorites(callback) = () => clearTable();
        fillTable(data);
        updateUsersList(data);

//Реализуйте добавления пользователя в список избранных
        addUserCallback = function(data){
            ApiConnector.addUserToFavorites({id, name}, callback);
            addUserCallback(data) = () => clearTable() && fillTable(data) && updateUsersList(data) && setMessage(isSuccess, message);

        }

//Реализуйте удаление пользователя из избранного
        removeUserCallback = function(data) {
            ApiConnector.removeUserFromFavorites(id, callback);
            removeUserFromFavorites(data) = () => clearTable() && fillTable(data) && updateUsersList(data) && setMessage(isSuccess, message);

        }
    }
}