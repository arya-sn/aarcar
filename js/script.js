const searchInput = document.getElementById("userInput");
const carResults = document.getElementsByClassName("card-title");
const allCars = document.getElementsByClassName("carCard");

const cars = [
    {
        id: 1,
        title: '2018 Toyota Camry',
        color: 'Black',
        price: '$15,000',
        pictureUrl: ''
    },
    {
        id: 2,
        title: 'placeholder',
        color: 'placeholder',
        price: 'placeholder',
        pictureUrl: ''
    }
]

// function searchThrough() {
//     // Declare variables
//     let input, filter, card, cards, title, i, txtValue, sect;
//     input = document.getElementById('userInput');
//     filter = input.value.toUpperCase();
//     cards = document.getElementById("carCards");
//     //individual cards, not section
//     card = cards.getElementsById('carCard');

//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < card.length; i++) {
//         sect = card[i].getElementsByTagName('section')[0];
//         title = sect[i].getElementsById("cardTitle")[0];
//         txtValue = title.textContent || title.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             card[i].style.display = "";
//         } else {
//             card[i].style.display = "none";
//         }
//     }
// }

let htmlCode = ``;

cars.forEach(function (car) {
    // if (car.id % 2 == 0) {
    //     htmlCode = htmlCode + `<div class="row">`
    // }
    htmlCode = htmlCode +
        `   
            <div id="carCard" class="carCard card col-xl-6">
                <div class="row d-flex mx-0">
                    <div id="CarouselTest" class="carousel slide" data-interval="false">
                        <ol class="carousel-indicators">
                            <li data-target="#CarouselTest" data-slide-to="0" class="active"></li>
                            <li data-target="#CarouselTest" data-slide-to="1"></li>
                            <li data-target="#CarouselTest" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block img-fluid" src="https://picsum.photos/450/300?image=1072" alt="">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block img-fluid" src="https://picsum.photos/450/300?image=855" alt="">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block img-fluid" src="https://picsum.photos/450/300?image=355" alt="">
                            </div>
                            <a class="carousel-control-prev" href="#CarouselTest" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#CarouselTest" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <section class="flex-grow-1 card-block">
                        <h4 id="cardTitle" class="card-title"> ${car.title}</h4>
                        <p class="card-text car-price">Price: ${car.price}</p>
                        <p class="card-text car-info">Color: ${car.color}</p>
                        <a href="#" class="mt-auto btn card-button">Make a Reservation</a>
                    </section> 
                </div>
            </div>
    `
    // if (car.id % 2 == 1) {
    //     htmlCode = htmlCode + `</div>`
    // }
})

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
