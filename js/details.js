currentID = getParameter("id")
console.log(currentID)

function getParameter(name) {
    let nameObj = new URLSearchParams(window.location.search);
    return nameObj.get(name);
}

const cars = [
    {
        id: 1,
        htmlID: 'camry',
        title: '2018 Toyota Camry',
        color: 'Black',
        price: '$15,000',
        fullURL: 'img/car/full/camry.png',
        interiorURL: 'img/car/interior/camry.jpg'
    },
    {
        id: 2,
        htmlID: 'altima',
        title: '2020 Nissan Altima',
        color: 'White',
        price: '$22,500',
        fullURL: 'img/car/full/altima.png',
        interiorURL: 'img/car/interior/altima.png'
    },
    {
        id: 3,
        htmlID: 'civic',
        title: '2022 Honda Civic',
        color: 'Black',
        price: '$22,500',
        fullURL: 'img/car/full/civic.png',
        interiorURL: 'img/car/interior/civic.jpg'
    },
    {
        id: 4,
        htmlID: 'wrangler',
        title: 'Jeep Wrangler',
        color: 'White',
        price: '$22,500',
        fullURL: 'img/car/full/wrangler.png',
        interiorURL: 'img/car/interior/wrangler.png'
    },
    {
        id: 5,
        htmlID: 'skyline',
        title: '2017 Nissan Skyline GT-R',
        color: 'Black',
        price: '$22,500',
        fullURL: 'img/car/full/skyline.jpeg',
        interiorURL: 'img/car/interior/skyline.jpeg'
    },
    {
        id: 6,
        htmlID: 'tacoma',
        title: '2016 Toyota Tacoma TRD',
        color: 'Red',
        price: '$22,500',
        fullURL: 'img/car/full/tacoma.jpeg',
        interiorURL: 'img/car/interior/tacoma.jpeg'
    },
    {
        id: 7,
        htmlID: 'titanium',
        title: '2017 Ford Escape Titanium',
        color: 'Orange',
        price: '$22,500',
        fullURL: 'img/car/full/titanium.jpg',
        interiorURL: 'img/car/interior/titanium.jpeg'
    }
]

let car;

for (let i = 0; i < cars.length; i++) {
    car = cars[i];
    console.log(car)
    if (cars[i].id == currentID) {
        break;
    }
}

let mainInfoCode = `<p>${car.title}</p>
<p>${car.price}</p>`;
const mainInfo = document.querySelector(".main-info")
mainInfo.innerHTML = mainInfoCode;

let carouselCode = ` <div class="carousel-item active full">
<img class="d-block img-fluid" src="${car.fullURL}" alt="">
</div>
<div class="carousel-item interior">
<img class="d-block img-fluid" src="${car.interiorURL}" alt="">
</div>`
const carousel = document.querySelector(".carousel-inner")
carousel.innerHTML = carouselCode + carousel.innerHTML;

let highlightsCode = `<div class="row p-5">
<div class="col-6">
    <h4>Mileage: sum</h4>
</div>
<div class="col-6">
    <h4>Drive Type: sum</h4>
</div>
</div>
<div class="row px-5">
<div class="col-6">
    <h4>Exterior: sum</h4>
</div>
<div class="col-6">
    <h4>Interior: sum</h4>
</div>
</div>
<div class="row p-5">
<div class="col-6">
    <h4>Engine: sum</h4>
</div>
<div class="col-6">
    <h4>Transmission: sum</h4>
</div>
</div>`
const highlight = document.querySelector("#highlights")
highlight.innerHTML = highlightsCode;