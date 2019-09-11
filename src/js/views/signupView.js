import {
  elements
} from './base'

export const renderSignup = () => {
  const markup = `
  <section class="register">
    <div class="register__left">
      <div class="register__information">
        <h3 class="register__heading">Signup</h3>
        <span class="register__heading">We do not share your personal details with anyone</span>
      </div>
    </div>
    <div class="register__right">
        <form class="form">
          <div class="form__row">
            <label for="register__input--firstname">First Name</label>
            <input class="form__input register__input--firstname" id="register__input--firstname" type="text" autofocus required>
          </div>
          <div class="form__row">
            <label for="register__input--lastname">Last Name</label>
            <input class="form__input register__input--lastname" id="register__input--lastname" type="text" required>
          </div>
          <div class="form__row">
            <label for="form__input--email">Email</label>
            <input class="form__input register__input--email" id="register__input--email" type="email" required>
          </div>
          <div class="form__row">
            <label for="register__input--password">Password</label>
            <input class="form__input register__input--password" id="register__input--password" type="password" required>
          </div>
          <div class="form__row">
            <label for="register__input--confirm-password">Password</label>
            <input class="form__input register__input--confirm-password" id="register__input--confirm-password" type="password" required>
          </div>
          <div class="form__row">
            <label for="register__input--captcha">Please Enter Captcha</label>
            <div>
              <img src="https://www.phpcaptcha.org/securimage/securimage_show.php?namespace=captcha_one&0.6283334294085949">
            </div>
            <input class="form__input register__input--captcha" id="register__input--captcha" type="text" required>
          </div>
          <div class="form__row">
          <button class="form__submit register__input--submit">Submit</button>
          </div>
        </form>
  </section>
    `
  elements.landingPage.mainContent.innerHTML = markup
  addElements()
}

const addElements = () => {
  elements.signUpPage = {
    userForm: document.querySelector('.' + 'form'),
    firstNameInput: document.querySelector('.' + 'register__input--firstname'),
    lastNameInput: document.querySelector('.' + 'register__input--lastname'),
    email: document.querySelector('.' + 'register__input--email'),
    password: document.querySelector('.' + 'register__input--password'),
    confirmPassword: document.querySelector('.' + 'register__input--confirm-password'),
    submitButton: document.querySelector('.' + 'register__input--submit')
  }
}
