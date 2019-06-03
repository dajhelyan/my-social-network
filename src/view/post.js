import { userSignOut } from '../lib/view-controller/view-controller-firebase.js';
import { viewUser } from './info-user.js'
import { addPost, deletePost } from '../lib/view-controller/view-controller-firestore.js'

const printPost = (objPost) => {
    const divPostElement = document.createElement('div');
    divPostElement.innerHTML = `
        <span class="nameUser">
        <span>publicado por ${objPost.name}</span>
        </span>
        <button data-id="delete${objPost.id}">delete</button>
        <div>${objPost.post}</div>
        <span>
        <button id="btnImg">imagen</button>
        <button id="btncompartir">compartir</button>
        </span>
    `
    // agegando evento al boton delete
    // haciendo un querySelector por atributo
    const postDelete = divPostElement.querySelector(`[data-id="delete${objPost.id}"]`)
    postDelete.addEventListener('click', () => {
        deletePost(objPost)
    });
    
    return divPostElement
}

export const postView = (objUser, post) => {
    const postTemplate = `
    <div id="printUser">
    </div>
    <textarea id="newPost" placeholder="¿Que quieres compartir?"></textarea>
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

    const btnpublishPost = divElement.querySelector('#publishPost');

    const ul = divElement.querySelector('#list-post')
    post.forEach(note => {
        // console.log(note, 'h')
        ul.appendChild(printPost(note))
    });

    /* const post = divElement.querySelector('#newPost') */

    btnpublishPost.addEventListener('click', addPost)

    const btnSignOut = divElement.querySelector('#btnSignOut');
    btnSignOut.addEventListener('click', userSignOut)

    return divElement;
}