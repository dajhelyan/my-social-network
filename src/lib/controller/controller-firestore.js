
export const userData = (user) => {
    const db = firebase.firestore();
    db.collection('user').doc(`${user.uid}`).set({
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        uid: user.uid

    })
}

export const getUserData = (uidUser) => {
    const db = firebase.firestore();
    const docRef = db.collection('user').doc(`${uidUser}`)

    return docRef.get()
        .then(data => {
            //console.log(data)
            if (data.exists) {
                return data.data()
            } else {
                console.log('error')
            }
        })
}

export const dataPost = (user, post) => {
    const db = firebase.firestore();
    db.collection('post').add({
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        post: post,
        state: true,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}