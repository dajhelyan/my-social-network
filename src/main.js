import{ changeView } from './lib/view-controller/routes.js'
// import{ stateUser } from './lib/view-controller/controller-view-auth.js'
// inicializa el router
const init = () => {
    changeView(window.location.hash)
    window.addEventListener('hashchange', () => { changeView(window.location.hash) })
}

window.addEventListener('load', init);