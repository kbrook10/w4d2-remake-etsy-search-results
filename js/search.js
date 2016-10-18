//Build up the HTML
//<------------------------->
//<------------------------->

//Create variable to create HTML element
var container = document.createElement('div');
// console.dir(container)

//Add the container element created to the Body tag
//'Append Child' sticks element created inside the Body tag at the bottom
// document.body.appendChild(container) --> using just the body

//'Append Child' inside div created in Body element
container.classList.add('container');
//Create row div
var row = document.createElement('div');
row.classList.add('row');
container.appendChild(row);

//Create column div 1
var col = document.createElement('div');
col.classList.add('col-sm-4');
// col.classList.add('text-center')
//Create Attribute for the columns col-sm-4
col.setAttribute('title', 'A fancy column');
var col2 = col.cloneNode(true);
var col3 = col.cloneNode(true);

//<...This was the original way to create columns
//<---------------------------------------------->
// //Create column div 2
// var col = document.createElement('div')
// col.classList.add('col-sm-4')
// //Add string inside tag
// col.innerHTML = 'Column B'
// row.appendChild(col)
//
// //Create column div 3
// var col = document.createElement('div')
// col.classList.add('col-sm-4')
// //Add string inside tag
// col.innerHTML = 'Column C'
// row.appendChild(col)
//<...This was the original way to create columns
//<---------------------------------------------->

//Add string inside clone tags
col.innerHTML = 'Column A';
col2.innerHTML = 'Column B';
col3.innerHTML = 'Column C';

//Append clone columns to rows
row.appendChild(col);
row.appendChild(col2);
row.appendChild(col3);

//Create <input type = 'text' id = 'search' placeholder='Search...'>
/*<div class="input-group">
  <input type="text" class="form-control" placeholder="Search for...">
  <span class="input-group-btn">
    <button class="btn btn-default" type="button">Go!</button>
  </span>
</div><!-- /input-group -->
*/

var searchDiv = document.createElement('div')
searchDiv.classList.add('input-group')

var span = document.createElement('span')
span.classList.add('input-group-btn')

var button = document.createElement('button')
button.type = 'button'
button.className = 'btn btn-default'
button.innerHTML = 'Search!!!'

var searchInput = document.createElement('input')
searchInput.type = 'text'
searchInput.placeholder = 'Search...'
searchInput.id = 'search'
searchInput.className = 'form-control'
//Add the searchInput to the top of the container div
// container.prepend(searchInput);
// container.appendChild(searchInput);

searchDiv.appendChild(searchInput)
span.appendChild(button)
searchDiv.appendChild(span)
container.insertBefore(searchDiv, row);
container.insertBefore(document.createElement('br'), searchDiv);
container.insertBefore(document.createElement('br'), row);

//Listening on Event for the click and enter key being pressed
button.addEventListener('click', search )
searchInput.addEventListener('keypress', searchEnter)

    function searchEnter(event){
        if (event.key === 'Enter'){
            search()
        }
    }
    function search(){
        // alert('You searched!') --> initial code but not used anymore
        var searchTerm = document.querySelector('#search').value
        // alert(searchTerm) --> initial code but not used anymore
        var searchResult = {
            term: searchTerm,
            image: 'http://unsplash.it/400?random',
        }
        createSearchResult(searchResult)
        //This clears out the search bar after we enter a value
        document.querySelector('#search').value = ''
    }

function createSearchResult(result) {
    var card = document.createElement('div')
    card.className = 'well'
    card.innerHTML = result.term
    document.querySelector('.col-sm-4:first-child').appendChild(card)
}

document.getElementById('searchResults').appendChild(container)







//End of Lesson
//<------------------------->
//<------------------------->
