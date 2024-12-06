// Object: Đối tượng bao gồm key và value, mỗi key là một chuỗi và value của key đó là một kiểu dữ liệu bất kỳ.

// Có 2 cách tạo object: object literal và new Object()

// Cách khai báo 1
let developer = {
    username: 'MinhThieu',
    age: 18,
    hobbies: ['playing games', 'reading', 'coding'],
    positions:{
        frontEnd: ['React', 'Next.js'],
        backEnd: ['Node.js', 'Express']
    } 
}

console.log(developer)

// Cách khai báo 2
let developer2 = new Object()
developer2.username = 'Minh Thieu'
developer2.age = 18