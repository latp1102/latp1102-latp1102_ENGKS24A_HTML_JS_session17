let tiền_gửi = prompt("Nhập số tiền gửi");
let month = prompt("Nhập số tháng gửi");

let lãi_xuất = 4.3;
let lãi_tháng = lãi_xuất /12/ 100;

let tiền_lãi = tiền_gửi * month * lãi_tháng;

let tiền_nhận = tiền_gửi * tiền_lãi;

let a = tiền_lãi.toLocaleString("vi-VN") + " VND";
let b = tiền_nhận.toLocaleString("vi-VN") + " VND";

document.write(`tiền lãi: ${a} <br>`);
document.write(`tiền nhận: ${b} <br>`);
