
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

export const dataPost = (post) => {
    const user = firebase.auth().currentUser;
    const db = firebase.firestore();
    db.collection('post').add({
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        post: post,
        state: true,
        date: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

export const getCollectionPost = (callback) => {
    const db = firebase.firestore();
    const allPost = db.collection('post').orderBy("date", "desc")
    allPost.onSnapshot((querySnapshot) => {
        const data = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            data.push({ id: doc.id, ...doc.data()});
        });
        callback(data);
    }) 
};
