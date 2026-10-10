// String Assignments
// ========================
// 1.Check if a String is a Palindrome 
// Problem Statement: 
// Write a Java method to check if a string is a palindrome. 
// Sample Input: 
// str = "madam" 
// Sample Output: 
// madam is a palindrome. 

function palindrome(){
    let str = "madam" 
    let reverseStr = ""
    
    for(let i=str.length-1;i>=0;i--){
        reverseStr += str.charAt(i);
    }
    if(reverseStr === str){
        console.log(str+" is a palindrome");
    }else{
        console.log(str+" is Not a palindrome");
    }
}
palindrome()

// 2. Count Vowels and Consonants 
// Problem Statement: 
// Write a Java program that counts vowels in a given string. 
// Sample Input: 
// str = "Hello World" 
// Sample Output: 
// Vowels: 3 
let str = "Hello World" 
let count = 0
for(let i=0;i<=str.length-1;i++){
    let ch = str.charAt(i);
    if(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u"){
        count++
    }
}
console.log("Vowels- "+count);


// 3. Find Duplicate Words in a Sentence 
// Problem Statement: 
// Write a Java program that reads a sentence (string), splits it into words (array), and finds duplicate 
// words along with their counts. 
// Sample Input: 
// "Java is great and Java is powerful"

let str = "Java is great and Java is powerful"
let duplicateWords = [];
let strArray = str.split(" ")
for(let i =0;i<=strArray.length-1;i++){
    let count = 0;
    for(let j =0;j<=strArray.length-1;j++){
        if(strArray[i] === strArray[j]){
            count++
        }
    }
    if(count >=2 && !duplicateWords.includes(strArray[i])){
        duplicateWords.push(strArray[i])
    }
}
console.log(duplicateWords);



// 4. Convert a Sentence to Word Array and Sort Alphabetically 
// Problem Statement: 
// Given a string sentence, split it into words and return them sorted alphabetically. 
// Sample Input: 
// "zebra apple mango banana" 
// Sample Output: 
// [apple, banana, mango, zebra] 
// Hint: Use Arrays.sort(array to sort)

let str = "zebra apple mango banana" 
let strArray = str.split(" ")
console.log(strArray.sort());
