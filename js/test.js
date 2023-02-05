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

// open calendar function
function openCalendar() {
    $(".timetable_container.hide").removeClass("hide");
}
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
        $(".timetable_container").addClass("hide");
    }
});

$(document).mouseup(function (e) {
    if ($(e.target).closest(".timetable_container").length === 0) {
        // $(".container").hide();
        // alert('outside')
        $(".timetable_container").addClass("hide");
    }
});
