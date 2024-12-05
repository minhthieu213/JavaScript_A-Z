// Sự khác nhau về scope giữa var - let - const
// Scope được xác định bởi 1 cặp dấu {}

const testScope = () => {
    {
        var scopeVar = "MinhThieu - Var";
        let scopeLet = "MinhThieu - Let";
        const scopeConst = "MinhThieu - Const";

        console.log("scopeVar: ", scopeVar);
        console.log("scopeLet: ", scopeLet);
        console.log("scopeConst: ", scopeConst);
    }
    // console.log("scopeVar: ", scopeVar);
    // console.log("scopeLet: ", scopeLet);
    // console.log("scopeConst: ", scopeConst);
}

testScope()


// Kết luận về phạm vi khối (block scope)
// Biến let và const có phạm vi trong 1 khối, nghĩa là nó chỉ tồn tại trong khối mã 
// mà nó được khai báo

// Biến var có 2 trường hợp:
// * Phạm vi toàn cục nếu nó được khai báo ngoài cùng của file
// * Phạm vi cụ thể nếu nó được khai báo trong 1 hàm. 
// Điều này khiến cho var có phạm vi lỏng lẻo 

// Fact: Var ra đời từ ES5 từ tháng 5 năm 1995, let và const ra đời từ tháng 6 năm 2015