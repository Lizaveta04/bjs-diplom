"use strict";

class UserForm {
    constructor(loginForm, registerForm, loginErrorMessageBox, registerErrorMessageBox, loginFormCallback, registerFormCallback) { //создаёт объект
        this.loginForm = {}; //объект формы авторизации
        this.registerForm = {}; //объект формы регистрации
        this.loginErrorMessageBox = {}; //объект окна вывода сообщений на странице авторизации
        this.registerErrorMessageBox = {}; //объект окна вывода сообщений на странице регистрации
        this.loginFormCallback = (data) => {}; //функция, которая будет выполняться при попытке авторизации
        this.registerFormCallback = (data) => {}; //функция, которая будет выполняться при попытке регистрации

    }
    setLoginErrorMessage(message) { //выводит сообщение с ошибкой при авторизации

    }
    setRegisterErrorMessage(message) { //выводит сообщение с ошибкой при регистрации

    }
    loginFormAction() { //обработчик события сабмита формы авторизации
        const data = {
            login,
            password,
        };

    }
    registerFormAction() { //обработчик события сабмита формы регистрации
        const data = {
            login,
            password,
        };
        
    }
    getData(form) { //метод получения данных из переданной формы

    }
}

class ApiConnector {
    _parseResponseBody(response) { //пробует парсить тело ответа, если оно существует

    } 
    login({ login, password }, callback) { //запрос на авторизацию пользователя

    } 
    register({login, password}, callback) { //запрос на создание пользователя с переданными параметрами

    } 
    current(callback) { //запрос на получение текущего авторизованного пользователя

    } 
    logout(callback) { //запрос на деавторизацию пользователя

    } 
    getFavorites(callback) { //запрос на получение списка избранного

    } 
    addUserToFavorites({id, name}, callback) { //запрос на добавление пользователя в список избранного

    } 
    removeUserFromFavorites(id, callback) { //запрос на удаление пользователя из списка избранного

    }
    transferMoney({ to, currency, amount }, callback) { //запрос на перевод денег авторизованного пользователя тому пользователю, чьё id передано

    }
    addMoney({ currency, amount }, callback) { //запрос на добавление денег авторизованному пользователю

    }
    convertMoney({ fromCurrency, targetCurrency, fromAmount }, callback) { //запрос на конвертацию денег авторизованного пользователя из одной валюты в другую

    }
    getStocks(callback) { //запрос на получение курсов валют

    }
}