// //Build up the HTML
// //<------------------------->
// //<------------------------->
//
// //Create variable to create HTML element
// var container = document.createElement('div');
// // console.dir(container)
//
// //Add the container element created to the Body tag
// //'Append Child' sticks element created inside the Body tag at the bottom
// // document.body.appendChild(container) --> using just the body
//
// //'Append Child' inside div created in Body element
// container.classList.add('container');
// //Create row div
// var row = document.createElement('div');
// row.classList.add('row');
// container.appendChild(row);
//
// //Create column div 1
// var col = document.createElement('div');
// col.classList.add('col-sm-4');
// // col.classList.add('text-center')
// //Create Attribute for the columns col-sm-4
// col.setAttribute('title', 'A fancy column');
// var col2 = col.cloneNode(true);
// var col3 = col.cloneNode(true);
//
// //<...This was the original way to create columns
// //<---------------------------------------------->
// // //Create column div 2
// // var col = document.createElement('div')
// // col.classList.add('col-sm-4')
// // //Add string inside tag
// // col.innerHTML = 'Column B'
// // row.appendChild(col)
// //
// // //Create column div 3
// // var col = document.createElement('div')
// // col.classList.add('col-sm-4')
// // //Add string inside tag
// // col.innerHTML = 'Column C'
// // row.appendChild(col)
// //<...This was the original way to create columns
// //<---------------------------------------------->
//
// //Add string inside clone tags
// col.innerHTML = 'Column A';
// col2.innerHTML = 'Column B';
// col3.innerHTML = 'Column C';
//
// //Append clone columns to rows
// row.appendChild(col);
// row.appendChild(col2);
// row.appendChild(col3);
//
// //Create <input type = 'text' id = 'search' placeholder='Search...'>
// /*<div class="input-group">
//   <input type="text" class="form-control" placeholder="Search for...">
//   <span class="input-group-btn">
//     <button class="btn btn-default" type="button">Go!</button>
//   </span>
// </div><!-- /input-group -->
// */
//
// var searchDiv = document.createElement('div')
// searchDiv.classList.add('input-group')
//
// var span = document.createElement('span')
// span.classList.add('input-group-btn')
//
// var button = document.createElement('button')
// button.type = 'button'
// button.className = 'btn btn-default'
// button.innerHTML = 'Search!!!'
//
// var searchInput = document.createElement('input')
// searchInput.type = 'text'
// searchInput.placeholder = 'Search...'
// searchInput.id = 'search'
// searchInput.className = 'form-control'
// //Add the searchInput to the top of the container div
// // container.prepend(searchInput);
// // container.appendChild(searchInput);
//
// searchDiv.appendChild(searchInput)
// span.appendChild(button)
// searchDiv.appendChild(span)
// container.insertBefore(searchDiv, row);
// container.insertBefore(document.createElement('br'), searchDiv);
// container.insertBefore(document.createElement('br'), row);
//
// //Listening on Event for the click and enter key being pressed
// button.addEventListener('click', search )
// searchInput.addEventListener('keypress', searchEnter)
//
//     function searchEnter(event){
//         if (event.key === 'Enter'){
//             search()
//         }
//     }
//     function search(){
//         // alert('You searched!') --> initial code but not used anymore
//         var searchTerm = document.querySelector('#search').value
//         // alert(searchTerm) --> initial code but not used anymore
//         var searchResult = {
//             term: searchTerm,
//             image: 'http://unsplash.it/400?random',
//         }
//         createSearchResult(searchResult)
//         //This clears out the search bar after we enter a value
//         document.querySelector('#search').value = ''
//     }
//
// function createSearchResult(result) {
//     var card = document.createElement('div')
//     card.className = 'well'
//     card.innerHTML = result.term
//     document.querySelector('.col-sm-4:first-child').appendChild(card)
// }
//
// document.getElementById('searchResults').appendChild(container)

//Start the commenting here and go up...
//<-----------------------Template for the HTML Card------------------------>

/* <div class="col-sm-3">
  <div class="card">
    <img src="http://unsplash.it/200?random" alt="random image">
    <h6>Title of thing goes here and it's a long title with a lot of words.</h6><br>
    <div class="cardTextBox">
      <div class="row cardText">
        <div class="col-xs-6 text-muted small">
          <span>seller name</span>
        </div>
        <div class="col-xs-6 text-right text-success small">
          <span>$75.00</span>
        </div>
      </div>
    </div>
  </div>
</div> */
//<-----------------------Template for the HTML Card------------------------>

