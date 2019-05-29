export const registerView = () => {
    const registerTemplate = `
    <img src="../img/adorable-animal-blur-406014.jpg" class="logo">
    <h1>Social Pet</h1>
    <p>¡Bienvenidx, dogLover!</p>
    <input id="nameUser" placeholder="Nombres y apellido">
    <input id="email" type="text" placeholder="Email">
    <input id="password" type="password" placeholder="Password">
    <button id="btnLogIn" type="button">Log in</button>
    <p>¿Tienes una cuenta? Inicia sesión.</p>
    
    `
    divElement = document.createElement('div');
    divElement.innerHTML = registerTemplate;


    return divElement;
}