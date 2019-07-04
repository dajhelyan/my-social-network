import { registerUser } from '../lib/view-controller/view-controller-firebase.js'

export const registerView = () => {
    const registerTemplate = `
    <div>
        <img src="../img/social-pet.png" class="logo" >
        <div>
        <h1>Social Pet</h1>
    <p>¡Bienvenidx, dogLover!</p>
    <input id="nameUser" placeholder="Nombres y apellido">
    <input id="email" type="text" placeholder="Email">
    <input id="password" type="password" placeholder="Password">
    <p id="messageError"></p>
    <button id="btnLogIn" type="button">Register</button>
    <p>¿Tienes una cuenta?<a href="#/login">Inicia sesión.</a></p>
    `
    const divElement = document.createElement('div');
    divElement.innerHTML = registerTemplate;

    const btnLogIn = divElement.querySelector('#btnLogIn');
    btnLogIn.addEventListener('click', () => {
        registerUser()
    })


    return divElement;
}