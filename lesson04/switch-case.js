// Switch case: Thực hiện một trong nhiều khối mã dựa trên giá trị của một biểu thức ban đầu

let day = new Date().getDate()
console.log(day)

switch(day){
    case 0:
        console.log('Sunday')
        break
    case 1:
        console.log('Monday')
        break
    case 2: 
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thurday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Saturday')
        break
    default:
        console.log('Invalid day')
        break
    
}