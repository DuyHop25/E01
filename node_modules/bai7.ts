// Input
let a1:number = 3;
let a2:number = -3;
let b1:number = 1;
let b2:number = 0;
// Xử lí tính toán
let d:number = Math.sqrt(Math.pow((b1 - a1),2) + Math.pow((b2-a2), 2))
d = Math.round(d * 10) / 10 ; // lam tron 1 chu so thap phan sau dau ,
//Output
console.log("Khoang cach giua 2 toa do \na(",a1,",",a2,"),b(",b1,",",b2,") =",d);