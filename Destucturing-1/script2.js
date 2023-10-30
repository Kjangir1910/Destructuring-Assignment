const arr = [1, 2, 3, 1, 5, 8, 3];

const removeDuplicates = (arr) => {
    const newSet = new Set(arr);
    return newSet;
}

const uniqueNumbers = Array.from(removeDuplicates(arr));

console.log(uniqueNumbers);



