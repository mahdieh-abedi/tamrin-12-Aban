// 3 )تابعی بنویسید که لیست تو در تو را بگیرد و تعداد اعداد )integer )صحیح را برگرداند
//     [[[5], 3], 0, 2, ['foo'], [], [4, [5.1, 6]]]
// 6 را برگرداند
const arr = [[[5], 3], 0, 2, ['foo'], [], [4, [5.1, 6]]]
let result = []
let int = 0

function findInteger(input) {
     result = []
    if (input.length === 0) {
        return int
    }
    for (let value of input) {
        if (Number.isInteger(value) === true) {
            int++
        }
        if(typeof value==='object'){
            result=[...result,...value]
        }
    }
    return findInteger(result)
}

console.log(findInteger(arr))
