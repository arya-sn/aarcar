const cars = [
    {
        id: 1,
        title: 'Toyota Camry',
        color: 'black',
        price: '$15,000',
        pictureUrl: ''
    }
]

let htmlCode = ``;

cars.forEach(function (car) {
    htmlCode = htmlCode +
        `
            <div class="card">
                <div class="row d-flex mx-0">
                    <div class="flex-grow-1 card-block">
                        <h4 class="card-title"> ${car.title}</h4>
                        <p class="card-text">Color: ${car.color}</p>
                        <p class="card-text">Price: ${car.price}</p>
                        <a href="#" class="mt-auto btn btn-primary">Make a Reservation</a>
                    </div>
                    <div id="CarouselTest" class="carousel slide" data-interval="false">
                        <ol class="carousel-indicators">
                            <li data-target="#CarouselTest" data-slide-to="0" class="active"></li>
                            <li data-target="#CarouselTest" data-slide-to="1"></li>
                            <li data-target="#CarouselTest" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block" src="https://picsum.photos/450/300?image=1072" alt="">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block" src="https://picsum.photos/450/300?image=855" alt="">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block" src="https://picsum.photos/450/300?image=355" alt="">
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
                </div>
            </div>
    `
})

const carCards = document.querySelector(".car-cards");

carCards.innerHTML = htmlCode;

