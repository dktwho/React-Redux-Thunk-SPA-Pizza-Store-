# Содержание

Интернет магазин пиццы
С использованием React, Redux, Redux-Thunk, JsonServer, SCSS, classsNames, axios, React-content-loader, Router V6.

1. Главная страница, хидер с лого и с кнопкой перехода в корзину, где отображаеться сумма товаров в корзине и кол-во пицц в корзине.
2. Выбор пиццы для заказа с помощью дополнительных опций, тесто: традиционное или тонкое, а также диаметр пиццы.
3. Контент с категориями по виду пицц, также доступна сортировка по цене, популярности(рандомно проставлена в данных).
4. В каждом блоке пиццы, кнопка добавления, при добавлении пиццы в корзину, в блоке отображаетсья кол-во шт. данной пиццы, было добавлено в корзину.
5. Использование jsonserver для хранения данных с пиццами, в package - "proxy": "http://localhost:3001/".Запуск fake сервера коммандой из папки с проектом client/react-pizza -> npm run server.
6. В корзине есть возможность добавления или удаления добавленных пицц, удаление до кол-ва - 1 шт, с автоматическим пересчетом суммы закзов в корзине и общего кол-ва пицц.
7. В корзине кнопка для возврата назад, на главную страницу, также есть кнопка Очистить всю корзину.
8. Кнопка оплатить сейчас формирует заказ и выводит в консоль, с детализацией заказа ,кол-во, тип теста, диаметр.
