const words=["malayalam","madam","civic","noon","world","hello","code"];
function isPalindrome(word){
    return word===word.split("").reverse().join("");
}
const palindromes=words.filter(isPalindrome);
function getPalindromeCount(){
    return palindromes.length;
}
export default palindromes;
export {getPalindromeCount};