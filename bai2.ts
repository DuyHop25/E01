// Khai báo thư viện
import { question } from "readline-sync";
// Input
console.log("Nhap vao 3 so nguyen")
let a:number = Number(question("a:"));
let b:number = Number(question("b:"));
let c:number = Number(question("c:"));
// Xử lí tính toán 
const kq = ((Math.pow(a,2))*(Math.pow(b,2)))/c 
// Output
console.log("Ket qua phep tinh ((a^2)*(b^2))/c =",kq);
