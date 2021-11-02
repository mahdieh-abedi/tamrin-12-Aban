// 2 )تابعی بنویسید که عدد و توان را گرفته عدد را به توان برساند مثال 2 و 3 را گرفته 8 را برگرداند.

function powNumber(number, pow) {
    if (typeof number !== "number" && typeof pow !== "number") {
        return "please input a number"
    }
    if (pow <= 0) {
        return 1
    }
    return powNumber(number, pow - 1) * number
}

console.log(powNumber(2, 3))
console.log(powNumber(5, 3))