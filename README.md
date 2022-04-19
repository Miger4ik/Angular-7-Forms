# Angular-7-Forms

## Валідація форм

* ### Створення форми
1. Для початку нам потрібно імпортувати [FormsModule](https://angular.io/api/forms/FormsModule) та [ReactiveFormsModule](https://angular.io/api/forms/ReactiveFormsModule) в app.module.ts для коректної роботи з формами
2. Нам потрібно прив'язати нашу форму до скрипту. Для цього створюємо змінну `form` типу [FormGroup](https://angular.io/api/forms/FormGroup)
3. Щоб передати форму в змінну яку ми створили потрібно в тезі `form` додати директиву `[formGroup]="form"`
4. Всі кнопки в формі повинні мати `type="button"` якщо це звичайна кнопка і `type="submit"` якщо це кнопка яка відправляє форму на обробку
5. Також нам потрібно описати директиву `(ngSubmit)="submit()"` де `submit()` це метод який буде обробляти кнопку з `type="submit"`
