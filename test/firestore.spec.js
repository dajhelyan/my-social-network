const MockFirebase = require('mock-cloud-firestore');


const fixtureData = {
    __collection__: {
        post: {
            __doc__: {
                abc1d: {
                name: "moises dark",
                email: "moises@laboratoria.la",
                uid: "uid",
                post: "hola mundo",
                state: "public"
                },
                post2: {
                    name: "daniela lite",
                    email: "daniela@laboratoria.la",
                    uid: "uid",
                    post: "adios mundo",
                    state: "private"
                }
            }
        }
    }
}

global.firebase = new MockFirebase(fixtureData); 

import { getCollectionPost } from '../src/lib/controller/controller-firestore.js'

describe('getCollectionPost', () => {
    it('deberia ser una funcion', () => {
        expect(typeof getCollectionPost).toBe('function')
    })

    it('deberia poder leer la collecion de post ', () => {
        console.log('holi')
        getCollectionPost((posts) => {
            console.log('ASDFGHJKL', posts)
        })
    })
})

