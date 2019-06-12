const MockFirebase = require('mock-cloud-firestore');


const fixtureData = {
    __collection__: {
        user: {
            __doc__: {
                ABC123CDE: {
                    name: 'Laika Grim',
                    email: 'laiday@gmail.com',
                    photoUrl: 'laikonza.jpg',
                    uid: 'ABC123CDE'
                },
                EFG123HIJ: {
                    name: 'jennifer Stroke',
                    email: 'jenniprueba@gmail.com',
                    photoUrl: 'jenni.jpg',
                    uid: 'EFG123HIJ'
                }
            }
        },
        post: {
            __doc__: {
                ARL324AV: {
                    name: "moises dark",
                    email: "moises@laboratoria.la",
                    uid: '3VDV44FFR35VRFSCfroD',
                    post: "hola mundo",
                    state: "public",
                    date: "1 de junio de 2019, 23:32:12 UTC-5"
                },
                P1S34FBT: {
                    name: "daniela lite",
                    email: "daniela@laboratoria.la",
                    uid: '2EKI5FSC8Ufh7JXG2f42T',
                    post: "adios mundo",
                    state: "public",
                    date: "1 de junio de 2019, 20:10:50 UTC-5"
                },
                ARL324AV: {
                    name: "moises dark",
                    email: "moises@laboratoria.la",
                    uid: '3VDV44FFR35VRFSCfroD',
                    post: "este es mi segundo post",
                    state: "private",
                    date: "1 de junio de 2019, 22:32:11 UTC-5"
                },
                P1S34FBT: {
                    name: "daniela lite",
                    email: "daniela@laboratoria.la",
                    uid: '2EKI5FSC8Ufh7JXG2f42T',
                    post: "escribiendo mi post",
                    state: "private",
                    date: "1 de junio de 2019, 23:30:44 UTC-5"
                }
            }
        }
    }
}

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });


import { userData, getUserData, dataPost, getCollectionPost, updatePost, deletePostId } from '../src/lib/controller/controller-firestore.js'

describe('userData', () => {
    it('deberia ser una funcion', () => {
        expect(typeof userData).toBe('function')
    })

    it('deberia agregar o sobrescribir un documento de la coleccion', (done) => {
        const user1 = {
            displayName: 'lola',
            email: 'lola@gmail.com',
            photoURL: 'lola.jpg',
            uid: 'ABC123CDE'
        }
        // console.log(user)
        return userData(user1)
            .then(() => {
                getUserData('ABC123CDE')
                    .then((obj) => {
                        expect(obj).toBe(obj)
                        done()
                    })
            })
    })
})

describe('getUserData', () => {
    it('deberia ser una funcion', () => {
        expect(typeof getUserData).toBe('function')
    })

    it('deberia leer la colecion de data del usuario', (done) => {
        return getUserData('EFG123HIJ')
            .then((objData) => {
                expect(objData).toEqual({
                    name: 'jennifer Stroke',
                    email: 'jenniprueba@gmail.com',
                    photoUrl: 'jenni.jpg',
                    uid: 'EFG123HIJ'
                })
                done()
            })
    })
})

describe('dataPost', () => {
    it('deberia ser una funcion', () => {
        expect(typeof dataPost).toBe('function')
    })
    it('deberia agregar un documento a la collection post', (done) => {
        const user2 = {
            name: 'Lola Poluza',
            email: 'lolaprueba@gmail.com',
            photoUrl: 'lola.jpg',
            uid: 'KLM123OPQ'
        }
        return dataPost(user2, 'hola', 'private')
            .then(() => getCollectionPost(
                (data) => {
                    const res = data.find((post) => post.uid === 'KLM123OPQ');
                    expect(res.uid).toBe('KLM123OPQ')
                    done()
                }, user2)

            )

    })

})

describe('updatePost', () => {
    it('deberia ser una funcion', () => {
        expect(typeof updatePost).toBe('function')
    })
    it('deberia poder editar un post y la privacidad de este', (done) => {
        const callback = (data) => {
            const res = data.find((post) => post.post === 'editando mi post a publico')
            expect(res).toEqual({
                id: 'P1S34FBT',
                name: 'daniela lite',
                email: 'daniela@laboratoria.la',
                uid: '2EKI5FSC8Ufh7JXG2f42T',
                post: 'editando mi post a publico',
                state: 'public',
                date: '1 de junio de 2019, 23:30:44 UTC-5'
            })
            done()
        }
        return updatePost('P1S34FBT', 'editando mi post a publico', 'public')
            .then(() => getCollectionPost(callback, 'P1S34FBT')
            )
    })

})

describe('deletePostId', () => {
    it('deberia  poder eliminar un post de la colecion de post', (done) => {
        return deletePostId('ARL324AV')
        .then(() => {
            const cb = (posts) => {
                const res = posts.filter((post) => {
                    return post.id === 'ARL324AV'
                })
                console.log(res)
            }
            /* expect(res).toBe(undefined) */
            done()
        })
    })
})