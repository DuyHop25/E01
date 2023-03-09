// Khai báo thư viện
import { question } from "readline-sync";
// Input
let N:number = 1883;
// Xử lí tính toán 
const dv:number = Math.floor(N%10);
const chuc:number = Math.floor(N/10)%10;
const tram:number = Math.floor(N/100)%10;
// Output
console.log("Chu so hang don vi: ", dv);
console.log("Chu so hang chuc  : ",chuc);
console.log("Chu so hang tram  : ",tram);