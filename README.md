**Local deployment of the project:**.
To deploy, you need to perform the following steps:

1) Clone this project;
2) Go to the nextjs-socket.io folder and install the modules using the npm command and --force;
3) Run the fake backend API with the command json-server --watch db.json --port 4000;
4) Run the project in development mode with the npm run dev command;


### User Guide:
- When you first log in to the platform, the user is taken to the main page, which contains the following information:
1) The Navbar, which shows the current date and time, the number of users simultaneously on the platform, and the current language;
2) Sidebar - a list of links to go to the order and product pages;
3) Home page - the main structural unit of user interaction;

- The HomeScreen displays the name of the page.

- By clicking on the link with the corresponding page name (Products/Orders), the user is taken to this page.
