//import "./styles.css";

const elephantsArray = [
    {
        id: 1,
        title: "Brown elephant with Birds",
        color: "brown",
        age: 12,
        pictureUrl:
            "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
        imageAlt: "good looking elphant"
    },
    {
        id: 2,
        title: "Black elephant",
        color: "black",
        age: 10,
        pictureUrl:
            "https://images.unsplash.com/photo-1503286666306-61c9985f16cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=929&q=80",
        imageAlt: "dark elephant"
    },
    {
        id: 3,
        title: "Blue old elephant",
        color: "blue",
        age: 19,
        pictureUrl:
            "https://images.unsplash.com/photo-1482237935571-d9b52bffe142?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80",
        imageAlt: "papa elephant"
    },
    {
        id: 4,
        title: "Green Mamoth Elephant",
        color: "green",
        age: 8,
        pictureUrl:
            "https://images.unsplash.com/photo-1534692499281-57d0f101789b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        imageAlt: "playful elephant"
    }
];

const cars = [
    {
        id: 1,
        title: 'Toyota Camri',
        color: 'black',
        price: '$15,000',
        pictureUrl: ''
    }
]

// defining our variable to retrieve the html strings
// we asign an empty template string to htmlCode. We'll add something inside afterwards.
let testHtmlCode = ``;
let htmlCode = ``;

// to get each single elephant object from the array and use them to build out html string, we need to open up our array, and we do that using forEach method. The forEach method, finds each item(object) in the array and returns them, this means we get 4 items that are objects back.

elephantsArray.forEach(function (singleElephantObjects) {
    // uncomment the line below, to see each of the 4 objects rendered in the console.
    //console.log(singleElephantObjects);

    // we take our previous empty htmlCode variable and add our html codes to it.

    // because the forEach method returns objects, we can then use the dot notation to reference children of the object, e.g, elephant.title;
    testHtmlCode =
        testHtmlCode +
        `
    <article>
      <div>
      <img src="${singleElephantObjects.pictureUrl}" alt="${singleElephantObjects.imageAlt
        }">
      </div>
      <div>
      <h3>Title: ${singleElephantObjects.title}</h3>
      <p>Color: ${singleElephantObjects.color}</p>
      <p>Age: ${singleElephantObjects.age}</p>
      </div>
    </article>
  `;
    // uncomment the line below to see the output in the browser console.
    // console.log(htmlCode);
});

cars.forEach(function (car) {
    htmlCode = htmlCode +
        `
            <div class="card">
                <div class="row ">
                    <div class="col-md-7 px-3">
                       <div class="card-block px-6">
                            <h4 class="card-title"> ${car.title}</h4>
                            <p class="card-text">Color: ${car.color}</p>
                            <p class="card-text">Price: ${car.price}</p>
                            <a href="#" class="mt-auto btn btn-primary">Make a Reservation</a>
                       </div>
                    </div>
                    <div class="col-md-5">
                        <div id="CarouselTest" class="carousel slide" data-ride="carousel">
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
            </div>
    `
})

// currently, we have out html code showing in the browser console, we need to send it to our html file and render it there.
// here we define out the cards we want to be rendered to the DOM.

// ".all-elephant-cards" is the class of the empty div back in our index.html. We want to render the cards from our JS inside that div.

// we are simply saying, "let elephantCards be = to that div", to target that div, we reference the class we gave to it.
const elephantCards = document.querySelector(".all-elephant-cards");
const carCards = document.querySelector(".car-cards");

// here's how we do the render;
// since elephantCards is now = to that div, we now say let the inside of that div take in our htmlCode variable that holds our html codes.
elephantCards.innerHTML = testHtmlCode;
carCards.innerHTML = htmlCode;

