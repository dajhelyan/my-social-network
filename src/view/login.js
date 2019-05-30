import { registerPage, logInUser, userSignInGoogle, userSignInFb } from '../lib/view-controller/view-controller-firebase.js' 

export const logInView = () => {
    const logInTemplate = `
    <img src="../img/adorable-animal-blur-406014.jpg" class="logo" width="100%";
    >
    <h1>Social Pet</h1>
    <p>¡Bienvenidx, dogLover!</p>
    <input id="emailExisting" type="text" placeholder="Email">
    <input id="passwordExisting" type="password" placeholder="Password">
    <button id="btnLogIn" type="button">Log in</button>
    <p>O bien ingresa con...</p>
    <img id="btnSigInGoogle" src="../img/001-google.png">
    <img id="btnSingInFb" src="../img/002-facebook.png" >
    <p>¿No tienes una cuenta?</p>
    <button type="button" id="btnUserRegister">Regístrate.</button>
    `
    const divElement = document.createElement('div');
    divElement.innerHTML = logInTemplate;
    divElement.classList.add('show');

    const btnUserRegister = divElement.querySelector('#btnUserRegister');
    btnUserRegister.addEventListener('click', () => {
        registerPage()
    })

    const btnLogIn = divElement.querySelector('#btnLogIn');
    btnLogIn.addEventListener('click', () => {
        logInUser()
    })

    const btnSigInGoogle = divElement.querySelector('#btnSigInGoogle');
    btnSigInGoogle.addEventListener('click', () => {
        userSignInGoogle()
    })
    
    const btnSigInFb = divElement.querySelector('#btnSingInFb')
    btnSigInFb.addEventListener('click', () => {
        userSignInFb()
    })

    return divElement;
}