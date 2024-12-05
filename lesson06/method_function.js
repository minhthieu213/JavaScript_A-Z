// Method function(hàm phương thức): là hàm được định nghĩa/ khai báo bên trong đối tượng, được coi là một phương thức của đối tượng.

let developer = {
    username: 'MinhThieu',
    age: 18,
    greet: function(){
        console.log(`Hi World, I am ${this.username} from Viet Nam`)
    },
    greetArrowFn: () =>{
        console.log(`Hi World, I am ${this.username} from Viet Nam`) // Arrow function sẽ không có this
    }
}

developer.greet()
developer.greetArrowFn()