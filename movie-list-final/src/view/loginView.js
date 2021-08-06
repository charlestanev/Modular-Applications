import { html } from './../../node_modules/lit-html/lit-html.js';

import * as authService from './../services/authService.js';

const loginTemplate = (onSubmit) => html `
    <div class="login-container">
        <h3>Login Page</h3>
    
        <form @submit=${onSubmit}>
            <div class="mb-3 row">
                <label for="email" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="email" name="email">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="password" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="password" name="password">
                </div>
            </div>
            <div class="mb-3 row">
                <div style="width: 200px;">
                    <input type="submit" class="form-control">
                </div>
            </div>
        </form>
    </div>
`;

export function loginPage(ctx) {
    const onLoginSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let email = formData.get('email').trim();
        let password = formData.get('password').trim();

        authService.login(email, password)
            .then(() => {
                ctx.page.redirect('/');
            });
    }

    ctx.render(loginTemplate(onLoginSubmit));
}