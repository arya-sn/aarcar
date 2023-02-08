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
        strPrice: '$15,000',
        price: 15000,
        fullURL: 'img/car/full/camry.png',
        interiorURL: 'img/car/interior/camry.jpg',
        mileage: '20k',
        driveType: 'Front Wheel Drive',
        exterior: 'White',
        interior: 'Red',
        engine: '4-cyl, Petrol, 2.5L',
        transmission: 'Automatic'
    },
    {
        id: 2,
        htmlID: 'altima',
        title: '2020 Nissan Altima',
        color: 'White',
        strPrice: '$22,500',
        price: 22500,
        fullURL: 'img/car/full/altima.png',
        interiorURL: 'img/car/interior/altima.png',
        mileage: '60k',
        driveType: 'Front Wheel Drive',
        exterior: 'White',
        interior: 'Black',
        engine: '4-cyl, Gas, 2.5L',
        transmission: 'Automatic'
    },
    {
        id: 3,
        htmlID: 'civic',
        title: '2022 Honda Civic',
        color: 'Black',
        strPrice: '$22,500',
        price: 22500,
        fullURL: 'img/car/full/civic.png',
        interiorURL: 'img/car/interior/civic.jpg',
        mileage: '15k',
        driveType: 'Front Wheel Drive',
        exterior: 'Gray',
        interior: 'Black',
        engine: '4-cyl, Gas, 2.0L',
        transmission: 'Manual'
    },
    {
        id: 4,
        htmlID: 'wrangler',
        title: 'Jeep Wrangler',
        color: 'White',
        strPrice: '$22,500',
        price: 22500,
        fullURL: 'img/car/full/wrangler.png',
        interiorURL: 'img/car/interior/wrangler.png',
        mileage: '90k',
        driveType: 'Four-Wheel Drive',
        exterior: 'White',
        interior: 'Brown',
        engine: '4-cyl, Gas, 2.0L',
        transmission: 'Automatic'
    },
    {
        id: 5,
        htmlID: 'skyline',
        title: '2017 Nissan Skyline GT-R',
        color: 'Black',
        strPrice: '$22,500',
        price: 22500,
        fullURL: 'img/car/full/skyline.jpeg',
        interiorURL: 'img/car/interior/skyline.jpeg',
        mileage: '30k',
        driveType: 'All-Wheel Drive',
        exterior: 'Black',
        interior: 'Orange',
        engine: 'Twin-Turbo RB26DETT I6, 2.6L, Petrol',
        transmission: 'Manual'
    },
    {
        id: 6,
        htmlID: 'tacoma',
        title: '2016 Toyota Tacoma TRD',
        color: 'Red',
        strPrice: '$22,500',
        price: 22500,
        fullURL: 'img/car/full/tacoma.jpeg',
        interiorURL: 'img/car/interior/tacoma.jpeg',
        mileage: '50k',
        driveType: 'Four-Wheel Drive',
        exterior: 'Red',
        interior: 'Gray',
        engine: '6-cyl, Gas, 3.5L',
        transmission: 'Automatic'
    },
    {
        id: 7,
        htmlID: 'titanium',
        title: '2017 Ford Escape Titanium',
        color: 'Orange',
        strPrice: '$22,500',
        price: 22500,
        fullURL: 'img/car/full/titanium.jpg',
        interiorURL: 'img/car/interior/titanium.jpeg',
        mileage: '45k',
        driveType: 'Front Wheel Drive',
        exterior: 'Orange',
        interior: 'Black',
        engine: '4-cyl, Turbo Gas, 1.5L',
        transmission: 'Automatic'
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
<p>${car.strPrice}</p>`;
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
    <p class="text-white">Mileage: ${car.mileage}</p>
</div>
<div class="col-6">
    <p class="text-white">Drive Type: ${car.driveType}</p>
</div>
<div class="col-6">
    <p class="text-white">Exterior: ${car.exterior}</p>
</div>
<div class="col-6">
    <p class="text-white">Interior: ${car.interior}</p>
</div>
<div class="col-6">
    <p class="text-white">Engine: ${car.engine}</p>
</div>
<div class="col-6">
    <p class="text-white">Transmission: ${car.transmission}</p>
</div>
</div>`
const highlight = document.querySelector("#highlights")
highlight.innerHTML = highlightsCode;



//calculations
$('#calc-btn').on('click', function (event) {
    event.preventDefault();

    let htmlCode2 = ``;

    let userInput = {
        price: 0,
        principal: 0,
        salesTax: 0,
        apr: 0,
        loanTerm: 0
    }

    let calculations = {
        tLoan: 0,
        tInterest: 0,
        total: 0,
        monthly: 0
    }

    let formInput = Array.from(document.querySelectorAll('#userInput input')).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});
    console.log(formInput);

    // let formInput = car.title;
    // console.log(formInput);
    userInput.price = car.price;

    // cars.forEach(function (car) {
    //     if ($(`#${car.htmlID}`).is(":checked")) {
    //         userInput.price = car.price;
    //     }
    // });

    userInput.principal = userInput.price - parseFloat(formInput.down);
    userInput.apr = parseFloat(formInput.apr);
    userInput.loanTerm = parseInt(formInput.loanTerm);

    console.log(userInput);

    calculations.tLoan = userInput.principal;

    //calculate monthly
    let p = userInput.principal;
    let i = userInput.apr / 1200;
    let n = userInput.loanTerm;
    let m = p * (i * ((1 + i) ** n)) / (((1 + i) ** n) - 1);

    calculations.monthly = m;
    calculations.total = m * userInput.loanTerm;
    calculations.tInterest = calculations.total - calculations.tLoan;
    console.log(calculations);

    htmlCode2 = `<p class="text-white">Total Loan Amount = ${calculations.tLoan.toFixed(2)}</p>
    <p class="text-white">Total Interest Amount = ${calculations.tInterest.toFixed(2)}</p>
    <p class="text-white">Total Loan and Total Interest Amount = ${calculations.total.toFixed(2)}</p>
    <p class="text-white">Total Monthly Payment = ${calculations.monthly.toFixed(2)}</p>`;

    document.querySelector(".car-calculations").innerHTML = htmlCode2;

});