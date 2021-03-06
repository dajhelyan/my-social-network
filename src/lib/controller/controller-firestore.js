
export const userData = (user) => {
    const db = firebase.firestore();
    return db.collection("user").doc(`${user.uid}`).set({
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        uid: user.uid
    })
    
}

export const getUserData = (uidUser) => {
    const db = firebase.firestore();
    const docRef = db.collection("user").doc(`${uidUser}`)

    return docRef.get()
        .then(data => {
            //console.log(data)
            if (data.exists) {
                /* console.log(data.data().user, "2") */
                return data.data()
            } /* else {
                console.log('error')
            } */
        })
}

export const dataPost = (user, post, state) => {
    const db = firebase.firestore();
    return db.collection("post").add({
        name: user.name,
        email: user.email,
        uid: user.uid,
        post: post,
        state: state,
        date: firebase.firestore.FieldValue.serverTimestamp()
    })
    /* .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    }); */
}

export const getCollectionPost = (callback, user) => {
    const db = firebase.firestore();
    const allPost = db.collection('post').orderBy("date", "desc")
    allPost.onSnapshot((querySnapshot) => {
        const data = []
        querySnapshot.forEach((doc) => {
            if (doc.data().state === "private" && user.uid !== doc.data().uid) {
                return data;
            } else {
                data.push({ id: doc.id, ...doc.data()});
            }
            // doc.data() is never undefined for query doc snapshots
            
        });
        callback(data);
        // console.log(data, "222")
    }) 
};

export const updatePost = (postId, post, state) => {
    let docRef = firebase.firestore().collection('post').doc(postId);
    return docRef.update({
        post: post,
        state: state
    })
}

export const deletePostId = (objId) => {
    return firebase.firestore().collection("post").doc(objId).delete();
}