// Phần 2: parseFloat(), parseInt(), Number.prototype.valueOf(), Number.MAX_VALUE, Number.MIN_VALUE,
// Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY

// parseFloat() - phân tích một chuỗi và trả về một số thực. Nó sẽ phân tích từ trái sang phải
// đến khi gặp một ký tự không hợp lệ mới dừng lại.

const num1 = '19.988abc'
const parseFloatNum = parseFloat(num1)
console.log('After parseFloat: ', parseFloatNum)

// parseFloat() - phân tích một chuỗi và trả về một số nguyên. Nó sẽ phân tích từ trái sang phải
// đến khi gặp một ký tự không hợp lệ mới dừng lại.

const num2 = '19abc'
const parseIntNum = parseFloat(num2)
console.log('After parseInt: ', parseIntNum)

// valueOf() - trả về giá trị gốc của đối tượng number.
console.log('new Date().valueOf(): ', new Date().valueOf()) // Kết quả: 1733572169594
const value = new Number(124) // typeof: object
console.log('valueOf: ', value.valueOf()) // Kết quả: 124 - typeof: number

// MAX_VALUE - giá trị lớn nhất mà JavaScrpit có thể đại diện.
console.log('Max_value: ', Number.MAX_VALUE)

// MIN_VALUE - giá trị nhỏ nhất mà JavaScrpit có thể đại diện.
console.log('Min_value: ', Number.MIN_VALUE)

// POSITIVE_INFINITY - đại diện cho giá trị vô hạn dương (Infinity) của JavaScrpit
console.log('POSITIVE_INFINITY: ', Number.POSITIVE_INFINITY)

// NEGATIVE_INFINITY - đại diện cho giá trị vô hạn âm (- Infinity) của JavaScrpit
console.log('POSITIVE_INFINITY: ', Number.NEGATIVE_INFINITY)
