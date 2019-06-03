import { dataPost, deletePostId } from '../controller/controller-firestore.js'

export const addPost = () => {
/*     event.preventDefault()
 */
    const newPost = document.querySelector('#newPost').value;
    if (newPost !== '') {
        dataPost(newPost) 
    } else {
        console.log('error')
    }
    
    /* .then(() => {3
        newPost = '';
        console.log('nota agregada')
    }).catch(() => {
        newPost = '';
        console.log('error')
    }) */
}

export const deletePost = (objPost) => {
    deletePostId(objPost.id);
}