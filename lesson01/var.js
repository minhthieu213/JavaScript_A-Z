// 3 cách khai báo biến trong JavaScript var - let - const

// Var 
// Hoisting: Biến khai báo bằng var sẽ được hoisted( di chuyển lên đầu phạm vi khối của nó) 
// và đồng thời biến đó được khởi tạo giá trị mặc định ban đầu là undefined. 
// Cho nên chúng ta có thể sử dụng biến trước khi khai báo nó mà không gặp lỗi.

console.log('namVar: ', nameVar);
// Khai báo biến
var nameVar = "Minh Thiều!";
console.log('namVar: ', nameVar);

// Tái khai báo: có thể tái khai báo cùng 1 biến var nhiều lần trong 1 phạm vi mà không gặp lỗi
var nameVar = "Minh Thiều - Đang học lập trình!";
console.log('namVar: ', nameVar);

// Gán lại: có thể gắn lại giá trị của biến var.
nameVar = "Minh Thiều 2003";
console.log('namVar: ', nameVar);