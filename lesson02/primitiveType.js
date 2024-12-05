/* Nhóm kiểu dữ liệu nguyên thủy _ Primitive Types
    Các giá trị nguyên thủy được lưu trữ trực tiếp trong ngắn xếp(Stack).
    Khi một giá trị nguyên thủy được gán cho một biến, giá trị này không thể thay đổi.
    Khi thay đổi giá trị của biến, một bản sao độc lập của giá trị đó sẽ được tạo ra.
    Primitive Types bao gồm các loại phổ biến sau:
 */

// Number: Đại diện cho các số, bao gồm cả số nguyên và số thập phân
let age = 17
let producePrice = 10.99
console.log('age: ', age)
console.log('typeof age: ', typeof age)
console.log('producePrice: ', producePrice)
console.log('typeof producePrice: ', typeof producePrice)
console.log('----------------------')

//String: Đại diện cho các chuỗi ký tự
let username = 'MinhThieu'
console.log('username: ', username)
console.log('typeof username: ', typeof username)
console.log('----------------------')
//Boolean: Đại diện cho các giá trị đúng(true) hoặc sai (false)
let isAvailable = true
console.log('isAvailable: ', isAvailable)
console.log('typeof isAvailable: ', typeof isAvailable)

let isFree = false
console.log('isFree: ', isFree)
console.log('typeof isFree: ', typeof isFree)
console.log('----------------------')

//Null: Đại diện cho một giá trị rỗng không có giá trị
let nullValue = null
console.log('nullValue: ', nullValue)
console.log('typeof nullValue: ', typeof nullValue)// Một bug của javaScript
console.log('----------------------')

//Undefined: Đại diện cho một biến chưa được gán giá trị.
let undefinedValue
console.log('undefinedValue: ', undefinedValue)
console.log('typeof undefinedValue: ', typeof undefinedValue)// Một bug của javaScript
console.log('----------------------')

//Symbol: Xuất hiện từ ES6 - 2015 đại diện cho một giá trị unique: độc nhất và bất biến,
//thường được sử dụng làm khóa hoặc id cho các đối tượng
let userId = Symbol('Id001')
console.log('userId: ', userId)
console.log('typeof userId: ', typeof userId)
console.log('----------------------')

//BigInt: Xuất hiện từ ES2020 đại diện cho kiểu số nguyên có giá trị cực lớn
let firstBigInt = 9007199254740991n;
console.log('firstBigInt: ', firstBigInt)
console.log('typeof firstBigInt: ', typeof firstBigInt)

let secondBigInt = BigInt(9007199254740991)
console.log('secondBigInt: ', secondBigInt)
console.log('typeof secondBigInt: ', typeof secondBigInt)
console.log('----------------------')