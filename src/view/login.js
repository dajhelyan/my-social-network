import { logInUser, userSignInGoogle, userSignInFb } from '../lib/view-controller/view-controller-firebase.js' 

export const logInView = () => {
    const logInTemplate = `
    <div class="img">
        <img src="../img/social-pet.png" class="logo" width="100%">
    </div>
    <div class="border-box m-auto form">
        <div class="form-container-items">
        <div class="txt-align-center tittles">
            <h1 class="tittle">Social Pet</h1>
            <p>¡Bienvenidx, Pet Lover!</p>
        </div>
        <div class="container-inputs">
            <input id="emailExisting" type="text" placeholder="Email">
            <input id="passwordExisting" type="password" placeholder="Password">
            <button class="btn-log-in" id="btnLogIn" type="button">Log in</button>
        </div>
        <div class="font-icon">
            <p id="messageError"></p>
            <p class="font-size">O bien ingresa con...</p>
            <img class="icon" id="btnSigInGoogle" src="../img/001-google.png">
            <img class="icon" id="btnSingInFb" src="../img/002-facebook.png" >
            <p class="font-size">¿No tienes una cuenta?<a href="#/register">Regístrate</a></p>
        </div>
        </div>
    </div>
    `
    const divElement = document.createElement('div');
    divElement.innerHTML = logInTemplate;
    divElement.classList.add('height-vh');


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