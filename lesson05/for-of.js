//for...of: dùng để lặp qua các giá trị iterable object(đối tượng có thể lặp) ví dụ: Array, string...

let colors = ['white', 'blue', 'red', 'black', 'pink']

for(let color of colors){
    console.log(`Color: ${color}`);
}

console.log('------------')

let string = 'Minh Thiều'
for(let char of string){
    console.log(`Char: ${char}`)
}