export const register = (email, password) =>
    firebase.auth().createUserWithEmailAndPassword(email, password);

export const login = (emailExisting, passwordExisting) =>
    firebase.auth().signInWithEmailAndPassword(emailExisting, passwordExisting);

export const signInGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
}    

export const signInFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider);
}

export const signOut = () => firebase.auth().signOut();
