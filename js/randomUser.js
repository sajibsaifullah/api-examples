const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayUser(data))
}
const displayUser = user => {
    const genderTag = document.getElementById('gender')
    genderTag.innerHTML = user.results[0].gender;

    const nameTag = document.getElementById('name');
    nameTag.innerHTML = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;

    const locationTag = document.getElementById('location');
    locationTag.innerHTML = user.results[0].location.street.number + ', ' + user.results[0].location.street.name + ', ' + user.results[0].location.city;

    const image = document.getElementById('image');
    const imgTag = document.createElement('picture');
    imgTag.innerHTML = `
        <img src="${user.results[0].picture.medium}" alt="">
    `;
    image.appendChild(imgTag);
}

loadUser();