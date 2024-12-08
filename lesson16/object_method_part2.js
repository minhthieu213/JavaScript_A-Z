// freeze(), isFrozen(), seal(), isSealed(), is(), hasOwn(), groupBy()

// Object.freeze() - đóng băng một đối tượng có nghĩa là không cho phép thêm, sửa, xóa đối
// tượng đó.
const obj1 = {a: 1, b: 2}
Object.freeze(obj1)

obj1.c = 3 // thêm
obj1.a = 3 // sửa
delete obj1.b // xóa
console.log(obj1) // Kết quả: {a: 1, b: 2}

// Object.isFrozen() - kiểm tra xem một đối tượng đã đóng băng hay chưa. Trả về boolean
const obj2 = {a: 1, b: 2, c: 3}
Object.freeze(obj2)
console.log(Object.isFrozen(obj2)) // Kết quả: true

// Object.seal() - niêm phong một đối tượng nghĩa là không có thêm hoặc xóa 
// nhưng được phép sửa thuộc tính của một đối tượng

const obj3 = {a: 1, b: 2}
Object.seal(obj3)

obj3.c = 3 // thêm
obj3.a = 3 // sửa
delete obj3.b // xóa
console.log(obj3) // Kết quả: {a: 3, b: 2}

// Object.isSealed() - kiểm tra xem đối tượng đã được niêm phong chưa
const obj4 = {a: 1, b: 2}
Object.seal(obj4)
console.log(Object.isSealed(obj4))

// Object.is() - so sánh xem 2 giá trị có giống nhau hay không.
// Thường để so sánh NaN hay (+0 và -0)
console.log('Object.is(NaN, NaN): ', Object.is(NaN, NaN)) // true
console.log('Object.is(NaN, NaN): ', Object.is(-0, 0)) // true

// Object.hasOwn - kiểm tra xem một đối tượng có thuộc tính cụ thể hay không
const person = {name: 'Minh', age: 18}
console.log('After hasOwn() > person: ', Object.hasOwn(person, 'name')) // true

// Object.groupBy() - nhóm các giá trị dựa trên tiêu chí cụ thể.
// Mới xuất hiện từ 3/2024 
const inventories = [
    { name: 'bananas', type: 'fruit', quantity: '10'},
    { name: 'cherries', type: 'fruit', quantity: '10'},
    { name: 'fish', type: 'meat', quantity: '10'},
    { name: 'goat', type: 'meat', quantity: '10'},
    { name: 'cabbage', type: 'vegetables', quantity: '10'}
];

const groupByResult = Object.groupBy(inventories, (item) => item.type)
console.log(groupByResult)

/* fruit:[
    { name: 'bananas', type: 'fruit', quantity: '10'},
    { name: 'cherries', type: 'fruit', quantity: '10'}
  ],
  meat:[ 
    { name: 'fish', type: 'meat', quantity: '10'},
    { name: 'goat', type: 'meat', quantity: '10' }
  ],
  vegetables: [ { name: 'cabbage', type: 'vegetables', quantity: '10' }]
 */