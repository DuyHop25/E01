// Khai báo thư viện
import { question } from "readline-sync";
// Input
console.log("Tinh chu vi va dien tich hinh tron")
const PI:number = 3.14;
let r:number = Number(question("Nhap ban kinh: "));
// Xử lí tính toán 
let C = 2*r*PI;
C = Math.round(C * 100) / 100 ; // lam tron 2 chu so thap phan sau dau ,
let S = Math.pow(r,2)*PI;
S = Math.round(S * 100) / 100 ; // lam tron 2 chu so thap phan sau dau ,
// Output
console.log("Chu vi =",C);
console.log("Dien tich =",S);

