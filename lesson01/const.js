// Const
// Hoisting: Biến khai báo bằng const sẽ được hoisted( di chuyển lên đầu phạm vi khối của nó) 
// nhưng lại không được khởi tạo giá trị mặc định nào cả. Nên không thể sử dụng biến trước
// khi khai báo

// console.log('nameConst: ', nameConst);
//Khai báo biến
const nameConst = 'Minh Thiều!';
console.log('nameConst: ', nameConst);

// Tái khai báo: không thể khai báo cùng 1 biến nhiều lần với let
// const nameConst = 'Minh Thiều 2003';
// console.log('nameConst: ', nameConst);

// Gán lại: Const không cho phép gán lại giá trị
// nameConst = 'Minh Thiều - Đang học lập trình!';
// console.log('nameConst: ', nameConst);