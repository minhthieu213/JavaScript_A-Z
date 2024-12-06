/* Có khá nhiều Methods - Phương thức khi xử lý dữ liệu mảng trong JavaScript*/
// Phần 1: length(), push(), pop(), shift(), unshift(), forEach(), map(), filter(),
// find(), reduce, some().

// Tạo một array chứa các số 1-5
let numbers = [1, 2, 3, 4, 5]
console.log('Length of number: ', numbers.length);

// push() - Thêm phần từ vào cuối cùng của mảng
numbers.push(6)
console.log('Array push: ', numbers)

//pop() - Loại bỏ phần tử cuối cùng ra khỏi mảng
numbers.pop()
console.log('After pop: ', numbers)

//shift() - Loại bỏ phần từ đầu tiên ra khỏi mảng
numbers.shift()
console.log('After shift: ', numbers)

//unshift - Thêm phần tử vào đầu của mảng
numbers.unshift(1)
console.log('After unshif: ', numbers)

//forEach() - Lặp qua từng phần tử của mảng
console.log('Start forEach:')
numbers.forEach((number, index) => {
    console.log(`Position: ${index} - Value: ${number} `)
})

//map() - Tạo một mảng mới với các phần tử được biến đổi từ mảng gốc, ví dụ bình phwuong từng phần tử
let squaredNumbers = numbers.map((number) =>{
    return number*number
})

// map() tạo ra một mảng mới không ảnh hưởng đến mảng cũ
console.log("After map() - numbers: ", numbers) // kết quả : 1 2 3 4 5
console.log("After map() - squared numbers: ", squaredNumbers) // kết quả: 1 4 9 16 25

// filter() - Tạo một mảng mới với các phần tử thỏa mãn điều kiện
// cũng không ảnh hưởng đến mảng cũ như map(), ví dụ lấy các số chẵn
let evenNumbers = numbers.filter((number) => {
    return number % 2 === 0
})
console.log('After filer() - evenNumbers: ', evenNumbers) // Kết quả: [2, 4]

// find() - Tìm phần từ đầu tiên thỏa mãn điều kiện
let foundNumbers = numbers.find((number) => {
    return number > 3;
})
console.log('After find() - foundNumber: ', foundNumbers) // Kết quả: 4

// reduce() - Tính toán một giá trị duy nhất từ mảng, ví dụ tính tổng các số trong mảng
let sum = numbers.reduce((total, number) => {
    return total + number
}, 0)
console.log('After reduce() - sum: ', sum) // Kết quả: 15

// some() - Kiểm tra xem mảng có ít nhất một phần tử thỏa mãn điều kiện hay không, trả về Boolean
let hasEvenNumber = numbers.some((number) => {
    console.log('Test number some(): ', number)
    return number % 2
})
console.log('After some() - some(): ', hasEvenNumber) // Kết quả: true