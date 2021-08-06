import { html } from './../../node_modules/lit-html/lit-html.js';

import * as movieService from '../services/movieService.js'
import { movies } from '../services/api.js';

const movieCardTemplate = ({
    _id,
    title,
    img
}) => html `
    <li class="movie-list-item" style="width: 18rem;">
        <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <a href="/movies/${_id}" class="btn btn-primary">Go somewhere</a>
        </div>
    </li>
`;

const moviesTemplate = (movies) => html `
    <h3>Movie Page</h3>

    <ul class="movie-list">
        ${movies.map(x => movieCardTemplate(x))}
    </ul>
`;

export function moviePage(ctx) {
    movieService.getAll()
        .then(movies => {
            ctx.render(moviesTemplate(movies));
        });
}