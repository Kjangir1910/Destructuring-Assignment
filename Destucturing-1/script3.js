let x = 5
let y = 10

function swipeValues (x, y) {
 [x, y] = [y, x]

 return [x, y]

}

const swipedValues = swipeValues(x, y)
console.log (swipedValues)