// reverse a string
// using for loop

// function reverseString(str) {
//     let reversedString = ""
//     for(let i = str.length - 1; i >= 0; i--) {
//         reversedString += str[i]
//     }
//     return reversedString
// }

// using while loop
// function reverseString(string) {
//     let reversed = ""
//     let length = string.length - 1
//     while (length >= 0) {
//         reversed += string[length]
//         length = length - 1
//     }
//     return reversed
// }

// using recursive approach
function recursiveReverseString(string) {
    // base case check
    if (string === "") {
        return string
    }

    return string[string.length - 1] + recursiveReverseString(string.substring(0, string.length - 1))
}