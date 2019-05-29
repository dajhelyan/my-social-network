export const postView = () => {
    const postTemplate = `
    <input id="createNewPost" placeholder="¿Que quieres compartir?">
    <button id"publishPost" type="button">Compartir</button> 
    <button id"signOut" type="button">Cerrar sesión</button>
    `
    const divElement = document.createElement('div');
    divElement.innerHTML = postTemplate;

    return divElement;
}