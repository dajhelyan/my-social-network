import { registerUser } from '../lib/view-controller/view-controller-firebase.js'

export const registerView = () => {
    const registerTemplate = `
    <img src="../img/adorable-animal-blur-406014.jpg" class="logo">
    <h1>Social Pet</h1>
    <p>¡Bienvenidx, dogLover!</p>
    <input id="nameUser" placeholder="Nombres y apellido">
    <input id="email" type="text" placeholder="Email">
    <input id="password" type="password" placeholder="Password">
    <button id="btnLogIn" type="button">Log in</button>
    <p>¿Tienes una cuenta? Inicia sesión.</p>
    `
    const divElement = document.createElement('div');
    divElement.innerHTML = registerTemplate;

    const btnLogIn = divElement.querySelector('#btnLogIn');
    btnLogIn.addEventListener('click', () => {
        registerUser()
    })


    return divElement;
}