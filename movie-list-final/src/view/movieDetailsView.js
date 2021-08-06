import { html } from './../../node_modules/lit-html/lit-html.js';

import * as movieService from '../services/movieService.js'

const movieDetailsTemplate = ({
    title,
    description,
    img,
}) => html `
    <div class="movie-details" style="width: 18rem;">
        <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
        </div>
    </div>
`;

export function movieDetailsPage(ctx) {
    movieService.getOne(ctx.params.movieId)
        .then(movieData => {
            ctx.render(movieDetailsTemplate(movieData));
        })
}