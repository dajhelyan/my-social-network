import { components } from '../../view/index.js'
import { observer } from '../controller/controller-firebase.js'
import { getUserData, getCollectionPost } from '../controller/controller-firestore.js'

export const changeView = (route) => {
    const container = document.getElementById('root');
    container.innerHTML = '';
    switch (route) {
        case '':
        case '#':
        case '#/':
        case '#/login':
            { return container.appendChild(components.login()) };
        case '#/register':
            { return container.appendChild(components.register()) }
        case '#/post':
            const stateUser = (cbthatRecivesData) => {
                return observer(getUserData, cbthatRecivesData)
            }

            stateUser((objUser) => {
                getCollectionPost((post) => {
                    console.log(objUser, "11");
                    
                    container.innerHTML = '';
                    container.appendChild(components.post(objUser, post))
                }, objUser) 
            })

        default:
            break;
    }
    console.log(route)
}

export const initRouter = () => {
    changeView(window.location.hash)
    window.addEventListener('hashchange', () => { changeView(window.location.hash) })
}


