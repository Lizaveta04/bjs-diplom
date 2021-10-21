//Реализация страницы «Вход и регистрация».

"use strict";

const userForm = new UserForm();

//Вход.
userForm.loginFormCallback = (data) => {
    ApiConnector.login(data, (response) => {
        if (response.success === true) {
            location.reload();
        } else {
            userForm.setLoginErrorMessage(`Произошла ошибка. ${response.error}`);
        }
    });
};

//Регистрация.
userForm.registerFormCallback = (data) => {
    ApiConnector.register(data, (response) => {
      if (response.success === true) {
        location.reload();       
      } else {
        userForm.setRegisterErrorMessage(`Произошла ошибка при регистрации. ${response.error}`);
      } 
    });
  } 
  