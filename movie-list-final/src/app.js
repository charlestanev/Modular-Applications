import { html } from './../node_modules/lit-html/lit-html.js';
import page from './../node_modules/page/page.mjs';

import { homePage } from './view/homeView.js';
import { moviePage } from './view/movieView.js';
import { loginPage } from './view/loginView.js';
import { renderMiddleware } from './middlewares/renderMiddleware.js';
import { movieDetailsPage } from './view/movieDetailsView.js';
import { authMiddleware } from './middlewares/authMiddleware.js';

page(authMiddleware);
page(renderMiddleware);

page('/', homePage);
page('/login', loginPage);
page('/movies', moviePage);
page('/movies/:movieId', movieDetailsPage);

page.start();