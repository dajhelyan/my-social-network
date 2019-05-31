import { components } from '../../view/index.js'
import { observer } from '../controller/controller-firebase.js'
import { getUserData } from '../controller/controller-firestore.js'
 
export const changeView = (route) => {
    const container = document.getElementById('container');
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

            const cbthatRecivesDataUser = (objUser) => {
                container.innerHTML = '';
                container.appendChild(components.post(objUser)) 
            }

            stateUser(cbthatRecivesDataUser)
        default:
            break;    
    }
    console.log(route)
}



