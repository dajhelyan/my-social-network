import { userSignOut } from '../lib/view-controller/view-controller-firebase.js';
 
export const postView = () => {
    const postTemplate = `
    <input id="createNewPost" placeholder="¿Que quieres compartir?">
    <button id"publishPost" type="button">Compartir</button> 
    <button id="btnSignOut" type="button">Cerrar sesión</button>
    `
    const divElement = document.createElement('div');
    divElement.innerHTML = postTemplate;

    const btnSignOut = divElement.querySelector('#btnSignOut');
    btnSignOut.addEventListener('click', userSignOut)

    return divElement;
}