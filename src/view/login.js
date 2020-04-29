import { userLogin, userSignInGoogle, userSignInFb } from '../lib/view-controller/view-controller-firebase.js' 

export const logInView = () => {
  const sectionElem = document.createElement("section");
  sectionElem.innerHTML = `
    <figure class="figure-logo">
      <img class="logo-social-pet" src="./assets/social-pet.png">
    </figure>
    <form>
      <div class="container-form">
        <h1>Social Pet</h1>
        <p>¡Bienvenidx, Pet Lover!</p>
        <input id="user-email" type="email" placeholder="Email">
        <input id="user-password" type="password" placeholder="Password">
        <button class="btn-login" id="btn-login" type="button">Log in</button>
        <span><p id="messageError"></p></span>
        <p class="font-size">O bien ingresa con...</p>
        <div class="container-icons">
          <img class="icon" id="btn-sign-in-google" src="./assets/001-google.png">
          <img class="icon" id="btn-sign-in-fb" src="./assets/002-facebook.png" >
        </div>
        <p class="font-size">¿No tienes una cuenta? <a href="#/register">Regístrate</a></p>
      </div>
    </form>
    `
    const btnLogIn = sectionElem.querySelector('#btn-login');
    btnLogIn.addEventListener('click', () => {
      const userEmail = document.querySelector('#user-email').value;
      const userPassword = document.querySelector('#user-password').value;
      userLogin(userEmail, userPassword)
    });
  
    const btnSignInGoogle = sectionElem.querySelector('#btn-sign-in-google');
    btnSignInGoogle.addEventListener('click', () => {
      userSignInGoogle()
    });
  
    const btnSignInFb = sectionElem.querySelector('#btn-sign-in-fb');
    btnSignInFb.addEventListener('click', () => {
      userSignInFb()
    });

  return sectionElem;
}