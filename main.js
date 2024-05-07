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
