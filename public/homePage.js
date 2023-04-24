'use strict'

const { response } = require("express");

let userForm = new UserForm();

const loginResponseHandler = (response) => { response.success ? location.reload() : userForm.setLoginErrorMessage(response.error) };
userForm.loginFormCallback = (data) => { ApiConnector.login(data, loginResponseHandler) };

const registerResponseHandler = (response) => { response.success ? location.reload() : userForm.setRegisterErrorMessage(response.error) };
userForm.registerFormCallback = (data) => { ApiConnector.register(data, registerResponseHandler) };

const logoutButton = new LogoutButton();
const logoutCallback = (response) => { response.success && location.reload() };
logoutButton.action = () => { ApiConnector.logout(logoutCallback) };


const getCurrentCallback = (response) => { response.success && ProfileWidget.showProfile(response.data) };
ApiConnector.current(getCurrentCallback);


const moneyManager = new MoneyManager();
const addMoneyCallback = (response) => { response.success && ProfileWidget.showProfile(response.data)};
moneyManager.addMoneyCallback = (data) => { ApiConnector.addMoney(data, addMoneyCallback) };

const conversionMoneyCallback = (response) => {response.success && ProfileWidget.showProfile(response.data)};
moneyManager.conversionMoneyCallback = (data) => {ApiConnector.convertMoney(data, conversionMoneyCallback)};

const sendMoneyCallback = (response) => {response.success && ProfileWidget.showProfile(response.data)};
moneyManager.sendMoneyCallback = (data) => {ApiConnector.transferMoney(data, sendMoneyCallback)};


const ratesBoard = new RatesBoard();
const getExchangeRateCallback = response => {

    if (response.success) {
        
        ratesBoard.clearTable();
        ratesBoard.fillTable(response.data);
    }
}
setInterval(() => { ApiConnector.getStocks(getExchangeRateCallback) }, 1000);

const favoritesWidget = new FavoritesWidget();
const requestForListFavorites = response => {
    if(response.success){
        favoritesWidget.clearTable();
        favoritesWidget.fillTable(response.data);
        favoritesWidget.updateUsersList(response.data);
    }
 }
 favoritesWidget.requestForListFavorites = (data) => {ApiConnector.getFavorites(data, requestForListFavorites)};

 const addUserCallback = (response) => {response.success && };
 favoritesWidget.addUserCallback = (data) => (ApiConnector.addUserToFavorites());

 const removeUserCallback = (response) => {response.success && };
 favoritesWidget.addUserToFavorites = (data) => (ApiConnector.removeUserFromFavorites());