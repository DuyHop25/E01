// Khai báo thư viện
import { question } from "readline-sync";
// Input
console.log("Tinh tien va thue gia tri gia tang")
let so_luong:number = Number(question("Nhap so luong: "));
let don_gia:number = Number(question("Nhap don gia: "));
// Xử lí tính toán 
const tien:number = so_luong * don_gia;
let tien_thue:number = tien * (10/100); // 10/100 <=> 10% 
// Output
console.log("Tien =",tien);
console.log("Thue gia tri gia tang =",tien_thue);

