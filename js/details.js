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
        color: 'White',
        strPrice: '$15,000',
        price: 15000,
        fullURL: 'img/car/full/camry.png',
        interiorURL: 'img/car/interior/camry.jpg',
        mileage: '20k',
        driveType: 'Front Wheel Drive',
        exterior: 'White',
        interior: 'Red',
        engine: '4-cyl, Petrol, 2.5L',
        transmission: 'Automatic',
        bio: 'The 2019 Toyota Camry is a sedan made for the family. Providing with an automatic transmission and being a four-wheel drive type, it can coast along roads in order to make your drive more enjoyable.'
    },
    {
        id: 2,
        htmlID: 'altima',
        title: '2020 Nissan Altima S',
        color: 'White',
        strPrice: '$15,500',
        price: 15500,
        fullURL: 'img/car/full/altima.png',
        interiorURL: 'img/car/interior/altima.jpg',
        mileage: '60k',
        driveType: 'Front Wheel Drive',
        exterior: 'White',
        interior: 'Black',
        engine: '4-cyl, Gas, 2.5L',
        transmission: 'Automatic',
        bio: 'The 2020 Nissan Altima is a mid-sized sedan that prioritizes comfort and functionality with its state of the art features from its engine to its interior design.'
    },
    {
        id: 3,
        htmlID: 'civic',
        title: '2022 Honda Civic Type R',
        color: 'Red',
        strPrice: '$52,500',
        price: 52500,
        fullURL: 'img/car/full/civic.png',
        interiorURL: 'img/car/interior/civic.jpeg',
        mileage: '15k',
        driveType: 'Front Wheel Drive',
        exterior: 'Red',
        interior: 'Black',
        engine: '4-cyl, Turbo, 2.0L',
        transmission: 'Manual',
        bio: 'The 2022 Honda Civic Type R is a compact car with a comfortable and modern design where drivers can utilize the benefits of its top of the line features and fresh comfort.'
    },
    {
        id: 4,
        htmlID: 'wrangler',
        title: 'Jeep Wrangler',
        color: 'White',
        strPrice: '$31,000',
        price: 31000,
        fullURL: 'img/car/full/wrangler.png',
        interiorURL: 'img/car/interior/wrangler.png',
        mileage: '90k',
        driveType: 'Four-Wheel Drive',
        exterior: 'White',
        interior: 'Brown',
        engine: '4-cyl, Gas, 2.0L',
        transmission: 'Automatic',
        bio: 'With top-notched grip, this SUV is willing to go across any terrain allowing for a road trip with your friends and/or family. The 2022 Jeep Wrangler is outfitted with technology that makes it be at the top of it game.'
    },
    {
        id: 5,
        htmlID: 'skyline',
        title: '2017 Nissan Skyline GT-R',
        color: 'Black',
        strPrice: '$90,000',
        price: 90000,
        fullURL: 'img/car/full/skyline.jpeg',
        interiorURL: 'img/car/interior/skyline.jpeg',
        mileage: '30k',
        driveType: 'All-Wheel Drive',
        exterior: 'Black',
        interior: 'Orange',
        engine: 'Twin-Turbo RB26DETT I6, 2.6L, Petrol',
        transmission: 'Manual',
        bio: 'If you ever feel the need to cruise and speed along the streets, then look no further than the 2002 Nissan Skyline GTR. Despite it’s age, this monster of a car can drift along any corners smoothly with the help of it’s 2.6 L Twin-Turbo RB26DETT I6 engine and the best part is that it runs on petrol.'
    },
    {
        id: 6,
        htmlID: 'tacoma',
        title: '2016 Toyota Tacoma TRD',
        color: 'Tan',
        strPrice: '$25,000',
        price: 25000,
        fullURL: 'img/car/full/tacoma.png',
        interiorURL: 'img/car/interior/tacoma.jpeg',
        mileage: '50k',
        driveType: 'Four-Wheel Drive',
        exterior: 'Tan',
        interior: 'Gray',
        engine: '6-cyl, Gas, 3.5L',
        transmission: 'Automatic',
        bio: 'The 2016 Toyota Tacoma TRD is a truck designed with safety and functionality as the main priority .The Tacoma is best known for its safety, keeping its drivers and passengers secure at all times. It also has a world class V-6 engine, making this the perfect truck for off roading.'
    },
    {
        id: 7,
        htmlID: 'titanium',
        title: '2017 Ford Escape Titanium',
        color: 'Orange',
        strPrice: '$21,000',
        price: 21000,
        fullURL: 'img/car/full/titanium.jpg',
        interiorURL: 'img/car/interior/titanium.jpeg',
        mileage: '45k',
        driveType: 'Front Wheel Drive',
        exterior: 'Orange',
        interior: 'Black',
        engine: '4-cyl, Turbo Gas, 1.5L',
        transmission: 'Automatic',
        bio: 'The  2017 Ford Escape Titanium is a compact SUV offering fuel saving driving as well as comfort and dynamic storage space. The SUV comfortably seats five while also having plenty of room for cargo. New with the 2017 is also its fuel-saving stop-start feature to make sure your car is eco-friendly.'
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

let mainInfoCode = `<h1 id="carTitle">${car.title}</h1>
<h1 id="carPrice">${car.strPrice}</h1>
<p id="carBio">${car.bio}</p>`;
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
    <div class="row">
        <div class="col-3">
            <iconify-icon icon="carbon:meter-alt" style="color: #283f68;" width="35"></iconify-icon>
        </div>
        <div class="col-9">
            <p class="not-generated">Mileage:</p>
            <p class="generated">${car.mileage}</p>
        </div>
    </div>
</div>
<div class="col-6">
    <div class="row">
        <div class="col-3">
            <iconify-icon icon="mingcute:four-wheel-drive-fill" style="color: #283f68;" width="35">
            </iconify-icon>
        </div>
        <div class="col-9">
            <p class="not-generated">Drivetrain:</p>
            <p class="generated">${car.driveType}</p>
        </div>
    </div>
</div>
<section class="highlights-divider"></section>
<div class="col-6">
    <div class="row">
        <div class="col-3">
            <iconify-icon icon="mdi:car-hatchback" style="color: #283f68;" width="35"></iconify-icon>
        </div>
        <div class="col-9">
            <p class="not-generated">Exterior:</p>
            <p class="generated">${car.exterior}</p>
        </div>
    </div>
</div>
<div class="col-6">
    <div class="row">
        <div class="col-3">
            <iconify-icon icon="mdi:car-door" style="color: #283f68;" width="35"></iconify-icon>
        </div>
        <div class="col-9">
            <p class="not-generated">Interior:</p>
            <p class="generated">${car.interior}</p>
        </div>
    </div>
</div>
<section class="highlights-divider"></section>
<div class="col-6">
    <div class="row">
        <div class="col-3">
            <iconify-icon icon="mingcute:engine-fill" style="color: #283f68;" width="35"></iconify-icon>
        </div>
        <div class="col-9">
            <p class="not-generated">Engine:</p>
            <p class="generated">${car.engine}</p>
        </div>
    </div>
</div>
<div class="col-6">
    <div class="row">
        <div class="col-3">
            <iconify-icon icon="fluent:transmission-24-filled" style="color: #283f68;" width="35">
            </iconify-icon>
        </div>
        <div class="col-9">
            <p class="not-generated">Transmission:</p>
            <p class="generated">${car.transmission}</p>
        </div>
    </div>
</div>
</div>`
const highlight = document.querySelector("#highlights")
highlight.innerHTML = highlightsCode;



//calculations
$('#calcBtn').on('click', function (event) {
    event.preventDefault();

    let formInput = Array.from(document.querySelectorAll('#userInput input')).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});
    console.log(formInput);

    if (formInput.down == "") {
        formInput.down = 0;
    }

    if (formInput.apr == "") {
        formInput.apr = 0;
    }

    if (formInput.loanTerm == "") {
        formInput.loanTerm = 0;
    }

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

    userInput.price = car.price;

    let finalDown = formInput.down

    while (isNaN(parseFloat(finalDown))) {
        finalDown = finalDown.substring(1);
    }

    userInput.principal = userInput.price - parseFloat(finalDown);
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

    htmlCode2 = `<p>Total Loan Amount = $${calculations.tLoan.toFixed(2)}</p>
    <p>Total Interest Amount = $${calculations.tInterest.toFixed(2)}</p>
    <p>Total Loan and Total Interest Amount = $${calculations.total.toFixed(2)}</p>
    <p>Total Monthly Payment = $${calculations.monthly.toFixed(2)}</p>`;

    document.querySelector(".car-calculations").innerHTML = htmlCode2;

});