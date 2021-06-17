const userData = document.getElementById('user-data');
const createData = (data) => {
    data.forEach(element => {
        console.log(element);
        userData.innerHTML +=
            /*HTML */
            `
        <img src="${element.picture.large}">
        <p>${element.name.first} ${element.name.last}</p>
        <p>${element.email}</p>
        <p>${element.phone}</p>
        `
    });
}


export { createData }