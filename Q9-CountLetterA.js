function countLetterA(str) {
    let lower = str.toLowerCase();
    let count = 0;
    
    for(let i = 0; i<lower.length; i++) {
        if(lower[i] === 'a') {
            count++;
        }
    }
    
    return count;
}

console.log(countLetterA("Ashakiran"))