//Create Card Template
function createResultCard(item){
var col = document.createElement('div')
col.classList.add('col-sm-3')

//Creates the card container
var card = document.createElement('div')
card.classList.add('card')
col.appendChild(card)

//Creates the tag for the image
var img = document.createElement('img')
img.setAttribute('src', item.image)
card.appendChild(img)

//Creates the header tag for the title
var cardTitle = document.createElement('h6')
cardTitle.innerHTML = item.title
card.appendChild(cardTitle)

//Creates the container for the text at the bottom of the card
var cardTextBox = document.createElement('div')
cardTextBox.classList.add('cardTextBox')
card.appendChild(cardTextBox)

//Creates the row for the container of the two columns at the bottom of the card
var cardText = document.createElement('div')
cardText.classList.add('cardText')
cardTextBox.appendChild(cardText)

//Creates the container for the seller information of the card on the left
var cardColLeft = document.createElement('div')
cardColLeft.className = 'col-xs-6 text-muted small'
cardColLeft.innerHTML = item.seller
cardTextBox.appendChild(cardColLeft)

//Creates the container for the price information of the card on the right
var cardColRight = document.createElement('div')
cardColRight.className ='col-xs-6 text-right text-success small'
cardColRight.innerHTML = item.price
cardTextBox.appendChild(cardColRight)

//Searches for the ID in the HTML and adds the card template function created
document.querySelector('#searchResults').appendChild(col)
}

//Creates a random number random price for objects from 0 to 100
function makeRandomPrice(){
    return '$' + Math.round((Math.random()*100) + '.00')
}
//Create an array of objects to populate the page with...
var items = [
    {
      image: /*'img/boardgame.jpg'*/'http://unsplash.it/200?image=1',
      title: '01Vintage Board Game Art Wall Home Decor',
      seller: '01franz66',
      price: makeRandomPrice()
    },
    {
      image: /*'img/boardgame.jpg'*/'http://unsplash.it/200?image=2',
      title: '02Vintage Board Game Art Wall Home Decor',
      seller: '02franz66',
      price: makeRandomPrice()
    },
    {
      image: /*'img/boardgame.jpg'*/'http://unsplash.it/200?image=3',
      title: '03Vintage Board Game Art Wall Home Decor',
      seller: '03franz66',
      price: makeRandomPrice()
    },
    {
      image: /*'img/boardgame.jpg'*/'http://unsplash.it/200?image=4',
      title: '04Vintage Board Game Art Wall Home Decor',
      seller: '04franz66',
      price: makeRandomPrice()
    },
    {
      image: /*'img/boardgame.jpg'*/'http://unsplash.it/200?image=5',
      title: '05Vintage Board Game Art Wall Home Decor',
      seller: '05franz66',
      price: makeRandomPrice()
    },
    {
      image: /*'img/boardgame.jpg'*/'http://unsplash.it/200?image=6',
      title: '06Vintage Board Game Art Wall Home Decor',
      seller: '06franz66',
      price: makeRandomPrice()
    },
    {
      image: /*'img/boardgame.jpg'*/'http://unsplash.it/200?image=7',
      title: '07Vintage Board Game Art Wall Home Decor',
      seller: '07franz66',
      price: makeRandomPrice()
    },
    {
      image: /*'img/boardgame.jpg'*/'http://unsplash.it/200?image=8',
      title: '08Vintage Board Game Art Wall Home Decor',
      seller: '08franz66',
      price: makeRandomPrice()
    },
    {
      image: /*'img/boardgame.jpg'*/'http://unsplash.it/200?image=9',
      title: '09Vintage Board Game Art Wall Home Decor',
      seller: '09franz66',
      price: makeRandomPrice()
    },
    {
      image: /*'img/boardgame.jpg'*/'http://unsplash.it/200?image=10',
      title: '10Vintage Board Game Art Wall Home Decor',
      seller: '10franz66',
      price: makeRandomPrice()
    },
    {
      image: /*'img/boardgame.jpg'*/'http://unsplash.it/200?image=11',
      title: '11Vintage Board Game Art Wall Home Decor',
      seller: '11franz66',
      price: makeRandomPrice()
    },
    {
      image: /*'img/boardgame.jpg'*/'http://unsplash.it/200?image=12',
      title: '12Vintage Board Game Art Wall Home Decor',
      seller: '12franz66',
      price: makeRandomPrice()
    },
]
//Create Function to generate 12 cards based on the 12 objects manually created

    items.forEach(function(item){
        createResultCard(item)
    })


//End of Lesson
//<------------------------->
//<------------------------->
