import { dataPost, deletePostId, updatePost } from '../controller/controller-firestore.js'

export const addPost = (user) => {
    const state = document.querySelector('#state').value;
    const newPost = document.querySelector('#newPost').value;
    
    if (newPost !== '') {
        dataPost(newPost, state, user) 
        // newPost.innerHTML = '';
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

export const postUpdate = (objPost, post) => {
    if (condition) {
        
    } else {
        
    }
    updatePost(objPost.id, post)
}