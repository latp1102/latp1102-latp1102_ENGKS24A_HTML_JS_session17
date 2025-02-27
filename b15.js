let r = prompt("Mời bạn nhập vào bán kính");
const PI = 3.14;
let area = 4*PI*r**2;
let volume = 4/3*PI*r*r*r;
let perimeter = 2*PI*r;

document.write(`diện tích xung quanh = ${area} "<br>`);
document.write(`thể tích = ${volume} "<br>"`);
document.write(`chu vi = ${perimeter} "<br>"`);