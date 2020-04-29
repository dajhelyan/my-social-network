import { registerUser } from '../lib/view-controller/view-controller-firebase.js'

export const registerView = () => {
  const sectionElem = document.createElement("section");
  sectionElem.innerHTML = `
    <figure class="figure-logo">
      <img class="logo-social-pet" src="../img/social-pet.png" alt="Logo social pet">
    </figure>
    <form>
      <div class="container-form">
        <h1>Social Pet</h1>
        <p>¡Bienvenidx, Pet Lover!</p>
        <input id="name-user" placeholder="Nombres y apellidos">
        <input id="email" type="email" placeholder="Email">
        <input id="password" type="password" placeholder="Password">
        <span><p id="messageError"></p></span>
        <button id="btn-register" class="btn-register" type="button">registrarse</button>
        <p>¿Tienes una cuenta? <a href="#/login">Inicia sesión.</a></p>
      </div>
    </form>
    `

    const btnRegister = sectionElem.querySelector('#btn-register');
    btnRegister.addEventListener('click', () => {
      const nameUser = document.querySelector('#name-user').value;
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;
      registerUser(nameUser, email, password)
    })

  return sectionElem;
}