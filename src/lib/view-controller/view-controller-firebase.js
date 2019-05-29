import { register, login } from '../controller/controller-firebase.js';
export const changeHash = (hash) => { window.location.hash = hash }

export const registerPage = () => {
    return changeHash('#/register')
}

export const registerUser = () => {
    /* const nameUser = document.querySelector('#nameUser').value; */
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

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

export const logInUser = () => {
    const emailExisting = document.getElementById('emailExisting').value;
    const passwordExisting = document.getElementById('passwordExisting').value;

    login(emailExisting, passwordExisting)
    .then(() => {
        return changeHash('#/post');
    }).catch((error) => {
        console.log(error)
    }) 
}