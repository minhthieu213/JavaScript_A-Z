// Constructo fucntion(hàm khởi tạo): sử dụng để tạo đối tượng mới. Thường được kết hợp với từ khóa new.

function developer(username){
    this.username = username
    this.greet = function(){
        console.log(`Hi bro, I am ${this.username} from Viet Nam`)
    }
}

const MinhThieuReal = new developer('Minh Thieu Real')
MinhThieuReal.greet()

const MinhThieuFake = new developer('Minh Thieu Fake')
MinhThieuFake.greet()