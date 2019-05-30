import { register, login, signInGoogle, signInFacebook, signOut } from '../controller/controller-firebase.js';
export const changeHash = (hash) => { window.location.hash = hash };

export const registerPage = () => {
    return changeHash('#/register');
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

export const logInUser = () => {
    const emailExisting = document.querySelector('#emailExisting').value;
    const passwordExisting = document.querySelector('#passwordExisting').value;

    login(emailExisting, passwordExisting)
        .then(() => {
            return changeHash('#/post');
        }).catch((error) => {
            console.log(error);
        })
}

export const userSignInGoogle = () => {
    signInGoogle()
        .then(() => {
            changeHash('#/post');
        }).catch((error) => {
            console.log(error)
        })
}

export const userSignInFb = () => {
    signInFacebook()
    .then(() => {
        changeHash('#/post');
    }).catch((error) => {
        console.log(error);
    })
}

export const userSignOut = () => {
    signOut()
    .then(() => changeHash('#/login'))
    .catch((error) => {
        console.log(error);
    })
}