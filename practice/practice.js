// function fibo(input) {
//     if (typeof input !== "number") {
//         return "please input a number"
//     }
//     if (input === 1 || input === 0) {
//         return input
//     }
//     return fibo(input - 1) + fibo(input - 2)
// }
//
// // console.log(fibo(6))
//
// function recursiveSummation(input) {
//     if (typeof input !== "number") {
//         return "please input a number"
//     }
//     if (input <= 1) {
//         return input
//     }
//     return recursiveSummation(input - 1) + (input)
// }
//
// // console.log(recursiveSummation(3))
//
// function isPalindrome(input) {
//     if (typeof input == "number") {
//         input = input.toString()
//     }
//     if (input.length === 1 || input.length === 0) {
//         return true
//     }
//     if (input[0] === input[input.length - 1]) {
//         return isPalindrome(input.substring(1, input.length - 1))
//     }
//     return false
// }
//
// const mergeSort = (list) => {
//     if (list.length <= 1) {
//         return list
//     }
//     const mid = list.length / 2
//     const left = list.splice(0, mid)
//     return merge(mergeSort(left), mergeSort(list))
//
// }
//
// const merge = (left, right) => {
//     let arr = []
//     while (left.length && right.length) {
//         if (left[0] > right[0]) {
//             arr.push(right.shift())
//         } else {
//             arr.push(left.shift())
//         }
//     }
//
//     return [...arr, ...left, ...right]
// }
//
// console.log(mergeSort([-5, 10, -1, 5, 15]))

// a97 e i o u

// function findFirstVowel(char){
//     let string=['a','e','i','o','u']
//     let sum=char.charCodeAt(char)
//     let m=0
//     for(let i=0; i<string.length;i++)
//     if(char.charCodeAt(char)-(string[i+1].charCodeAt(i+1))>char.charCodeAt(char)-(string[i].charCodeAt(i))){
//         m=string[i]
//     }
//     return m
// }
// console.log(findFirstVowel("b"))

function sortZero(list){
    let arr1=[]
    let arr2=[]
    for(let key in list){
        if (list[key]!==0) {
            arr1.push(list[key])
        }
        else{
            arr2.push(list[key])
        }
    }
    return [...arr1,...arr2]
}
console.log(sortZero([1,2,0,0,3,0,5,0,6]))


