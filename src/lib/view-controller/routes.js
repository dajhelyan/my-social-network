import { components } from '../../view/index.js'

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
            { return container.appendChild(components.post()) }    
        default:
            break;    
    }
    console.log(route)
}



