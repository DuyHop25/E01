// Khai báo thư viện
import { question } from "readline-sync";
// Input
const F:number = Number(question("Nhap do F:"));
// Xử lí tính toán 
const C:number = 5/9*(32 - F);
// Output
console.log("Nhiet do F = ",C,"do C");