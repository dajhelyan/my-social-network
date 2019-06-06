import { dataPost, deletePostId, updatePost } from '../controller/controller-firestore.js'

export const addPost = (event) => {
    event.preventDefault()
 const user = firebase.auth().currentUser;
    console.log(user.displayName)
    const newPost = document.querySelector('#newPost').value;
    const state = document.querySelector('#stateUser').value;

    if (newPost !== '') {
        dataPost(user, newPost, state) 
    } else {
        console.log('error')
    }
}

export const deletePost = (objPost) => {
    const user = firebase.auth().currentUser;
    if (objPost.uid === user.uid) {
        deletePostId(objPost.id);
    } else {
        console.log('error')
    }
    
}

export const postUpdate = (objPost, state) => {
    updatePost(objPost.id, state)
    
}