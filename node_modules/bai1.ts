// Khai báo thư viện
import { question } from "readline-sync";
// Input
console.log("Nhap thong tin gioi thieu ban than");
let ten:string = question("Ho ten: ");
let ns:string = question("Nam sinh: ");
let dt:string = question("Dan toc: ");
let cung_hoang_dao:string = question("Cung hoang dao: ");
let truong:string = question("ten truong dang hoc: ");
let sdt:string = question("sdt: ");
let email:string = question("email: ");
// Output
console.log("\n Thong tin ve ban than");
console.log("Ten:",ten);
console.log("Nam sinh:",ns);
console.log("Dan toc:",dt);
console.log("Cung Hoang Dao:",cung_hoang_dao);
console.log("Noi hoc:",truong);
console.log("So dien thoai:",sdt);
console.log("email:",email);


