// Bitwise operator: Toán tử dùng để thực hiện các phép toán bit trên hệ nhị phậm

let x = 5 // 0101
let y = 3 // 0011

console.log(x & y) // AND: 0001
console.log(x | y) // OR: 0111
console.log(x ^ y) // XOR: 0110
console.log(~x) //NOT: 1010
console.log(x << 1) //LEFT SHIFT: 1010(dịch trái 1 đơn vị)
console.log(x >> 1) //RIGHT SHIFT: 0010(dịch phải 1 đơn vị)