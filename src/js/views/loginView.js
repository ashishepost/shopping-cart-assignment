import {
  elements
} from './base';

export const renderLogin = () => {
  const markup = `
  <section class="login">
    <div class="login__left">
      <div class="login__information">
        <h3 class="login__heading">Login</h3>
        <span class="login__heading">Get Access to your Orders, Wishlists, & Recommendations</span>
      </div>

    </div>
    <div class="login__right">
        <form class="form">
          <div class="form__row">
            <label for="login__input--username">Email</label>
              <input class="form__input login__input--username" id="login__input--username" type="email" autofocus required>
          </div>
          <div class="form__row">
            <label for="login__input--password">Password</label>
              <input class="form__input login__input--password" id="login__input--password" type="password" required>
          </div>
          <div class="form__row">
            <button class="form__submit login__input--submit">Submit</button>
          </div>
          <div class="form__row">
          <label class="login__remember">
            <input type="checkbox" name="remember">Remember me</label>
          </div>
        </form>
  </section>
    `;
  elements.landingPage.mainContent.innerHTML = markup;
  addElements();
};

const addElements = () => {
  elements.loginPage = {
    userForm: document.querySelector('.' + 'login__form'),
    userNameInput: document.querySelector('.' + 'login__input--username'),
    passwordInput: document.querySelector('.' + 'login__input--password'),
    submitButton: document.querySelector('.' + 'login__input--submit')
  };
};
