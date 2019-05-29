const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockfirestore
);


import { register, login } from '../src/lib/controller/controller-firebase.js'

describe('register', () => {
  it('deberia ser una funcion', () => {
    expect(typeof register).toBe('function')
  })

  it('deberia registrar a un usuario', () => {
    return register("prueba@prueba.com", "123456")
    .then((user) => {
      expect(user.email).toBe("prueba@prueba.com")

    }).catch((err) => {console.log(err)})
  })
})

describe('login', () => {
  it('deberia ser una funcion', () => {
    expect(typeof login).toBe('function')
  })

  it('deberia poder iniciar sesion un usuario registrado', () => {
    return login("prueba@prueba.com", "123456")
    .then((user) => {
      expect(user.email).toBe("prueba@prueba.com")
    })
  })

})