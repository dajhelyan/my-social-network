import { register, login, signInGoogle, signInFacebook, signOut } from '../controller/controller-firebase.js';
import { userData } from '../controller/controller-firestore.js'
export const changeHash = (hash) => { window.location.hash = hash };

const printMessageError = (error) => {
    const messageError = document.querySelector('#messageError')
    messageError.innerHTML = error.message;
}

export const registerPage = () => {
    return changeHash('#/register');
}

export const registerUser = () => {
    const nameUser = document.querySelector('#nameUser').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    register(email, password)
        .then(res => {
            const objUSer = {
                displayName: nameUser,
                email: email,
                photoURL: "../img/585e4bf3cb11b227491c339a.png",
                uid: res.user.uid

            }
            userData(objUSer)
            changeHash('#/post');
        }).catch((error) => {
            printMessageError(error);
        })
}

export const logInUser = () => {
    const emailExisting = document.querySelector('#emailExisting').value;
    const passwordExisting = document.querySelector('#passwordExisting').value;

    login(emailExisting, passwordExisting)
        .then(res => {
            userData(res.user);
            return changeHash('#/post');
        }).catch((error) => {
            printMessageError(error);
        })
}

export const userSignInGoogle = () => {
    signInGoogle()
        .then(res => {
            userData(res.user);
            return changeHash('#/post');
        }).catch((error) => {
            printMessageError(error);
        })
}

export const userSignInFb = () => {
    signInFacebook()
    .then(res => {
        userData(res.user)
        return changeHash('#/post');
    }).catch((error) => {
        printMessageError(error);
    })
}

export const userSignOut = () => {
    signOut()
    .then(() => changeHash('#/login'))
    .catch((error) => {
        console.log(error);
    })
}