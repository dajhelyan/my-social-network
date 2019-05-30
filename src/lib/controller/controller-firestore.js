const db = firebase.firestore();

export const collecionUser = (user) => {
    db.collecion('user').doc(`${uid}`).set({
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoUrl,
        uid: user.uid 

    })
}