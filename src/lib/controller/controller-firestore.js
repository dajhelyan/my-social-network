const db = firebase.firestore();

export const userData = (user) => {
    db.collection('user').doc(`${user.uid}`).set({
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        uid: user.uid

    })
}

export const getUserData = (uidUser) => {
    const docRef = db.collection('user').doc(`${uidUser}`)

    return docRef.get()
        .then(data => {
            console.log(data)
            if (data.exists) {
                return data.data()
            } else {
                console.log('error')
            }
        })
}        