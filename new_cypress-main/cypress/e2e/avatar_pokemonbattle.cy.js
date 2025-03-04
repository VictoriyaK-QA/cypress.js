

describe('Покупка аватара', function () {                                       // название набора тестов
    it('покупка нового аватара для тренера', function () {                       // название теста
         cy.visit('https://pokemonbattle.ru/');                                  // переходим на сайт https://pokemonbattle.ru/
         cy.get(':nth-child(1) > .auth__input').type('kulevavictoriya@ya.ru');    // Найти поле ввода Почта и ввести верный email
         cy.get('#password').type('Nikita08.04.2004');                  // Найти поле ввода Пароль и ввести верный пароль
         cy.get('.auth__button').click();                                // Найти кнопку Войти и нажать ее
         cy.get('.header__container > .header__id').click();     // Найти кнопку ID своего тренера и нажать на нее  
         cy.get('[href="/shop"]').click();  // Найти кнопку Смена аватара и нажать на нее 
         cy.get('.available > button').first().click({ force: true }); // нажать на кнопку купить активного аватара
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); // Найти поле Номер и ввести 4620869113632996  
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); // Найти поле ввода Срок и ввести 1225
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');// Найти поле ввода Код и ввести 125
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('VIKTORIA KULEVA'); // Найти поле ввода Имя и ввести VIKTORIA KULEVA 
         cy.get('.pay-btn').click();  // Найти кнопку Оплатить и нажать ее   
         cy.get('#cardnumber').type('56456'); // Найти поле ввода Код из смс и ввести 56456
         cy.get('.payment__submit-button').click();//  Найти кнопку Отправить и нажать ее
         cy.get('.payment__padding').contains('Покупка прошла успешно'); // Проверяем наличие текста Покупка прошла успешно
         cy.get('.payment__padding').should('be.visible'); // текст виден пользолвателю
         cy.get('.success__image').should('be.visible');   //Зеленая галочка видна пользователю
            });
 })

    
                  

