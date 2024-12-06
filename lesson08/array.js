/* Trong mảng (Array): là một kiểu dữ liệu dùng để lưu trữ danh sách các giá trị
Các giá trị trong mảng có thể là bất kỳ kiểu dữ liệu nào: number, string, object, array
Mảng trong JavaScript có các chỉ số - Index bắt đầu từ 0, nghĩa là phần từ đầu tiên của mảng có index là 0,
phần từ thứ hai có index là 1 và cứ tiếp tục tăng dần. */

// Tạo một array chứa các số 1-5
let numbers = [1, 2, 3, 4, 5]

// Truy cập phần từ đầu tiên của mảng theo index = 0
console.log('First value of array numbers: ', numbers[0]);

// Truy cập phần từ cuối cùng của mảng theo index = array.length - 1
console.log('Last value of array numbers: ', numbers[numbers.length - 1])

// Mảng có thể chứ bất kỳ kiểu dữ liệu nào
let MixedArray = [1, 'Hello', true, undefined, {username: 'Minh'}, [1, 2, 3]]
console.log('Mixed array: ', MixedArray)