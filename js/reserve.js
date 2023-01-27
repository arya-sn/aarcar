const cars = [
    {
        id: 1,
        carTitle: "Toyota Camry",
        carImage: "img/car/full/camry.png"
    },
    {
        id: 2,
        carTitle: "Nissan Altima",
        carImage: "img/car/full/altima.png"
    },
    {
        id: 3,
        carTitle: "Honda Civic",
        carImage: "img/car/full/civic.png"
    },
    {
        id: 4,
        carTitle: "Jeep Wrangler",
        carImage: "img/car/full/wrangler.png"
    }
]

let htmlCode = ``;

cars.forEach(function (car) {
    if (car.id % 2 == 1) {
        htmlCode = htmlCode + `<div id="carCards" class="card-deck car-cards">`
    }
    htmlCode = htmlCode +
        `<div class="card">
            <img src="${car.carImage}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${car.carTitle}</h5>
            </div>
        </div>`;
    if (car.id % 2 == 0) {
        htmlCode = htmlCode + `</div>`
    }
})

const carCards = document.querySelector("#carCards");

carCards.innerHTML = htmlCode;

// addclass = 'color';
// $cols = $('.divs').click(function(e) {
//     $cols.removeClass(addclass);
//     $(this).addClass(addclass);
// });

/**
 * Define a function to navigate betweens form steps.
 * It accepts one parameter. That is - step number.
 */
const navigateToFormStep = (stepNumber) => {
    /**
     * Hide all form steps.
     */
    document.querySelectorAll(".form-step").forEach((formStepElement) => {
        formStepElement.classList.add("d-none");
    });
    /**
     * Mark all form steps as unfinished.
     */
    document.querySelectorAll(".form-stepper-list").forEach((formStepHeader) => {
        formStepHeader.classList.add("form-stepper-unfinished");
        formStepHeader.classList.remove("form-stepper-active", "form-stepper-completed");
    });
    /**
     * Show the current form step (as passed to the function).
     */
    document.querySelector("#step-" + stepNumber).classList.remove("d-none");
    /**
     * Select the form step circle (progress bar).
     */
    const formStepCircle = document.querySelector('li[step="' + stepNumber + '"]');
    /**
     * Mark the current form step as active.
     */
    formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-completed");
    formStepCircle.classList.add("form-stepper-active");
    /**
     * Loop through each form step circles.
     * This loop will continue up to the current step number.
     * Example: If the current step is 3,
     * then the loop will perform operations for step 1 and 2.
     */
    for (let index = 0; index < stepNumber; index++) {
        /**
         * Select the form step circle (progress bar).
         */
        const formStepCircle = document.querySelector('li[step="' + index + '"]');
        /**
         * Check if the element exist. If yes, then proceed.
         */
        if (formStepCircle) {
            /**
             * Mark the form step as completed.
             */
            formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-active");
            formStepCircle.classList.add("form-stepper-completed");
        }
    }
};
/**
 * Select all form navigation buttons, and loop through them.
 */
document.querySelectorAll(".btn-navigate-form-step").forEach((formNavigationBtn) => {
    /**
     * Add a click event listener to the button.
     */
    formNavigationBtn.addEventListener("click", () => {
        /**
         * Get the value of the step.
         */
        const stepNumber = parseInt(formNavigationBtn.getAttribute("step_number"));
        /**
         * Call the function to navigate to the target form step.
         */
        navigateToFormStep(stepNumber);
    });
});

$(document).ready(function () {

    $Divs = $(".card");

    $Divs.click(function () {
        $Divs.removeClass("highlight");
        $(this).addClass("highlight");

    });
});