export const viewUser = (user) => {
    const viewUserTemplate  = `
    <div class="container-info-user">
        <img class="img-user"src="${user.photoUrl}">
        <div class="div-info">
            <h3 class="user-name">${user.name}<h3>
            <p class="margin-0">PetLover<p>
        </div>
    </div>
    `
    const divElement = document.createElement('div');
    divElement.innerHTML = viewUserTemplate;

    return divElement;
}