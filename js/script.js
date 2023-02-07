const searchInput = document.getElementById("userInput");
const carResults = document.getElementsByClassName("card-title");
const allCars = document.getElementsByClassName("carCard");

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

let htmlCode = `<section class="container-fliud mx-4">`;

cars.forEach(function (car) {
    if (car.id % 2 == 1) {
        htmlCode = htmlCode + `<div class="row">`
    }
    htmlCode = htmlCode +
        `   
        <div class="col-lg-6">
            <div id="carCard" class="carCard card">
                <div class="row d-flex mx-0">
                    <div id="${car.htmlID}" class="carousel slide" data-interval="false">
                        <ol class="carousel-indicators">
                            <li data-target="#${car.htmlID}" data-slide-to="0" class="active"></li>
                            <li data-target="#${car.htmlID}" data-slide-to="1"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block img-fluid" src="${car.fullURL}" alt="">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block img-fluid" src="${car.interiorURL}" alt="">
                            </div>
                            <a class="carousel-control-prev" href="#${car.htmlID}" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#${car.htmlID}" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <section class="flex-grow-1 card-block">
                        <h4 id="cardTitle" class="card-title"> ${car.title}</h4>
                        <p class="card-text car-price">Price: ${car.price}</p>
                        <p class="card-text car-info">Color: ${car.color}</p>
                        <a href="vehicle-details.html?id=${car.id}" class="mt-auto btn card-button">Get Info</a>
                        <a href="reserve.html" class="mt-auto btn card-button">Make a Reservation</a>
                    </section> 
                </div>
            </div>
        </div>
    `
    if (car.id % 2 == 0) {
        htmlCode = htmlCode + `</div>`
    }
})

htmlCode = htmlCode + `</section>`

const carCards = document.querySelector(".car-cards");

carCards.innerHTML = htmlCode;

searchInput.addEventListener("keyup", (event) => {
    const { value } = event.target;
    const searchQuery = value.toLowerCase();

    for (let i = 0; i < carResults.length; i++) {
        nameElement = carResults[i];
        // for (const nameElement of carResults) {
        let name = nameElement.textContent.toLowerCase();
        if (name.includes(searchQuery)) {
            allCars[i].style.display = "block";
        } else {
            allCars[i].style.display = "none";
        }
    }
})