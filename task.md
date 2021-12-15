# Letter Frequency App
​
## Тестовое задание для React-разработчика — компонент показывающий частоту отображения символов в тексте
​
### Описание задачи
​
Необходимо сделать одностраничное приложение для подсчета частоты букв в тексте, введенного пользователем в поле ввода. Результат-статистику необходимо вывести в виде таблицы, где должны быть отображены следующие колонки:
​
- Символ
- Частота использования
- Процентное соотношение количества совпадений к общему количеству
​
### Пример таблицы
​
| Letter | Count | Frequency |
| - | - | - |
| g | 2 | 50.0% |
| d | 1 | 25.0% |
| o | 1 | 25.0% |
​
### Технические требования
​
1. Компонент должен включать в себя **текстовое поле**, в которое пользователь может вводить/вставлять текст, **таблицу** с выведенной статистикой, которая отсортирована по количеству совпадений (от большего к меньшему)
2. Включать в таблицу только символы латинского алфавита и числа от 0 до 9.
​
### Дополнительные Задачи
​
1. Отобразить столбцовый график для 5 первых строк из таблицы, используя одну из популярных библиотек для отрисовки графиков (например, **chart.js**)
2. Добавить функцию сортировки таблицы (от меньшего к большему и наоборот) по алфавиту (первый столбец), по количеству (столбец #2). Смена режимы сортировки должна осуществляться нажатием на заголовок столбца.
3. Добавить специальную кнопку под текстовым полем, при нажатии на которую, текстовое поле будет заполняться случайно генерируемым текстом (рекомендуется взять библиотеку типа [lorem-ipsum](https://www.npmjs.com/package/lorem-ipsum))
​
### Приветствуется использование:
​
- Станадртных функций **Array.prototype**: map, filter, reduce, sort.
- Регулярных выражений
- Typescript
- Функциональных компонентов и React hooks