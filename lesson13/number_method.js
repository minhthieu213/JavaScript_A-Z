// toFixed(), toPrecision(), 

// toFixed() - làm tròn số thập phân sau dấu phẩy được chỉ định số chữ số 
// nhưng kết quả trả về có kiểu string

const num1 = 9.345677777
const toFixedNum = num1.toFixed(3)
console.log(`${toFixedNum} - typeof: ${typeof(toFixedNum)} `) // Kết quả: 9.346

// toPrecision() - làm tròn số thập phân được chỉ định số chữ số cả phần nguyên và thập phân
// trả về kiểu string
const num2 = 9.345677777
const toPrecisionNum = num1.toPrecision(3)
console.log(`${toPrecisionNum} - typeof: ${typeof(toPrecisionNum)} `) // Kết quả: 9.35

// toString(radix) - chuyển đổi một số thành chuỗi cơ số(radix) được chỉ định trước VD: hệ 2, hệ 16
const num3 = 5
const toStringNum = num3.toString(2)
console.log('After toString(): ', toStringNum) // Kết quả: 101

// isFinite() kiểm tra xem giá trị có phải một số hữu hạn hay không (trả về boolean)
console.log('isFinite(Infinity): ', isFinite(Infinity)) // Kết quả: true
console.log('isFinite("123"): ', isFinite("123")) // Kết quả: true vì isFinite sẽ tự động chuyển sang dạng number

// Number.isInteger kiểm tra xem giá trị có phải 1 số nguyên hay không
console.log('isInteger(123): ', Number.isFinite(123)) // Kết quả: true
console.log('isFinite("123"): ', Number.isFinite("123")) // Kết quả: false

// Number.isSafeInteger() kiểm tra xem giá trị có phải 1 số nguyên an toàn hay không
// có nghĩa là nằm trong khoảng -(2^53 - 1) đến 2^53 -1
console.log('isSafeInteger(123): ', Number.isSafeInteger(123)) // Kết quả: true
console.log('isSafeInteger(2^53): ', Number.isSafeInteger(Math.pow(2, 53))) // Kết quả: false

// Number.NaN (not a number) thường xuất hiện khi một phép toán không thực hiện được
console.log('0 / 0: ', 0/0) // Kết quả: NaN
console.log('parseInt("abc"): ', parseInt("abc")) // Kết quả: NaN do string k phải kiểu số hợp lệ nếu là "123" thì đc
// NaN không thể so sánh ví dụ (NaN === NaN)

// isNaN() kiểm tra xem giá trị có phải NaN hay không.
console.log('isNaN(NaN): ', isNaN(NaN)) // Kết quả: true
console.log('isNaN("123"): ', isNaN("123")) // Kết quả: false