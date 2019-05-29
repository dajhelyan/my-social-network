export const register = (email, password) =>
    firebase.auth().createUserWithEmailAndPassword(email, password);

export const login = (emailExisting, passwordExisting) =>
    firebase.auth().signInWithEmailAndPassword(emailExisting, passwordExisting);