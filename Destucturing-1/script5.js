function  findMinMax (arr) {
    max = Math.max(...arr)
    min = Math.min(...arr)

    return {max, min}  
}

const array = [5, 2, 7, 1, 9]

const minMaxValues = findMinMax(array)

console.log (minMaxValues)