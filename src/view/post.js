import { userSignOut } from '../lib/view-controller/view-controller-firebase.js';
import { viewUser } from './info-user.js'
import { addPost } from '../lib/view-controller/view-controller-firestore.js'

export const postView = (objUser) => {
    const postTemplate = `
    <div id="printUser">
    </div>
    <input id="newPost" placeholder="¿Que quieres compartir?">
    <button id="publishPost" type="button">Compartir</button> 
    <button id="btnSignOut" type="button">Cerrar sesión</button>
    `
    const divElement = document.createElement('div');
    divElement.innerHTML = postTemplate;
    const printUser = divElement.querySelector('#printUser')
    printUser.appendChild(viewUser(objUser))

    const publishPost =  divElement.querySelector('#publishPost');
    const post = divElement.querySelector('#newPost')

    publishPost.addEventListener('click', () => {
        addPost(post)
    })

    const btnSignOut = divElement.querySelector('#btnSignOut');
    btnSignOut.addEventListener('click', userSignOut)

    return divElement;
}