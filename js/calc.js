const cars = [
    {
        id: 1,
        title: "2018 Toyota Camry",
        htmlID: "toyota",
        price: 15000,
        strPrice: "$15,000"
    },
    {
        id: 2,
        title: '2020 Nissan Altima',
        htmlID: "altima",
        price: 22500,
        strPrice: "$22,500"
    },
    {
        id: 3,
        title: '2020 Honda Civic',
        htmlID: "civic",
        price: 22500,
        strPrice: "$22,500"
    },
    {
        id: 4,
        title: 'Jeep Wrangler',
        htmlID: "wrangler",
        price: 22500,
        strPrice: "$22,500"
    },
    {
        id: 5,
        htmlID: 'skyline',
        title: '2017 Nissan Skyline GT-R',
        price: 22500,
        strPrice: '$22,500'
    },
    {
        id: 6,
        htmlID: 'tacoma',
        title: '2016 Toyota Tacoma TRD',
        price: 22500,
        strPrice: '$22,500'
    },
    {
        id: 7,
        htmlID: 'titanium',
        title: '2017 Ford Escape Titanium',
        price: 22500,
        strPrice: '$22,500'
    }
]

//Display checkboxes
let htmlCode = '';

cars.forEach(function (car) {
    htmlCode += `<div class="form-check col-6 text-white py-2">
    <input class="form-check-input" type="radio" name="carRadioButtons" id="${car.htmlID}">
    <label class="form-check-label" for="${car.htmlID}">
        ${car.title}
    </label>
</div>`;

});

document.querySelector(".car-checkboxes").innerHTML = htmlCode;

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

    cars.forEach(function (car) {
        if ($(`#${car.htmlID}`).is(":checked")) {
            userInput.price = car.price;
        }
    });

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