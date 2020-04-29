import { register, login, signInGoogle, signInFacebook, signOut } from '../controller/controller-firebase.js';
import { userData, getUserData } from '../controller/controller-firestore.js'
export const changeHash = (hash) => { window.location.hash = hash };

const printMessageError = (error) => {
    const messageError = document.querySelector('#messageError')
    messageError.innerHTML = error.message;
}

export const registerPage = () => {
    return changeHash('#/register');
  }
  
  export const userLogin = (email, password) => {
    login(email, password)
      .then(() => changeHash('#/post'))
      .catch((error) => {
        printMessageError(error);
      })
  }
  
  export const registerUser = (nameUser, email, password) => {
    register(email, password)
      .then(res => {
        const objDataUser = {
          displayName: nameUser,
          email: email,
          photoURL: "../img/585e4bf3cb11b227491c339a.png",
          uid: res.user.uid
        }
        userData(objDataUser)
        changeHash('#/post');
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
  }