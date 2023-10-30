const str = 'My Name is Kuldeep Jangid and One day i will be an developer my';


const countWords = (st) => {

    const wordCount = new Map();

    const splitedWords = st.split(' ');

    for(const word of splitedWords){
            if(wordCount.has(word.toLowerCase()))
            wordCount.set(word.toLowerCase(), wordCount.get(word)+1);
            else
            wordCount.set(word.toLowerCase(), 1);  
    }
    

    return wordCount;
}


const words = countWords(str);
console.log('words => ', words);
