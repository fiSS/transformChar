# transformChar
#### Трансформация данных + заполнение пустго поля если получен ответ от сервера с пустым полем

###### если приходят ответ со стороны сервера без данных и необходимо поставить заглушку + нужно обрезать колличесво символов, чтобы помящелось все в определенный блок 2 способа

1: прямо в descrjption прописываем условие
```javascript
description: char.description ? char.description.length > 230 ? char.description.slice(0, 200) + '...' : char.description : 'No description',
```
2: через условные операторы, более грубый и кустарный
```javascript
if (char.description === "") {
            char.description = "Описания персонажа пока что нет";
          } else if (char.description.length > 200) {
            char.description = char.description.slice(0, 200) + '...'
          }
 ```

