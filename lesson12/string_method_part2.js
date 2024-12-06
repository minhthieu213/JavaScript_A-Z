// charAt, concat, includes(), indexOf(), slice(), split(), substring()

// charAt() - trả về ký tự tại một vị trí trong chuỗi. Trả về string rỗng nếu vị trí k tồn tại
const str1 = 'Hello';
const charAtStr = str1.charAt(1)
console.log('After charAtStr: ', charAtStr) // Kết quả: e

// concat() - được sử dụng để nối 2 hay nhiều chuỗi với nhau
const str2 = 'Hello'
const spaceStr = ' - '
const str3 = 'Minh'
const concatStr = str2.concat(spaceStr).concat(str3)
console.log('After concat(): ',concatStr) // Kết quả: Hello - Minh

// includes() - kiểm tra chuỗi có chứa một chuỗi con hay không. Trả về boolean
const str4 = 'Hello Minh'
const includeStr = str4.includes('Minh')
console.log('After includes(): ', includeStr) // Kết quả : true

// indexOf() - trả về lần đầu tiên xuất hiện của chuỗi con trong chuỗi. Nếu không tìm thấy 
// trả về -1
const str5 = 'Hello Minh'
const indexOfStr = str5.indexOf('inh')
console.log('After indexOf(): ', indexOfStr)

// split() - chia chuỗi thành một mảng các chuỗi con với ký tự nhận diện. Không làm thay đổi
// chuỗi ban đầu
const str6 = "JS, C++, C#, Java"
const splitStr = str6.split(', ')
console.log('After split(): ', splitStr) // Kết quả:  ['JS', 'C++', C#, 'Java']

// slice() - trả về một chuỗi con từ chuỗi gốc ban đầu, bắt đầu từ startIndex đến endIndex
// (không bao gồm endIndex) không làm chuỗi gốc ban đầu 
// trả về nếu cố tình để startIndex > endIndex
const str7 = "The weather is very hot today"
const spliceStr = str7.slice(4,11)
console.log('After splice(): ', spliceStr)

// substring() - khá giống spilce() nhưng khác chỗ nếu để startIndex > endIndex thì
// substring() sẽ tự hoán đổi vị trí startIndex và endIndex nghĩa là startIndex thành endIndex.
const str8 = "The weather is very hot today"
const substringStr = str8.substring(3, 0)
console.log('After substring(): ', substringStr)

