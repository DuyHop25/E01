// Khai báo thư viện
import { question } from "readline-sync";
// Input
let N:number = Number(question("Nhap so xe: "));;
// Xử lí tính toán 
const unit:number = Math.floor(N%10);
const dozen:number = Math.floor(N/10)%10;
const hundred:number = Math.floor(N/100)%10;
const thousand:number = Math.floor(N/1000)%10;
const tensOfThousands:number = Math.floor(N/10000);
let sum:number = (unit+dozen+hundred+thousand+tensOfThousands)
const nut :number = Math.floor(sum%10);
// Output
console.log(nut,":nut");