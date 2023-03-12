// Khai báo thư viện
import { question } from "readline-sync";
// Input
let N:number = Number(question("Nhap so xe: "));;
// Xử lí tính toán 
const dv:number = Math.floor(N%10);
const chuc:number = Math.floor(N/10)%10;
const tram:number = Math.floor(N/100)%10;
const nghin:number = Math.floor(N/1000)%10;
const chuc_nghin:number = Math.floor(N/10000);
let nut:number = (dv+chuc+tram+nghin+chuc_nghin)
if(nut >= 10)
    nut = nut - 10
// Output
console.log("So xe:",N,"duoc",nut,"nut");