//
/*
Questions:
~ What am I doing?
(1)Create container for the divs
(2)Create a row for the column divs
(3)Create columns to hold the object information
()Create an array of object information to place into div containers
()Update div containers with object information
~ How am I going to do this?
~ Why am I doing this?
*/
//
// //step 1
// var container = document.createElement('div')
// console.dir(container)
// //Add a classList to the container of the rows of the columns
// container.classList.add('container')
// container.classList.add('text-center')
//
// //step 2 create the rows for the container
// var rows = document.createElement('div')
// //Add a classList of row to the row div which the columns will be placed within
// rows.classList.add('row')
// //Append row to the container div created
// container.appendChild(rows)
//
// // Declare your builder function alternative
// function createResultCard(item) {
//
//   var card = document.createElement('div')
//   card.className = 'card col-sm-3'
//
//   var cardImage = document.createElement('img')
//   cardImage.setAttribute('src', item.image)
//   cardImage.setAttribute('alt', 'card image cap')
//   cardImage.setAttribute('width', '100%')
//   cardImage.className = 'card-img-top'
//   cardImage.style.textOverflow = 'ellipsis'
//   card.appendChild(cardImage)
//
//   var cardBlock = document.createElement('div')
//   cardBlock.classList.add('card-block')
//   card.appendChild(cardBlock)
//
//   var cardText = document.createElement('p')
//   cardText.className = 'card-title small overflow-ellipsis'
//   cardText.innerHTML = item.title
//   cardBlock.appendChild(cardText)
//
//   var cardFootText = document.createElement('col-sm-6')
//   cardFootText.className = 'card-text text-left col-sm-6 small text-muted'
//   cardFootText.innerHTML = item.seller
//   cardBlock.appendChild(cardFootText)
//
//   var cardFootCurr = document.createElement('col-sm-6')
//   cardFootCurr.className = 'card-text text-right col-sm-6 small'
//   cardFootCurr.innerHTML = item.price
//   cardBlock.appendChild(cardFootCurr)
//
//   document.querySelector('#searchResults').appendChild(card)
// }
//
// //<--------------------------This code works below--------------------->
// // // Declare your builder function
// // function createResultCard(item) {
// //
// //   //step 3 create the column template col-sm-3 to display containers on a row
// //   var colCard = document.createElement('div')
// //   colCard.classList.add('col-sm-3')
// //
// //   //Create the first row in the card for the image
// //   var colRow = document.createElement('div')
// //   colCard.appendChild(colRow)
// //   var colRowImage = document.createElement('img')
// //   colRowImage.setAttribute('src', item.image)
// //   colRowImage.classList.add('cardImage')
// //   colRow.appendChild(colRowImage)
// //   // colRow.innerHTML = 'Image'
// //
// //   //Create the second row in the card to hold the paragraph information
// //   var colRowPara = document.createElement('div')
// //   colCard.appendChild(colRowPara)
// //   colRowPara.innerHTML = item.title
// //
// //   //Create the third row in the card to hold the two columns with text and currency
// //   var colRowTextCurr = document.createElement('div')
// //   colCard.appendChild(colRowTextCurr)
// //
// //   //Create the third row left side to hold the text and give half the space
// //   var colRowText = document.createElement('div')
// //   colRowTextCurr.appendChild(colRowText)
// //   // colRowText.classList.add('text-left')
// //   // colRowText.classList.add('col-sm-6')
// //   colRowText.className = 'text-left col-sm-6'
// //   colRowText.innerHTML = item.seller
// //
// //   //Create the third row right side to hold the currency and give half the space
// //   var colRowCurr = document.createElement('div')
// //   colRowTextCurr.appendChild(colRowCurr)
// //   // colRowCurr.classList.add('text-right')
// //   // colRowCurr.classList.add('col-sm-6')
// //   colRowCurr.className = 'text-right col-sm-6'
// //   colRowCurr.innerHTML = item.price
// //
// //   document.querySelector('#searchResults').appendChild(colCard)
// // }
// //<--------------------------This code works above--------------------->
//
//
// // Call your builder function, one at a time to make 12 search result cards, each with different data (image can be the same at this point if you want)
// // Don't forget you can use a for() loop, or make an array of objects even and use a items.forEach() loop.
// var arrayObjects = [
//   {
//     image: /*'img/boardgame.jpg'*/'http://unsplash.it/178?image=1',
//     title: '01Vintage Board Game Art Wall Home Decor',
//     seller: '01franz66',
//     price: '$' + 10.00
//   },
//   {
//     image: /*'img/boardgame.jpg'*/'http://unsplash.it/100?image=1',
//     title: '02Vintage Board Game Art Wall Home Decor',
//     seller: '02franz66',
//     price: '$' + 20.00
//   },
//   {
//     image: /*'img/boardgame.jpg'*/'http://unsplash.it/100?image=1',
//     title: '03Vintage Board Game Art Wall Home Decor',
//     seller: '03franz66',
//     price: '$' + 30.00
//   },
//   {
//     image: /*'img/boardgame.jpg'*/'http://unsplash.it/100?image=1',
//     title: '04Vintage Board Game Art Wall Home Decor',
//     seller: '04franz66',
//     price: '$' + 40.00
//   },
//   {
//     image: /*'img/boardgame.jpg'*/'http://unsplash.it/100?image=1',
//     title: '05Vintage Board Game Art Wall Home Decor',
//     seller: '05franz66',
//     price: '$' + 50.00
//   },
//   {
//     image: /*'img/boardgame.jpg'*/'http://unsplash.it/100?image=1',
//     title: '06Vintage Board Game Art Wall Home Decor',
//     seller: '06franz66',
//     price: '$' + 50.00
//   },
//   {
//     image: /*'img/boardgame.jpg'*/'http://unsplash.it/100?image=1',
//     title: '07Vintage Board Game Art Wall Home Decor',
//     seller: '07franz66',
//     price: '$' + 60.00
//   },
//   {
//     image: /*'img/boardgame.jpg'*/'http://unsplash.it/100?image=1',
//     title: '08Vintage Board Game Art Wall Home Decor',
//     seller: '08franz66',
//     price: '$' + 50.00
//   },
//   {
//     image: /*'img/boardgame.jpg'*/'http://unsplash.it/100?image=1',
//     title: '09Vintage Board Game Art Wall Home Decor',
//     seller: '09franz66',
//     price: '$' + 40.00
//   },
//   {
//     image: /*'img/boardgame.jpg'*/'http://unsplash.it/100?image=1',
//     title: '10Vintage Board Game Art Wall Home Decor',
//     seller: '10franz66',
//     price: '$' + 30.00
//   },
//   {
//     image: /*'img/boardgame.jpg'*/'http://unsplash.it/100?image=1',
//     title: '11Vintage Board Game Art Wall Home Decor',
//     seller: '11franz66',
//     price: '$' + 20.00
//   },
//   {
//     image: /*'img/boardgame.jpg'*/'http://unsplash.it/100?image=1',
//     title: '12Vintage Board Game Art Wall Home Decor',
//     seller: 'jack66',
//     price: '$' + 10.00
//   }
// ];
//
// arrayObjects.forEach(function(item){
//   createResultCard(item)
// })
//Start the commenting here and go up...
//Retry the code 10.19.2016 from 10.18.2016 Homework assignment
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
  return '$' + Math.round((Math.random()*100)) + '.00'
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
