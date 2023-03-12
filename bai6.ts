// Khai báo thư viện
import { question } from "readline-sync";
// Input
let N:number = Number(question("Nhap so giay: "));;
// Xử lí tính toán
const hour:number = Math.floor(N/3600);
const minute:number = Math.floor((N%3600)/60);
const second:number = Math.floor(N%3600)%60;
//Output
console.log("hh:mm:ss:",hour,":",minute,":",second);