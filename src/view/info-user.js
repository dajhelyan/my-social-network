export const viewUser = (user) => {
    const viewUserTemplate  = `
    <img class="imgUser"src="${user.photoUrl}">
    <div class="divInfo">
        <h3>${user.name}<h3>
        <p>PetLover<p>
    </div>
    `
    const divElement = document.createElement('div');
    divElement.innerHTML = viewUserTemplate;

    return divElement;
}