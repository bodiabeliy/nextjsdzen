**Локальне розгортання проекту:**
Для розгортання необхідно виконати наступні дії:

1) клонувати даний проект;
2) Перейти в папку nextjs-socket.io та встановити модулі за допомогою команди npm і --force;
3) Запустити фейкове бекенд API командою json-server --watch db.json --port 4000;
4) Запустити проект в режимі девелопменту командою npm run dev;


### User Guide:
- При першому вході на платформу, користувач потрапляє на головну сторінку, на якій розміщено наступну інформацію:
1) Навігаційна панель (Navbar), на якій зображено поточну дату та час, кількість користувачів що одночасно знаходяться на платфомі та надпис поточної мови;
2) Бокова панель (Sidebar) - список посилань для переходу на сторінки замовлень та продуктів;
3) Головна сторінка - основний структурний блок взаємодії з користувачем;

- На голоіній сторінці (HomeScreen) представлено назву даної сторінки.

- При натисканні на посилання з відповідною назвою сторінки (Products/Orders) - користувач потрапляє на дану сторінку.

