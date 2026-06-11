
function countVowels(str) {
    let count = 0;
    let vowel = ['a','e', 'i', 'o', 'u'];
    
    for(let i =0; i<str.length; i++) {
        if(vowel.includes(str[i])) {
            count++;
        }
    }
    
    return count;
}

console.log(countVowels("javascript"));
