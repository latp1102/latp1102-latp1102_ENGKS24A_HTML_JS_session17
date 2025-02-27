let a = prompt("Nhập vào a");
let b = prompt("Nhập vào b");
let c = prompt("Nhập vào c");
if(a != 0){
    let detal = b**2 - 4 * a * c;
        if (detal < 0){
            console.log("Vô nghiệm");
        }
        else if (detal > 0){
            console.log("pt có 2 no");
            let x1 = (-b + Math.sqrt(detal)) /2*a;
            let x2 = (-b - Math.sqrt(detal)) /2 * a;
            document.write("<p> "+ x1 +"</p>");
            document.write(x2);
        }
        else{
            console.log("pt có 1 no");
        }
}

