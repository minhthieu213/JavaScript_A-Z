// for..in: dùng để lặp qua các thuộc tính của đối tượng 

let developer = {
    username: 'MinhThieu',
    age: '18',
    gender: 'male',
    country: 'Viet Nam',
    hobbies: ['playing games', 'reading', 'coding', 'traveling']
}

for(let key in developer){
    console.log(`${key} : ${developer[key]}`)
}