// Tạo các biến sau với const hoặc let (chọn phù hợp):
// fullName: tên đầy đủ (string)
const fullName = "chloe";
// birthYear: năm sinh (number)
// isStudent: true/false
const isStudent = true;
// Tính tuổi hiện tại dựa trên birthYear.
// Gợi ý: tính năm hiện tại, sử dụng:
// const today = new Date();
// const currentYear = today.getFullYear();
// lấy ngày sinh
 const birthday = new Date(2006 , 6, 4);
// lấy ngày tháng hiện tại
const today = new Date();
// lấy năm hiện tại .getFullYear();
//Date → là đối tượng ngày
// .getFullYear() → lấy năm

const age1 = today.getFullYear() - birthday.getFullYear();
// console.log(fullName);
// console.log(age1);
// console.log(isStudent);

console.log(
    `Tên: ${fullName}
     Tuổi:${age1}
     Sinh viên: ${isStudent}
     `
)

