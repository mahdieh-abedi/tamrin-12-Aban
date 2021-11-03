// 3 )تابعی بنویسید که لیست تو در تو را بگیرد و تعداد اعداد )integer )صحیح را برگرداند
//     [[[5], 3], 0, 2, ['foo'], [], [4, [5.1, 6]]]
// 6 را برگرداند
const arr = [[[5], 3], 0, 2, ['foo'], [], [4, [5.1, 6]]]

function findInteger(input) {
    let result = []
    for (let i = 0; i < input.length; i++) {
        if (Array.isArray(input[i])!==true && Number.isInteger(input[i]) === true) {
            result.push(input[i])
        }
       if(Array.isArray(input[i])===true) {
           input=input[i]
           return findInteger(input[i])
       }
    }
    return result
}

console.log(findInteger(arr))
