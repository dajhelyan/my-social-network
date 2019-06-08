const MockFirebase = require('mock-cloud-firestore');


const fixtureData = {
    __collection__: {
        user: {
            __doc__: {
                ABC123CDE: {
                    name: 'Laika Grim',
                    email: 'laiday@gmail.com',
                    photo: 'laikonza.jpg',
                    uid: 'ABC123CDE'
                }
            }
        },
        posts: {
            __doc__: {
                ARL324AV: {
                    name: "moises dark",
                    email: "moises@laboratoria.la",
                    uid: '3VDV44FFR35VRFSCfroD',
                    post: "hola mundo",
                    state: "public"
                },
                P1S34FBT: {
                    name: "daniela lite",
                    email: "daniela@laboratoria.la",
                    uid: '2EKI5FSC8Ufh7JXG2f42T',
                    post: "adios mundo",
                    state: "public"
                },
                ARL324AV: {
                    name: "moises dark",
                    email: "moises@laboratoria.la",
                    uid: '3VDV44FFR35VRFSCfroD',
                    post: "este es mi segundo post",
                    state: "private"
                },
                P1S34FBT: {
                    name: "daniela lite",
                    email: "daniela@laboratoria.la",
                    uid: '2EKI5FSC8Ufh7JXG2f42T',
                    post: "escribiendo mi post",
                    state: "private"
                }
            }
        }
    }
}

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });


import { userData, getUserData } from '../src/lib/controller/controller-firestore.js'

describe('userData', () => {
    it('deberia agregar o sobrescribir un documento de la coleccion', () => {
        const user1 = {
            'name': 'lola',
            'email': 'lola@gmail.com',
            'photoURL': 'lola.jpg',
            'uid': 'ABC123CDA'
        }
        // console.log(user)
        return userData(user1)
            .then(() => {
                /* getUserData('123AKS')
                .then((obj) => {
                    console.log(obj)
                }) */
            })
            })
})


/* describe('getUserData', () => {
    it('deberia ser una funcion', () => {
        const user = {
            'name': 'lola',
            'email': 'lola@gmail.com',
            'photoURL': 'lola.jpg',
            'uid': '123AKS'
        }
        return getUserData(user).then(() => {

        })
    })
}) */

/* describe('dataPost', () => {
    it.only('deberia ser una funcion', () => {
        expect(typeof dataPost).toBe('function')
    })

    it('deberia poder crear un post', () => {
        return dataPost()
    })
}) */


/* describe('getCollectionPost', () => {
    it('deberia ser una funcion', () => {
        expect(typeof getCollectionPost).toBe('function')
    })

    it('deberia poder leer la collecion de post ', () => {

        getCollectionPost((posts) => {
            console.log('ASDFGHJKL', posts)
        })
    })
}) */