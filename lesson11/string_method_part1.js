// String method: Phương thức xử lý dữ liệu String trong JavaScript
// toLowerCase(), toUpperCase(), trim(), replace(), match(), search(), startsWith, endsWith()

// toLowerCase() - chuyển đổi tất cả các ký tự trong chuỗi sang ký tự thường
// Không làm thay đổi chuỗi ban đầu
const str1 = 'Minh Thieu'
const strLower = str1.toLowerCase()
console.log(strLower)

// toUpperCase() - chuyển đổi tất cả các ký tự trong chuỗi sang ký tự hoa
// Không làm thay đổi ban đầu
const str2 = 'Minh Thieu'
const strUpper = str2.toUpperCase()
console.log(strUpper)

// trim() - loại bỏ khoảng trắng (space) ở đầu và cuối chuỗi
// Không làm thay đổi ban đầu
const str3 = "     Minh Thieu     "
const strTrim = str3.trim()
console.log(strTrim)

// replace() - thay thế một chuỗi con trong chuỗi bằng một chuỗi khác.
// Nó chỉ thay thế chuỗi xuất hiện đầu tiên nếu có nhiều chuỗi con trùng nhau trong chuỗi
// Nếu muốn thay thế toàn bộ phải dùng biểu thức chính quy regex có dạng /str/g
// Không làm thay đổi chuỗi ban đầu. 
const str4 = "Hello World World World!"
const strReplace1 = str4.replace('World', 'Minh')
const strReplace2 = str4.replace(/World/g, 'Minh')
console.log(strReplace1)
console.log(strReplace2)

// match() - tìm kiếm và trả về một mảng khớp với biểu thức chính quy.
// Nếu không khớp trả về null, nếu có chỉ trả về chuỗi xuất hiện đầu tiên nếu có nhiều 
// chuỗi con trùng nhau trong chuỗi
// Nếu muốn trả về toàn bộ phải dùng biểu thức chính quy regex có dạng /str/g
// Không làm thay đổi chuỗi ban đầu
const str5 = "Hello World World World!"
const matchStr = str5.match(/World/g)
console.log('After match(): ', matchStr)

// search - tìm kiếm đầu vào theo biểu thức regex và trả về vị trí xuất hiện lần đầu tiên.
const str6 = "Hello World World World!"
const searchStr = str6.search('World')
console.log('After search(): ', searchStr)

// startsWith - kiểm tra xem chuỗi có bắt đầu bằng một chuỗi con nào không. Trả về boolean
const str7 = "Hello Minh"
const startsWithStr = str7.startsWith('Hello')
console.log('After startsWith(): ', startsWithStr)

// endsWith - kiểm tra xem chuỗi có bắt đầu bằng một chuỗi con nào không. Trả về boolean
const str8 = "Hello Minh"
const endsWithStr = str7.endsWith('Minh')
console.log('After endsWith(): ', endsWithStr)
