
function isAnagram(str1, str2) {
    
    let sorter1 = str1.split('').sort().join('');
    let sorter2 = str2.split('').sort().join('');
    
    return sorter1 === sorter2;
}

console.log(isAnagram('listen', 'silent'))
console.log(isAnagram('hey', 'mnh'))
