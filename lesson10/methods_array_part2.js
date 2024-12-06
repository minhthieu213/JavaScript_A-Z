// Phần 2: concat(), slide(), splice(), every(), findIndex(), toString(), join()
// concat(): dùng để nối hai hoặc nhiều mảng lại với nhau, không làm thay đổi các mảng gốc mà trả về một mảng mới
// chứa tất cả các phần tử của mảng được nối.

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const concatResult = arr1.concat(arr2)
console.log('After concat(): ', concatResult)
console.log('After concat() - arr1: ', arr1)
console.log('After concat() - arr2: ', arr2)

// slice(): trả về một mảng con của mảng ban đầu, trả về vị trí startIndex của endIndex(không bao gồm endIndex). 
// Sẽ làm thay đổi mảng gốc ban đầu
const arr3 = [1, 2, 3, 4, 5]
const sliceResult = arr3.slice(1, 4)
console.log('After slice(): ', sliceResult) // Kết quả: [2, 3, 4]

// splice(): dùng để thay đổi nội dung của mảng bằng cách xóa, thay thế hoặc thêm phần tử mới.
// Sẽ thay đổi mảng gốc ban đầu.
// splice(value1, value2, value3)
// * value1 VD: arr4.splice(2) <=> Lấy ra các phần tử còn lại của mảng bắt đầu từ index = 2 
// => Kết quả: After splice = [3, 4, 5], arr4 = [1, 2]
// * value1, value2 VD: arr4.splice(2, 2) <=> Lấy ra 2 phần tử của mảng bắt đầu từ index = 2
// => Kết quả: After splice = [3, 4], arr4 = [1, 2, 5]
// * value1, value2, value3 VD: arr4.splice(2, 2, 'a', 'b') 
// <=> Lấy ra 2 phần tử của mảng bắt đầu từ index = 2 
// và thêm các giá trị trong splice vào mảng ban đầu bắt đầu từ index = 2
// => After splice = [3, 4], arr4 = [1, 2, 'a', 'b', 5] 
const arr4 = [1, 2, 3, 4, 5]
const spliceResult = arr4.splice(2, 2, 'a', 'b', 'c')
console.log('After splice(): ', spliceResult) // Nếu như không truyền gì splice() kết quả: [].
console.log('After splice() arr4: ', arr4)

// every(): kiểm tra xem tất cả các phần tử của mảng có thỏa mãn điều kiện của hàm callback() hay không
// Trả về boolean, nếu tất cả đều thỏa mãn và ngược lại
const arr5 = [1, 2, 3, 4, 5]
const everyResult = arr5.every(num => num > 0)
console.log('After every(): ', everyResult) // Kết quả: true

// findIndex(): trả về chỉ số index của phần tử đầu tiên trong mảng thỏa mãn điều kiện trong hàm callback.
// Nếu không có phần tử nào trả về -1

const arr6 = [1, 2, 3, 4, 5]
const findIndexResult = arr6.findIndex(num => num > 3)
console.log('After findIndex(): ', findIndexResult) // Kết quả: 3 (INDEX CỦA SỐ 4)

// toString(): nối tất cả phần tử trong mảng thành chuỗi
const arr7 = [1, 2, 3, 4, 5]
const toStringResult = arr7.toString()
console.log('After toString(): ', toStringResult) // Kết quả: 1,2,3,4,5

// join(): nối tất cả phần tử trong mảng thành chuỗi như toString() 
// (nhưng có thể chỉ định dấu phân cách)
const arr8 = [1, 2, 3, 4, 5]
const joinResult = arr7.join(' - ')
console.log('After join(): ', joinResult) // Kết quả: 1 - 2 - 3 - 4 - 5