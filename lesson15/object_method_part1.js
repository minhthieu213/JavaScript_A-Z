// create(), assign(), defineProperty(), defineProperties(), keys(), value(), entries(), 
// fromEntries()

// Object.create()- tạo ra một đối tượng mới dựa trên một đối tượng cho trước làm nguyên tử - prototype
const person = {
    greet() {
        console.log('Hello there')
    }
}

const minh = Object.create(person)

minh.name = 'Minh Thieu'
console.log(minh)
console.log(person)

// Object.assign() - sao chép tất cả các thuộc tính của một hoặc nhiều đối tượng nguồn ban đầu
// vào đối tượng đích. Kết quả trả về đối tượng đích
// - Nếu thuộc tính đã tồn tại nó sẽ ghì đè
// - Phương thức này sẽ làm thay đổi đối tượng đích, không làm thay đổi đối tượng nguồn
const targetObj = {a: 1, b: 2} // đối tượng đích
const originalObj = {b: 4, c: 5} // đối tượng nguồn
const result = Object.assign(targetObj, originalObj)
console.log('result: ', result)
console.log('targetObj: ', targetObj)
console.log('originalObj: ', originalObj)

// Object.defineProperty() - thêm hoặc sửa một thuộc tính của một đối tượng, và có thể kiểm
// soát chính xác hành vi của đối tượng đó.
const obj1 = {}
Object.defineProperty(obj1, 'name', {
    name: 'Minh Thieu',
    writable:  false // không có phép thay đổi giá trị 
})
console.log(obj1)

// Object.defineProperties() - thêm hoặc thay đổi nhiều thuộc tính trên một đối tượng cùng một lúc,
// và có thể kiểm soát chính xác hành vi của thuộc tính.
const obj2 = {}
Object.defineProperty(obj2, {
    name:{
        value: 'Minh',
        writable: false
    },
    fullName:{
        value: 'Minh Thieu',
        writable: true
    }

})
console.log(obj2)

// Object.keys() - trả về một mảng chứa toàn bộ thuộc tính của đối tượng
const obj3 = { a: 1, b: 2, c: 3}
const keysNum = Object.keys(obj3) // Kết quả: ["a", "b", "c"]

// Object.values() - trả về một mảng chứa toàn bộ giá trị của đối tượng
const obj4 = { a: 1, b: 2, c: 3}
const valuesNum = Object.values(obj4) // Kết quả: ["1", "2", "3"]

// Object.entries() - trả về một mảng chứa toàn bộ [key, value] của đối tượng
const obj5 = { a: 1, b: 2, c: 3}
const entriesNum = Object.entries(obj5) // Kết quả: [["a", 1], ["b", 2], ["c", 3]]

// Object.fromEntries() - chuyển đổi một mảng các cặp [key, value] thành một đối tượng.
// ngược lại entries()
const obj6 = [["a", 1], ["b", 2], ["c", 3]]
const fromEntriesNum = Object.fromEntries(obj5) // Kết quả: { a: 1, b: 2, c: 3}