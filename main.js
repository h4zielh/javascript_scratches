const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

// we declare variables using the let keyword:
let somevar1;

// js is also case-sensitive, we can sign a value to a variable in its declaration:
let SomeVar1 = "i'm a string!";

// the === (strict equality) test if both variables are of the same type and has the same value
document.getElementById("4_===_4").textContent = "4" === 4; // this returns false

document.getElementById("4_==_4").textContent = "4" == 4;   // but this returns true

// the !== testfor ===, then negate its value, simple huh?
3 !== "3" // equals to !(3 === "3")

// if and else in js, pretty simple too
if (4 == "4") {
    console.log("this one executes for sure");
}

else {
    console.log("this one otherwise...");
}

// creating a funtion:
function almost_useless(num1, num2) {
    return num1 + num2;
}

console.log(almost_useless(1 + 2), "wow");

// creating a event handler for when the user clicks anywhere on the page:
function click_msg() {
    console.log("click");
}

document.querySelector("html").addEventListener("click", click_msg);

/*
i could've done this one below wich uses an anonym function, but i think
this is a bit ugly and harder to read.

document.querySelector("html").addEventListener("click", function () {
    console.log("click");
});

i could've used "() => {" too wich is called "arrow function"
*/

//lets add a code to update an image very time the user clicks on it:
let img_n = 2
const myImage = document.getElementById("img_changer");

function img_click() {
    if (img_n > 4) {
        img_n = 1;
    }

    myImage.setAttribute("src", "images/image_" + img_n.toString() + ".jfif");
    console.log("image changed")

    img_n++;
}

// set the event handler of the img
myImage.onclick = img_click;

// we could replace the above code to the following:
// myImage.addEventListener("click", img_click);

