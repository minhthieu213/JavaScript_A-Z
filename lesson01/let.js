// Let
// Hoisting: Biến khai báo bằng let sẽ được hoisted( di chuyển lên đầu phạm vi khối của nó) 
// nhưng lại không được khởi tạo giá trị mặc định nào cả. Nên không thể sử dụng biến trước
// khi khai báo

// console.log('nameLet: ', nameLet);
// Khai báo biến
let nameLet = 'Minh Thiều!';
console.log('nameLet: ', nameLet);

// Tái khai báo: không thể khai báo cùng 1 biến nhiều lần với let
// let nameLet = 'Minh Thiều 2003';
// console.log('nameLet: ', nameLet);

// Gán lại: Có thể gán lại giá trị của biến let
nameLet = 'Minh Thiều - Đang học lập trình!';
console.log('nameLet: ', nameLet);