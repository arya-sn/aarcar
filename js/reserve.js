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
        carImage: "img/car/full/civic.jpg"
    },
    {
        id: 4,
        carTitle: "Jeep Wrangler",
        carImage: "img/car/full/wrangler.png"
    },
    {
        id: 5,
        htmlID: 'skyline',
        carTitle: '2017 Nissan Skyline GT-R',
        carImage: 'img/car/full/skyline.jpeg'
    },
    {
        id: 6,
        htmlID: 'tacoma',
        carTitle: '2016 Toyota Tacoma TRD',
        carImage: 'img/car/full/tacoma.png'
    },
    {
        id: 7,
        htmlID: 'titanium',
        carTitle: '2017 Ford Escape Titanium',
        carImage: 'img/car/full/titanium.jpg'
    }
]

let htmlCode = ``;

cars.forEach(function (car) {
    if (car.id % 7 == 1) {
        htmlCode = htmlCode + `<div id="carCards" class="car-cards row">`
    }
    htmlCode = htmlCode +
        `<div class="card car-card col-12 col-lg-4 col-sm-6 p-3" style="width: 18rem;">
            <img src="${car.carImage}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${car.carTitle}</h5>
            </div>
        </div>`;
    if (car.id % 7 == 0) {
        htmlCode = htmlCode + `</div>`
    }
})

const carCards = document.querySelector("#carCards");

carCards.innerHTML = htmlCode;

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

let calendarNode = document.querySelector("#calendar");

let currDate = new Date();
let currYear = currDate.getFullYear();
let currMonth = currDate.getMonth() + 1;

let selectedYear = currYear;
let selectedMonth = currMonth;
let selectedMonthName = getMonthName(selectedYear, selectedMonth);
let selectedMonthDays = getDayCount(selectedYear, selectedMonth);

renderDOM(selectedYear, selectedMonth);

function getMonthName(year, month) {
    let selectedDate = new Date(year, month - 1, 1);
    return selectedDate.toLocaleString("default", { month: "long" });
}

function getMonthText() {
    // if (selectedYear === currYear)
    //     return selectedMonthName;
    // else
    return selectedMonthName + ", " + selectedYear;
}

function getDayName(year, month, day) {
    let selectedDate = new Date(year, month - 1, day);
    return selectedDate.toLocaleDateString("en-US", { weekday: "long" });
}

function getDayCount(year, month) {
    return 32 - new Date(year, month - 1, 32).getDate();
}

function getDaysArray() {
    let emptyFieldsCount = 0;
    let emptyFields = [];
    let days = [];

    switch (getDayName(selectedYear, selectedMonth, 1)) {
        case "Tuesday":
            emptyFieldsCount = 1;
            break;
        case "Wednesday":
            emptyFieldsCount = 2;
            break;
        case "Thursday":
            emptyFieldsCount = 3;
            break;
        case "Friday":
            emptyFieldsCount = 4;
            break;
        case "Saturday":
            emptyFieldsCount = 5;
            break;
        case "Sunday":
            emptyFieldsCount = 6;
            break;
    }

    emptyFields = Array(emptyFieldsCount).fill("");
    days = Array.from(Array(selectedMonthDays + 1).keys());
    days.splice(0, 1);

    return emptyFields.concat(days);
}

function renderDOM(year, month) {
    let newCalendarNode = document.createElement("div");
    newCalendarNode.id = "calendar";
    newCalendarNode.className = "calendar";

    let dateText = document.createElement("div");
    dateText.append(getMonthText());
    dateText.className = "date-text";
    newCalendarNode.append(dateText);

    let leftArrow = document.createElement("div");
    leftArrow.append("«");
    leftArrow.className = "button";
    leftArrow.addEventListener("click", goToPrevMonth);
    newCalendarNode.append(leftArrow);

    let curr = document.createElement("div");
    curr.append("📅");
    curr.className = "button";
    curr.addEventListener("click", goToCurrDate);
    newCalendarNode.append(curr);

    let rightArrow = document.createElement("div");
    rightArrow.append("»");
    rightArrow.className = "button";
    rightArrow.addEventListener("click", goToNextMonth);
    newCalendarNode.append(rightArrow);

    let dayNames = ["M", "T", "W", "T", "F", "S", "S"];

    dayNames.forEach((cellText) => {
        let cellNode = document.createElement("div");
        cellNode.className = "cell cell--unselectable";
        cellNode.append(cellText);
        newCalendarNode.append(cellNode);
    });

    let days = getDaysArray(year, month);

    days.forEach((cellText) => {
        let cellNode = document.createElement("div");
        cellNode.className = "cell";
        cellNode.append(cellText);
        newCalendarNode.append(cellNode);
    });

    calendarNode.replaceWith(newCalendarNode);
    calendarNode = document.querySelector("#calendar");
}

function goToPrevMonth() {
    selectedMonth--;
    if (selectedMonth === 0) {
        selectedMonth = 12;
        selectedYear--;
    }
    selectedMonthDays = getDayCount(selectedYear, selectedMonth);
    selectedMonthName = getMonthName(selectedYear, selectedMonth);

    renderDOM(selectedYear, selectedMonth);
}

function goToNextMonth() {
    selectedMonth++;
    if (selectedMonth === 13) {
        selectedMonth = 1;
        selectedYear++;
    }
    selectedMonthDays = getDayCount(selectedYear, selectedMonth);
    selectedMonthName = getMonthName(selectedYear, selectedMonth);

    renderDOM(selectedYear, selectedMonth);
}

function goToCurrDate() {
    selectedYear = currYear;
    selectedMonth = currMonth;

    selectedMonthDays = getDayCount(selectedYear, selectedMonth);
    selectedMonthName = getMonthName(selectedYear, selectedMonth);

    renderDOM(selectedYear, selectedMonth);
}

// // open calendar function
// function openCalendar() {
//     $(".timetable_container.hide").removeClass("hide");
// }
// function to pick date from calendar
$(".timetable_container").click(function (e) {
    if (e.target.className == "cell") {
        selectedDay = parseInt(e.target.textContent);
        if ((selectedDay + "").length == 1) {
            selectedDay = "0" + selectedDay;
        }
        if ((selectedMonth + "").length == 1) {
            selectedMonth = "0" + selectedMonth;
        }
        let selectedDateByUser =
            selectedYear + "-" + selectedMonth + "-" + selectedDay;
        // alert(selectedDateByUser)
        $("input#date").val(selectedDateByUser);
        // $(".timetable_container").addClass("hide");
    }
});

$(document).mouseup(function (e) {
    if ($(e.target).closest(".timetable_container").length === 0) {
        // $(".container").hide();
        // alert('outside')
        // $(".timetable_container").addClass("hide");
    }
});
