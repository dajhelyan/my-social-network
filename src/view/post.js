import { userSignOut } from '../lib/view-controller/view-controller-firebase.js';
import { viewUser } from './info-user.js'
import { addPost } from '../lib/view-controller/view-controller-firestore.js'

const printPost = (objPost) => {
    const divPostElement = document.createElement('div');
    divPostElement.innerHTML = `
        <span class="nameUser">
        <span>publicado por ${objPost.name}</span>
        </span>
        <div>${objPost.post}</div>
        <span>
        <button id="btnImg">imagen</button>
        <button id="btncompartir">compartir</button>
        </span>
    `
return divPostElement
}

export const postView = (objUser, post) => {
    const postTemplate = `
    <div id="printUser">
    </div>
    <input id="newPost" placeholder="¿Que quieres compartir?">
    <button id="publishPost" type="button">Compartir</button> 
    <button id="btnSignOut" type="button">Cerrar sesión</button>
    <!--printPost-->
    <section>
    <ul id="list-post">
    </ul>
    </section>
    `
    const divElement = document.createElement('div');
    divElement.innerHTML = postTemplate;

    const printUser = divElement.querySelector('#printUser')
    printUser.appendChild(viewUser(objUser))

    const btnpublishPost =  divElement.querySelector('#publishPost');

    const ul = divElement.querySelector('#list-post')
    post.forEach(note => {
        console.log(note, 'h')
        ul.appendChild(printPost(note))
    });

    /* const post = divElement.querySelector('#newPost') */

    btnpublishPost.addEventListener('click', addPost)

    const btnSignOut = divElement.querySelector('#btnSignOut');
    btnSignOut.addEventListener('click', userSignOut)

    return divElement;
}