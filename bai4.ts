// Khai báo thư viện 
import { question } from "readline-sync";
// Input 
let a:number = Number(question("Nhap a: "));
let b:number = Number(question("Nhap b: "));
// Xử lý tính toán 
const tong: Number = a + b ;
const thuong: Number = a / b ;
// Output
console.log("tong   -> a + b = ",tong)
console.log("thuong -> a / b = ",thuong)