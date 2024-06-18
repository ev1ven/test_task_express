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
// Когда сервер успешно запущен, выводим "Hello, World! в консоль
app.listen(PORT, () => {
    console.log("Hello, World!")
})
