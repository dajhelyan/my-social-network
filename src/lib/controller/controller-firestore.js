
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