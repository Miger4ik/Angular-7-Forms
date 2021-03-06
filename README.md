# Angular-7-Forms

## Валідація форм

* ### Створення форми
1. Для початку нам потрібно імпортувати 'FormsModule' та 'ReactiveFormsModule' в app.module.ts для коректної роботи з формами
2. Нам потрібно прив'язати нашу форму до скрипту. Для цього створюємо змінну `form` типу 'FormGroup'
3. Щоб передати форму в змінну яку ми створили потрібно в тезі `form` додати директиву `[formGroup]="form"`
4. Всі кнопки в формі повинні мати `type="button"` якщо це звичайна кнопка і `type="submit"` якщо це кнопка яка відправляє форму на обробку
5. Також нам потрібно описати директиву `(ngSubmit)="submit()"` де `submit()` це метод який буде обробляти кнопку з `type="submit"`
* ### Добавлення контролерів на поля форми
1. Контролери на полях потрібні для того що б коректно їх обробляти
2. Для початку в конструктор `this.form = new FormGroup({})` ми маємо передати об'єкт з полями які ми будемо контролювати `this.form = new FormGroup({email: new FormControl(''), password: new FormControl(null)});` де першим параметром ми передаємо стандартне значення поля
3. Щоб прив'язати контролер до поля також потрібно в тегу `input` передати параметр `formControlName` де вказати ім'я яке ми передавали в `FormGroup`
4. Тепер ми можемо обробляти значення які приходять нам з форми в скрипті до прикладу таким чином `const formData = {...this.form.value}`
* ### Добавлення валідаторів
1. Конструктор `FormControl` другим параметром приймає валідатор або масив валідаторів
2. Потрібно передати всі необхідні валідатори в конструктор `FormControl` ваших полів
3. Потрібно робити перевірку чи поля валідні на приклад за допомогою умови `if (this.form.valid)` в скрипті, або можна робити кнопку "Submit" неактивною за допомогою директиви `[disabled]="form.invalid"` де `form` це наша змінна `FormGroup`
* ### Візуалізація стану поля(валідне/не валідне)
1. Якщо на поле був доданий валідатор це означає що Angular буде слідкувати за ним і автоматично додавати та обновляти на ньому CSS класи як стан
2. Для того що б якось реагувати на валідність полів ми можемо обробляти дані класи, наприклад за допомогою CSS
3. Нам потрібно слідкувати за класами `ng-invalid`, `ng-valid`, та `ng-touched`
4. Класи `ng-invalid` та `ng-valid` обновляються кожен раз коли обновляється поле форми, а його значення міняється в залежності від того чи поле є валідним
5. Клас `ng-touched` появляється лише тоді коли користувач якось взаємодіяв з полем, його ми перевіряємо для того що б не міняти стан поля до того як користувач вніс свої дані
* ### Показ стану помилок
1. За допомогою `*ngIf` ми можемо обробляти статус поля і показувати помилки користувачу
2. Якщо HTML елементу задати `*ngIf="form.get('email').invalid && form.get('email').touched"` тоді цей елемент буде показуватися лише тоді коли з полем взаємодіяв користувач та в ньому є помилка
3. Також можна обробляти кожен валідатор окремо за допомогою масиву errors в якому описані помилки поля, наприклад `*ngIf="form.get('email').errors.required"` буде слідкувати лише за валідатором який робить поле обов'язковим
* ### Групування форм
1. При створенні форми за допомогою `FormGroup` ми можемо в середині неї створювати вкладені `FormGroup` для того що б логічно розділяти саму форму та дані які з неї буде отримано на окремі об'єкти
2. Для того що б розділити форму на групи потрібно описати HTML параметри `formGroupName="address"` для батьківського елементу групи та `formControlName="country"` для самих полів
