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

// RESERVE FORM JS

// /**
//  * Define a function to navigate betweens form steps.
//  * It accepts one parameter. That is - step number.
//  */
// const navigateToFormStep = (stepNumber) => {
//     /**
//      * Hide all form steps.
//      */
//     document.querySelectorAll(".form-step").forEach((formStepElement) => {
//         formStepElement.classList.add("d-none");
//     });
//     /**
//      * Mark all form steps as unfinished.
//      */
//     document.querySelectorAll(".form-stepper-list").forEach((formStepHeader) => {
//         formStepHeader.classList.add("form-stepper-unfinished");
//         formStepHeader.classList.remove("form-stepper-active", "form-stepper-completed");
//     });
//     /**
//      * Show the current form step (as passed to the function).
//      */
//     document.querySelector("#step-" + stepNumber).classList.remove("d-none");
//     /**
//      * Select the form step circle (progress bar).
//      */
//     const formStepCircle = document.querySelector('li[step="' + stepNumber + '"]');
//     /**
//      * Mark the current form step as active.
//      */
//     formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-completed");
//     formStepCircle.classList.add("form-stepper-active");
//     /**
//      * Loop through each form step circles.
//      * This loop will continue up to the current step number.
//      * Example: If the current step is 3,
//      * then the loop will perform operations for step 1 and 2.
//      */
//     for (let index = 0; index < stepNumber; index++) {
//         /**
//          * Select the form step circle (progress bar).
//          */
//         const formStepCircle = document.querySelector('li[step="' + index + '"]');
//         /**
//          * Check if the element exist. If yes, then proceed.
//          */
//         if (formStepCircle) {
//             /**
//              * Mark the form step as completed.
//              */
//             formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-active");
//             formStepCircle.classList.add("form-stepper-completed");
//         }
//     }
// };
// /**
//  * Select all form navigation buttons, and loop through them.
//  */
// document.querySelectorAll(".btn-navigate-form-step").forEach((formNavigationBtn) => {
//     /**
//      * Add a click event listener to the button.
//      */
//     formNavigationBtn.addEventListener("click", () => {
//         /**
//          * Get the value of the step.
//          */
//         const stepNumber = parseInt(formNavigationBtn.getAttribute("step_number"));
//         /**
//          * Call the function to navigate to the target form step.
//          */
//         navigateToFormStep(stepNumber);
//     });
// });
