const product = {
    id:"12345",
    brand:"Apple",
    type:"smart phone",
    price: 30000
}

//? .notasyonu ile erişim mümkün
console.log(product.price)
console.log(product.type)

let proPrice = product.price
console.log(proPrice)
proPrice += 5000
console.log(proPrice)
console.log(product.price)

//? square bracket
console.log(product["id"])

//? DESTRUCTURING yöntemi
//?DEğişken isimleri objedeki keylerle aynı olmalıdır

let {id, brand, type, price} = product

console.log("ID", id)
console.log("brand", brand)
console.log("price", price)
price += 5000
console.log(price)
console.log(product.price)