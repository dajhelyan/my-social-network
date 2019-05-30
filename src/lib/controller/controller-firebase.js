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

export const observer = (callbackGetUserData, cbthatRecivesDataUse) => firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // si existe un usuario activo obtiene su uid
        const uid = user.uid;
        // llama a la funcion que trae la data del usuario existente por su uid
        callbackGetUserData(uid)
            .then(objUser => {
                cbthatRecivesDataUse(objUser);
            })
    } else {
        console.log('no existe usuario activo');
    }
});

/* export const observador = (cbTraeData, cbQueRecibeLaData) => firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        const uid = user.uid;     
        cbTraeData(uid)
            .then(objData => {
                cbQueRecibeLaData(objData)
            })
        //console.log('existe usuario activo');
    } else {
        console.log('no existe usuario activo');
    }
}); */

export const signOut = () => firebase.auth().signOut();
