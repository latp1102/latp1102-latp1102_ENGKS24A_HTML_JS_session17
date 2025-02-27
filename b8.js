let myDate = new Date(prompt("NHâp vào "));
let day = myDate.getTime();
let myDate1 = new Date(prompt("Nhap vào ngày"));
let sencond = myDate1.getTime();
let a = Math.abs((sencond - day)/86400000);
console.log(a); 

