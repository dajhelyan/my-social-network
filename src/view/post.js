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
        <div>
        <textarea id="" cols="30" rows="10" disable>${objPost.post}</textarea>
        <button id="editPost">Editar</button>
        </div>
        <span>
        <button id="like">like</button>
        <button id="btn-comentar">comentar</button>
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
    <header class="header">
        <input type="checkbox" class="btn-menu" id="btn-menu">
        <label class="label" for="btn-menu"><i class="fas fa-bars"></i></label>
            <nav class="menu">
                <ul>
                    <li><a href="...">Editar Perfil</a></li>
                    <li id="btnSignOut"><a href="">Cerrar sesión</a></li>
                </ul>
            </nav>
    </header>
    <div id="printUser">
    </div>
    <div class="container-new-post">
        <textarea id="newPost" placeholder="¿Que quieres compartir?"></textarea>
        <select id="state">
            <option value="public">Tus amigos</option>
            <option value="private">Solo yo</option>
        </select>
        <button id="publishPost" type="button">Compartir</button> 
    </div>
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