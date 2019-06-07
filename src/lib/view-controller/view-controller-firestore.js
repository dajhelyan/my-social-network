import { dataPost, deletePostId, updatePost } from '../controller/controller-firestore.js'

export const addPost = (objUser) => {
    const newPost = document.querySelector('#newPost').value;
    const state = document.querySelector('#stateUser').value;

    if (newPost !== '') {
        dataPost(objUser, newPost, state) 
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

/* export const postUpdate = (objPost, state) => {
    updatePost(objPost.id,post, state)
} */