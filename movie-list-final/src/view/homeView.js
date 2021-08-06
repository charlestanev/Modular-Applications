import { html } from './../../node_modules/lit-html/lit-html.js';

let homeTemplate = () => html `
    <section>
        <h2>Home Page</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, vel?</p>
    </section>
`;

export function homePage(ctx) {
    ctx.render(homeTemplate());
}