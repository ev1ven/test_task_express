# Документация для приложения на Express.

### Описание
Это простое веб-приложение на Express.js, которое обслуживает три HTML-страницы: главную страницу, страницу "О нас" и страницу с сообщением "Страница не найдена".

### Структура файлов
+ index.js: Основной файл сервера Node.js, который использует 
Express для маршрутизации и отправки HTML-страниц.

+ static/index.html: Главная страница, которая приветствует пользователя и предоставляет ссылки на другие страницы.

+ tatic/about.html: Страница "О нас", содержащая информацию о приложении.

+ static/nonexistent.html: Страница с сообщением "Страница не найдена".
## index.js
```javascript 
// Импортируем модуль 'express', который является фреймворком для веб-приложений на Node.js
import express from 'express'

// Импортируем модуль 'path', который предоставляет утилиты для работы с путями файлов и каталогов
import path from 'path'

// Определяем текущий каталог как абсолютный путь
const __dirname = path.resolve()

// Устанавливаем номер порта, который указан в переменной окружения 'PORT', или по умолчанию 3000, если 'PORT' не определён
const PORT = process.env.PORT ?? 3000

// Создаём экземпляр приложения Express
const app = express()

// Определяем маршрут для корневого URL ('/')
// Когда поступает GET-запрос на корневой URL, отправляем файл 'index.html', находящийся в каталоге 'static'
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
})

// Определяем маршрут для URL '/about'
// Когда поступает GET-запрос на URL '/about', отправляем файл 'about.html', находящийся в каталоге 'static'
app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', 'about.html'))
})

// Определяем маршрут для URL '/nonexistent'
// Когда поступает GET-запрос на URL '/nonexistent', отправляем файл 'nonexistent.html', находящийся в каталоге 'static'
app.get('/nonexistent', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', 'nonexistent.html'))
})

// Запускаем сервер и начинаем прослушивать указанный порт
// Когда сервер успешно запущен, выводим "Hello, World!" в консоль
app.listen(PORT, () => {
    console.log("Hello, World!")
})
```
## index.html
```javascript 
<!DOCTYPE html>
<html>
    <head>
        <title>Простое приложение Express</title>
    </head>
    <body>
        <h1>Добро пожаловать в простое приложение Express!</h1>
        <a href="/about">Переход на about</a>
        <br>
        <a href="/nonexistent">Переход на nonexistent</a>
    </body>
</html>

```
## about.html
```javascript 
<!DOCTYPE html>
<html>
    <head>
        <title>Простое приложение Express</title>
    </head>
    <body>
        <h1>Это простое приложение на Express.js</h1>
    </body>
</html>
```
## nonexistent.html
```javascript 
<!DOCTYPE html>
<html>
    <head>
        <title>Простое приложение Express</title>
    </head>
    <body>
        <h1>Страница не найдена</h1>
    </body>
</html>

```
## Запуск приложения

+ Убедитесь, что у вас установлен Node.js.

+ Установите зависимости, запустив команду npm install express.

+ Запустите сервер, выполнив команду node index.js.

+ Откройте браузер и перейдите по адресу http://localhost:3000, чтобы увидеть главную страницу.

+ Используйте ссылки на главной странице, чтобы перейти на другие страницы.