// 1 )تابعی بنویسید به نام contain که مقداری را در یک object تودرتو جستجو می کند. اگر object حاوی آن مقدار باشد، مقدار
// true را برمی گرداند. مثال:
// 20 , Object را دریافت کرده true را برمیگرداند

const obj = {
    d: {
        c: {
            b: {
                a: {
                    number: 20,
                    str: 'hi',
                }
            }
        }
    }
}

function contain(object, input) {
    let arr=Object.values(object)
    for (let i = 0; i < Object.values(object).length; i++) {
        if (arr[i] === input) {
            return true
        }
        if(typeof arr[i]==='object'){
           return contain(arr[i],input)
        }
    }
    return false
}
console.log(contain(obj, 20))
console.log(contain(obj, 'hi'))








