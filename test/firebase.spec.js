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


import { register, login, signInGoogle, signInFacebook, signOut, observer } from '../src/lib/controller/controller-firebase.js'

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

describe('signInGoogle', () => {
  const expected = [{"providerId": "google.com"}]
  it('deberia ser una funcion', () => {
    expect(typeof signInGoogle).toBe('function')
  })

  it('deberia poder loguear a un usuario con su gmail', done => {
    return signInGoogle()
    .then((user) => {
      expect(user.isAnonymous).toBe(false)
      expect(user.providerData).toEqual(expect.arrayContaining(expected))
      done()
    })
  })
})


describe('signInFacebook', () => {
  const expected = [ { providerId: 'facebook.com' } ]
  it('deberia ser una funcion', () => {
    expect(typeof signInFacebook).toBe('function')
  })

  it('deberia poder loguear a un usuario con facebook', done => {
    return signInFacebook()
    .then((user) => {
    expect(user.isAnonymous).toBe(false);
    expect(user.providerData).toEqual(expect.arrayContaining(expected));
    done()
    })
  })
})

describe('signOut', () => {
  it('deberia ser una funcion', () => {
    expect(typeof signOut).toBe('function')
  })

  it('deberia cerrar sesion de un usaurio activo', () => {
    return signOut()
    .then((user) => {
      expect(user).toBe(undefined)
    })
  })
})

 const cbGetUserData = (uid) => new Promise((resolve, reject) => {
  resolve({ uid })
 });
  

describe('observer', () => {
  it ('observar el estado de un usuario y trae su data', () => {
    observer(cbGetUserData, (user) => {
      expect(user.uid).toBe('test')
    })
    // metodo de firebase que simula la existencia de un usuario para obtener un uid
    global.firebase.auth().changeAuthState({
      uid: 'test',
      token: 'token'
    })
  })
})