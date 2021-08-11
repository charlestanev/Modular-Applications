import { render } from "./../node_modules/lit-html/lit-html.js";

export class LitRenderer {
    constructor() {}

    createRenderHandler(domElement) {
        return function(templateResult) {
            render(templateResult, domElement);
        }
    }
}