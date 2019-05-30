export const viewUser = (user) => {
    const viewUserTemplate  = `
    <img src="${user.photoUrl}">
    <h3>${user.name}<h3>
    <p>PetLover<p>
    `
    const divElement = document.createElement('div');
    divElement.innerHTML = viewUserTemplate;

    return divElement;
}