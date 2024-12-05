/* Các giá trị tham chiếu không được lưu trữ trực tiếp trong ngăn xếp(Stack) mà sẽ tham chiếu đến địa chỉ của đối tượng trong Heap Memory
    Các giá trị tham chiếu có thể được thay đổi sau khi chúng được tạo ra
    Khi gán một đối tượng A cho B, khi cả A và B sẽ tham chiếu đến cùng một đối tượng, chứ không tạo ra bản sao độc lập riêng biệt.
     
    Reference Type bao gồm các kiểu dữ liệu phổ biến sau:
 */

//Object(Đối tượng): Đại diện cho một tập hợp các thuộc tính và phương thức.
let developer = {
    username: 'MinhThieu',
    age: 21,
    greet: function(){
        console.log("Type 1: Hello, I am" + this.usernam + ",age: " + this.age)
        console.log(`Type 2: Hello, I am ${this.username} ,age: ${this.age}`)
    }
}

developer.greet()
console.log('username: ', developer.username)
console.log('age: ', developer.age)
console.log('-----------------------')
//Array(Mảng): Một loại đối tượng đặc biệt để lưu trữ danh sách các giá trị.
let colors = ['red', 'black', 'pink', 'white']

console.log(colors);
console.log('color[0]: ',colors[0]);
console.log('color[0]: ',colors[1]);
console.log('-----------------------')
//Function: Đại diện các hàm xử lý, cũng được coi là một loại đối tượng đặc biệt.
function weatherCity(city){
    console.log(`The weather in ${city} is really hot today`)
}
weatherCity('Ha noi')