import { initRouter } from './lib/view-controller/routes.js'
// import{ stateUser } from './lib/view-controller/controller-view-auth.js'
// inicializa el router

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
const init = () => {
    const config = {
        apiKey: "AIzaSyBPQyyMQ3kaz5sJkOs-Jc69Z19FsObmlLM",
        authDomain: "social-pet-c8d2e.firebaseapp.com",
        databaseURL: "https://social-pet-c8d2e.firebaseio.com",
        projectId: "social-pet-c8d2e",
        storageBucket: "social-pet-c8d2e.appspot.com",
        messagingSenderId: "307214905965",
        appId: "1:307214905965:web:099c967b71a297fb"
    };

    firebase.initializeApp(config);

    initRouter()
}


window.onload = init();
