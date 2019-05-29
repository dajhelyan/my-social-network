import { register } from '../controller/controller-firebase.js';
export const changeHash = (hash) => { window.location.hash = hash }

export const registerPage = () => {
    return changeHash('#/register')
}

export const registerUser = () => {
    /* const nameUser = document.querySelector('#nameUser').value; */
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

 register(email, password)
 .then(() => {
     changeHash('#/post');
 }).catch((error) => {
     console.log(error);
 })

 /* .then(objUser => {
     objUser = {
         name: nameUser,
         email: email,

     }
 }) */
}