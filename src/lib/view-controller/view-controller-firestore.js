import { dataPost, deletePostId, updatePost } from '../controller/controller-firestore.js'

export const addPost = () => {
/*     event.preventDefault()
 */
    const newPost = document.querySelector('#newPost').value;
    if (newPost !== '') {
        dataPost(newPost) 
        newPost.innerHTML = '';
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
    updatePost(objPost.id, post)
}