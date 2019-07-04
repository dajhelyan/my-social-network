import { userSignOut } from '../lib/view-controller/view-controller-firebase.js';
import { viewUser } from './info-user.js'
import { addPost, deletePost } from '../lib/view-controller/view-controller-firestore.js'
import { getUser } from '../lib/controller/controller-firebase.js'
import { updatePost } from '../lib/controller/controller-firestore.js'


const printPost = (objPost) => {
    const user = getUser();
    const divPostElement = document.createElement('div');
    // console.log(user.uid )
    // console.log(objPost)
    divPostElement.innerHTML = `
        <span class="nameUser">
            <span>publicado por ${objPost.name}</span>
        </span>
        <textarea id="posts-user${objPost.id}" disabled>${objPost.post}</textarea>
        <div id="btn-edit-user">
        ${objPost.uid === user.uid ? `<button type="submit" id="delete${objPost.id}" data-id="delete${objPost.id}">delete</button>
        <button type="button" id="btn-edit${objPost.id}">Editar</button>
        <select id="edit-privacy${objPost.id}" disabled>
            <option value="public">Mis amigos</option>
            <option value="private">Solo yo</option>
        </select>`: ""}
        <button>like</button> 
        <button>comentar</button>
        </div>
    `
    if (objPost.uid === user.uid) {
        const postDelete = divPostElement.querySelector(`#delete${objPost.id}`)
        postDelete.addEventListener('click', () => {
            deletePost(objPost)
        });

        const editPost = divPostElement.querySelector(`#btn-edit${objPost.id}`)
        const textareaEdit = divPostElement.querySelector(`#posts-user${objPost.id}`)
        const stateEdit = divPostElement.querySelector(`#edit-privacy${objPost.id}`)

        editPost.addEventListener('click', () => {
            return toggleDisabledTextareaEdit(objPost.id, textareaEdit, stateEdit, editPost)
        })
    }
    // agegando evento al boton delete
    // haciendo un querySelector por atributo
    return divPostElement
}

export const toggleDisabledTextareaEdit = (objPost, textareaEdit, stateEdit, btn) => {
    if (textareaEdit.disabled && stateEdit.disabled) {
        textareaEdit.disabled = false;
        stateEdit.disabled = false;
        btn.textContent = "Guardar"
    } else {
        textareaEdit.disabled = true;
        stateEdit.disabled = true;
        btn.textContent = "Editar"
        return updatePost(objPost, textareaEdit.value, stateEdit.value);
    }
}

export const postView = (objUser, post) => {
    const postTemplate = `
    <header>
        <input type="checkbox" id="btn-menu">
        <label for="btn-menu"><i class="fas fa-bars"></i></label>
        <nav class="menu">
            <ul>
                <li><a>Editar perfil</a></li>
                <li><a id="btnSingOut">Cerrar sesión</a></li>
            </ul>    
        </nav>
    </header>
    <div id="printUser">
    </div>
    <div class="container-publish">
        <textarea class="textarea-create-post" id="newPost" placeholder="¿Que quieres compartir?"></textarea>
        <select id="stateUser">
            <option value="public"><span><i class="fas fa-user-friends"></i></span></option>
            <option value="private"><span><i class="fas fa-user"></i><span></option>
        </select>
        <button class="btn-publish" id="publishPost" type="button">Compartir</button> 
    </div>
    <!--printPost-->
    <section>
        <ul id="list-post">
        </ul>
    </section>
    `
    const divElement = document.createElement('section');
    divElement.innerHTML = postTemplate;
    // <button id="btnSignOut" type="button">Cerrar sesión</button>
    const printUser = divElement.querySelector('#printUser')
    printUser.appendChild(viewUser(objUser))

    const btnpublishPost = divElement.querySelector('#publishPost');

    const ul = divElement.querySelector('#list-post')
    post.forEach(note => {
        // console.log(note, 'h')
        ul.appendChild(printPost(note))
    });

    /* const post = divElement.querySelector('#newPost') */

    btnpublishPost.addEventListener('click', (event) => {
        event.preventDefault()
        addPost(objUser)
    })

    const btnSignOut = divElement.querySelector('#btnSingOut');
    btnSignOut.addEventListener('click', userSignOut)
    
    return divElement;
}