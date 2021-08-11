import page from "./node_modules/page/page.mjs";
import homePage from "./pages/home/homePage.js";
import { LitRenderer } from "./rendering/litRenderer.js";

let appElement = document.getElementById('app');
let navElement = document.getElementById('titlebar');
let modalElement = document.getElementById('modal');

let litRenderer = new LitRenderer();

let navRenderHandler = litRenderer.createRenderHandler(navElement);
let appRenderHandler = litRenderer.createRenderHandler(appElement);

homePage.initialize(page, appRenderHandler);

page('/', '/home');
page('/index.html', '/home');

// routes
page('/home', homePage.getView);

page.start();