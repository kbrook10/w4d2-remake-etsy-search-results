
//Create the card template
function createResultCard(item){
    var col= document.createElement('div')
    col.className = 'col-sm-3'

    var card = document.createLement('div')
    card.className = 'card'
    col.appendChild(card)

    var img = document.createElement('img')
    img.setAttribute('src', 'http://unsplash.it/200?random')
    card.appendChild(img)

    var span = document.createElement('img')
    span.innerHTML = 'lorem'
    card.appendChild(span)

    var row = document.createElement('div')
    row.className = 'row'
    card.appendChild(row)

    var colLeft = document.createElement('div')
    colLeft.classname = 'col-xs-6 text-muted'
    colLeft.innerHTML = 'sellername'
    row.appendChild(colLeft)

    var colRight = document.createElement('div')
    colRight.classname = 'col-xs-6 text-right text-success'
    colRight.innerHTML = '$75.00'
    row.appendChild(colRight)

    document.querySelector('#searchResults').appendChild(col)
}

createResultCard()
createResultCard()
createResultCard()
createResultCard()
createResultCard()
createResultCard()
