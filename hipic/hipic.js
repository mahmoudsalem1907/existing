var ascopy = document.getElementById("head");
var ascline = ascopy.cloneNode(true);
ascline.style.float = ("left");
ascline.style.position = "absolute";
ascline.style.top = "60%";

document.body.append(ascline);

var copya = document.getElementById("nav");
copya.style.listStyle = "circle";
copya.style.position = "absolute";
copya.style.top = "40%";
copya.style.left = "45%";


