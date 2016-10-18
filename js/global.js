//
/*
Questions:
~ What am I doing?
()Create container for the divs
()Create a row for the column divs
()Create div containers to hold object information
()Create an array of object information to place into div containers
()Update div containers with object information
~ How am I going to do this?
~ Why am I doing this?
*/

var container = document.createElement('div')


// Declare your builder function
function createResultCard(item) {
  var card = document.createElement('div')
  card.classList.add('col-sm-4')

  // your code here to build up the card
  // keep in mind you'll be nesting tags

  document.querySelector('#searchResults.row').appendChild(card)
}

// Call your builder function, one at a time to make 12 search result cards, each with different data (image can be the same at this point if you want)
// Don't forget you can use a for() loop, or make an array of objects even and use a items.forEach() loop.
createResultCard({
  image: 'img/boardgame.jpg',
  title: 'Vintage Board Game Art Wall Home Decor',
  seller: 'franz66',
  price: 15.00
})
