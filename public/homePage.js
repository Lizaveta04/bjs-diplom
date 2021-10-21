//Реализация страницы «Личный кабинет пользователя».

"use strict";

//Выход из личного кабинета.
const logoutButton = new LogoutButton();
logoutButton.action = () => { 
    ApiConnector.logout((response) => {
        if (response.success === true) {
            location.reload();
        }
    });
};

//Получение информации о пользователе.
ApiConnector.current((response) => {
    if (response.success === true) {
        ProfileWidget.showProfile(response.data); 
    }
});

//Получение текущих курсов валюты.
const ratesBoard = new RatesBoard();
const currencyRates = (ratesBoard) => {
    ApiConnector.getStocks((response) => {
        if (response.success === true) {
            ratesBoard.clearTable();
            ratesBoard.fillTable(response.data);
        }
    });
};
currencyRates(ratesBoard);
setInterval(() => {
    currencyRates(ratesBoard);
}, 60000);

//Работа с избранным.
const favoritesWidget = new FavoritesWidget();
ApiConnector.getFavorites((response) => {
    if (response.success === true) {
        favoritesWidget.clearTable();
        favoritesWidget.fillTable(response.data);
        moneyManager.updateUsersList(response.data);
    }
});
favoritesWidget.addUserCallback = (response) => {
    ApiConnector.addUserToFavorites(response, (response) => {
        if (response.success === true) {
            favoritesWidget.clearTable();
            favoritesWidget.fillTable(response.data);
            moneyManager.updateUsersList(response.data);
            favoritesWidget.setMessage(true, 'Пользователь успешно добавлен.');
        } else {
            favoritesWidget.setMessage(false, response.error);
        }
    });
};
favoritesWidget.removeUserCallback = (response) => {
    ApiConnector.removeUserFromFavorites(response, (response) => {
        if (response.success === true) {
            favoritesWidget.clearTable();
            favoritesWidget.fillTable(response.data);
            moneyManager.updateUsersList(response.data);
            favoritesWidget.setMessage(true, 'Пользователь успешно удален.');
        } else {
            favoritesWidget.setMessage(false, response.error);
        }
    });
};

//Операции с деньгами.
const moneyManager = new MoneyManager();
moneyManager.addMoneyCallback = (response) => {
    ApiConnector.addMoney(response, (response) => {
        if (response.success === true) {
            ProfileWidget.showProfile(response.data); 
            moneyManager.setMessage(true, 'Баланс успешно пополнен.');
        } else {
            moneyManager.setMessage(false, response.error);
        }
    });
};
moneyManager.conversionMoneyCallback = (response) => {
    ApiConnector.convertMoney(response, (response) => {
        if (response.success === true) {
            ProfileWidget.showProfile(response.data); 
            moneyManager.setMessage(true, 'Конвертация валюты прошла успешно.');
        } else {
            moneyManager.setMessage(false, response.error);
        }
    });
};
moneyManager.sendMoneyCallback = (response) => {
    ApiConnector.transferMoney(response, (response) => {
        if (response.success === true) {
            ProfileWidget.showProfile(response.data); 
            moneyManager.setMessage(true, 'Перевод средств выполнен успешно.');
        } else {
            moneyManager.setMessage(false, response.error);
        }
    });
};
