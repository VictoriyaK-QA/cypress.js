import * as data from "../helpers/default_data.json" 

describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
        cy.visit('/');// Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');// Проверяем цвет кнопки восст. пароль
          });

    afterEach('Конец теста', function () {
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Есть крестик и он виден пользователю
           });

    it('Верный логин и верный пароль', function () {
         
         cy.get('#mail').type(data.login);// Ввели верный логин
         cy.get('#pass').type(data.password);// Ввели верный пароль
         cy.get('#loginButton').click();// Нажали войти
         cy.wait(5000);

         cy.get('#messageHeader').contains('Авторизация прошла успешно');//Проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible');//Текст виден пользователю                        
 
     })

 it('Верный логин и неверный пароль', function () {
         

         cy.get('#mail').type(data.login);// Ввели верный логин
         cy.get('#pass').type('iLoveqastudio2');// Ввели неверный пароль
         cy.get('#loginButton').click();// Нажали войти

         cy.wait(5000);
         
        cy.get('#messageHeader').contains('Такого логина или пароля нет');//Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');//Текст виден пользователю                           
 
     })
 it('Неверный логин и верный пароль', function () {
        

        cy.get('#mail').type('german@dolnikof.ru');// Ввели неверный логин
        cy.get('#pass').type(data.password);// Ввели верный пароль
        cy.get('#loginButton').click();// Нажали войти

        cy.wait(5000);
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет');//Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');//Текст виден пользователю                         

    })
it('Проверяем, что в логине есть @', function () {
        

        cy.get('#mail').type('germandolnikov.ru');// Ввели логин без @
        cy.get('#pass').type(data.password);// Ввели верный пароль
        cy.get('#loginButton').click();// Нажали войти
        cy.wait(5000);
        
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');//Текст виден пользователю                         

    })  
 it('Проверка восстановления пароля', function () {
    
       
        cy.get('#forgotEmailButton').click();// Нажали Забыли пароль?

        cy.get('#mailForgot').type(data.login);// Ввели почту для восстановления
        cy.get('#restoreEmailButton').click();// Нажали кнопку Отправить код
        
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');//Проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible');//Текст виден пользователю                         

    }) 

it('Ввод почты приводит к строчным буквам', function () {
        

        cy.get('#mail').type('GerMan@Dolnikov.ru');// Ввели логин нестрочными буквами
        cy.get('#pass').type(data.password);// Ввели верный пароль
        cy.get('#loginButton').click();// Нажали войти
        cy.wait(5000);
        
        cy.get('#messageHeader').contains('Авторизация прошла успешно');//Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');//Текст виден пользователю                         

    })
 })
 
 
// Найти поле ввода логина и ввести верный логин
// Найти поле ввода пароля и ввести верный пароль
// Найти кнопку Войти и нажать ее
// Проверить, что авторизация прошла успешно