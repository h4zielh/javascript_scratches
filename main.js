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

    myImage.setAttribute("src", "images/image_" + img_n + ".jfif");
    console.log("image changed");

    img_n++;
}

// set the event handler of the img
myImage.onclick = img_click;

// we could replace the above code to the following:
// myImage.addEventListener("click", img_click);

// declaring a constant variable:
const SomeVar2 = 10;

// a javascript identifier name can start with _ and $ too. We can use unicode letters like å and ü

// if a variable is declared without an initializer, it is assigned the value undefined:
var SomeVar3;
console.log(SomeVar3);// returns "undefined"

/*
when we declare a variable outsied of any function, its called global variable becuase its acessible
in all our code. when we declare a variable inside a function its a local variable because it's
acessible only inside that function

one of the differences between let and var is that variables declared with var can be accessed even before
the line of its dlcaration, which means it to be "hoisted" while variables declared with let can only be
acessed after its declared because those variable are in a "temporal dead zone" until the line coontaing
the declaration is processed.
*/

// javascript converts numbers to strings when using the + operator
SomeVar3 = "the answer is: " + 43; // equals to "the answer is: 43"

// but with all other operations, its the inverse, the strings are converted to numbers
"37" - 7; // 30
"37" * 7; // 259

// we can use parseInt() and parseFloat() functions to converts numbers into other types of numbers:

// this converts the binary number 101 to an integer
parseInt("101", 2); // 5

// here weconvert a string to a float
parseFloat("1.231"); // returns 1.231 as a float

// we cal also use the + operator to convert string to numbers:
(+"1.1") + (+"1.1"); // return 2.2, the parentheses are not required, just added for clarity

// an array:
const array1 = ["one" , "two", "three"];

// as an array is a reference type, we can modify it's attributes, such as its elements:
array1.push("four");
delete array1[1];           // all fine here
array1[1] = "don't know";    // repare here, like python w can use ' inside "", and " inside '', there's
                            // nothing wrong here because the interpreter can distinguish it from the string quotes

console.log(array1); // returns ["one", "don't know", "four"]

// If you put two commas in a row in an array literal, the array leaves an empty slot for the unspecified element:
const fish2 = ["Lion", , "Angel"]; // this creates [ 'Lion', <1 empty item>, 'Angel' ]

/*
Note that the second item is "empty", which is not exactly the same as the actual undefined value.
When using array-traversing methods like Array.prototype.map, empty slots are skipped. However,
index-accessing fish[1] still returns undefined.

If you include a trailing comma at the end of the list of elements, the comma is ignored.
*/

// but only the last comma is ignored:
const fish = [, "Lion", "Angel"]; // this creates [ <1 empty item>, 'Lion', 'Angel' ]

// integer literals:

// octals begins with a zero or 0o:
0o66;

// hexadecimals begins with ox:
0xF3;

// binary begins with 0b:
0b101;

// a n suffix indicates the integer is a BigInr literal and it can
// also be used in every of the previous bases too:
0o66n;
0xF3n;
0b101n;
// float literal can start with a dot directly, and end with an expoent too:
3.1415926
.123456789
3.1E+12
.1e-23

//The exponent part is an e or E followed by an integer, which can be signed (preceded by + or -).
// A floating-point literal must have at least one digit, and either a decimal point or e (or E).

// a regex literal
const re = /ab+c/;

// look:
var someVar4 = 123;
console.log("an integer ${someVar4} inside a string.");
// it's the same as f"an integer {someVar4} inside a string." in python, the interpreter executes
// the code between the { } and converts it's result in a string.

// there are some special characters use in strings like \b, \f, \t, etc. So if we wanted to print
// exactly '\n' we would need to write '\\n', same for '\' -> '\\', pretty straight-forward?




