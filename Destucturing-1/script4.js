function extractElements (arr) {
    const  [first, second, ...rest] = arr
    const last = rest.pop()

    return [first, second, last]
}

let array = [1, 2, 3, 4, 5]
const extractedarray = extractElements(array)
console.log(extractedarray)