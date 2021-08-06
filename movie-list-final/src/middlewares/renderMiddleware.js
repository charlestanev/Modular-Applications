import { render } from './../../node_modules/lit-html/lit-html.js';
import { renderNavigation } from './../view/navigationView.js'

let rootElement = document.querySelector('.root');
let navigationElement = document.querySelector('.navigation');

const contextRender = templateResult => {
    render(templateResult, rootElement);
}

export function renderMiddleware(ctx, next) {
    render(renderNavigation(ctx), navigationElement);
    // console.log(ctx);
    ctx.render = contextRender;
    next();
}