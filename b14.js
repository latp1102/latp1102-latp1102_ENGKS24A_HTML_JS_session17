let r = prompt("Mời bạn nhập vào bán kính: ");
let h = prompt("Mời bạn nhập vào chiều cao: ");
const PI = 3.14;
let surArea = 2*PI*r*h;
let totalArea = 2*PI*r*h + 2*PI*r**2;
let volume = PI*r*r*h;
let perimeter = 2*PI*r;

document.write(`diện tích xung quanh  = ${surArea} "<br>"`);
document.write(`diện tích toàn phần  = ${totalArea} "<br>"`);
document.write(`thể tích hình trụ = ${volume} "<br>"`);
document.write(`chu vi đáy = ${perimeter} "<br>"`);