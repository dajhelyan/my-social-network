export const logInView = () => {
    const logInTemplate = `
    <img src="../img/adorable-animal-blur-406014.jpg" class="logo" width="100%";
    >
    <h1>Social Pet</h1>
    <p>¡Bienvenidx, dogLover!</p>
    <input id="emailExisting" type="text" placeholder="Email">
    <input id="passwordExisting" type="password" placeholder="Password">
    <button id="btnLogIn" type="button">Log in</button>
    <p>O bien ingresa con...</p>
    
    <p>¿No tienes una cuenta? Regístrate.</p>
    `

    const divElement = document.createElement('div');
    divElement.innerHTML = logInTemplate;
    divElement.classList.add('show');

    return divElement;
}