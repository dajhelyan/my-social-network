export const register = (email, password) =>
    firebase.auth().createUserWithEmailAndPassword(email, password);

export const login = (emailExisting, passwordExisting) =>
    firebase.auth().signInWithEmailAndPassword(emailExisting, passwordExisting);

export const SignInGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
}    