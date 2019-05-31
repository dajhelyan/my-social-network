import { dataPost } from '../controller/controller-firestore.js'

export const addPost = () => {
    const user = firebase.auth().currentUser;
    const newPost = document.querySelector('#newPost').value;

    dataPost(user, newPost)
}
