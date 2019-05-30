import { userSignOut } from '../lib/view-controller/view-controller-firebase.js';
import { viewUser } from './info-user.js'

export const postView = (objUser) => {
    const postTemplate = `
    <div id="printUser">
    </div>
    <input id="createNewPost" placeholder="¿Que quieres compartir?">
    <button id"publishPost" type="button">Compartir</button> 
    <button id="btnSignOut" type="button">Cerrar sesión</button>
    `
    const divElement = document.createElement('div');
    divElement.innerHTML = postTemplate;
    const printUser = divElement.querySelector('#printUser')
    printUser.appendChild(viewUser(objUser))

    const btnSignOut = divElement.querySelector('#btnSignOut');
    btnSignOut.addEventListener('click', userSignOut)

    return divElement;
}