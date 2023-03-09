// Khai báo thư viện
import { question } from "readline-sync";
// Input
let x:number = Number(question("Nhap x:"));
let y:number = Number(question("Nhap y:"));
// Xử lí tính toán 
const S = Math.sqrt(Math.pow(x,y));
// Output
console.log(S);
