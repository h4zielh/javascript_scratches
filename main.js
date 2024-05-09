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

i could've used "() => {" too, witch is called "arrow function"
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
// delete array1[1];         // bad parctice, it won't the length is not affected and others elements are not re-indexed 
array1[1] = undefined;       // all fine here
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
console.log(`an integer ${someVar4} inside a string.`);
// it's the same as f"an integer {someVar4} inside a string." in python, the interpreter executes
// the code between the { } and converts it's result in a string. the ` is necessary

// there are some special characters use in strings like \b, \f, \t, etc. So if we wanted to print
// exactly '\n' we would need to write '\\n', same for '\' -> '\\', pretty straight-forward?

// we can divide a string in multiple lines using '\':
"this string \
is broken \
across multiple \
lines.";

// control flow

// if and else:
if (true) {

}

else if(true) {

}

else {

}

// in js false, undefined, 0, NaN, null and "" evaluates to false
// Booleanmust not be confused with true or false:
const b = new Boolean(false);

if (b) {
    // this condition evaluates to true
}

if (b == true) {
    // this condition evaluates to false
}

// the switch statement:
switch (SomeVar3) {

    case 10:
        console.log("it's 10");
        break;
    
    case 5:
        console.log("it's 5");
        break;

    // executes if none of the above is true
    default:
        console.log("i don't know");
}

// You can throw exceptions using the throw statement and handle them using the try...catch statements.
// with throw, we can throws exceptions with any expressions not just Exceptions types like python:
// throw 1 + 2; // it's valid

// ex:

try {
    1 + 2;
}

catch (exceptionVar) {
    // do something with the variable containg the exception
    // this variable will no longer exists after this block ends
}

// executes after both try and catch blocks
finally {

}

// after a try block there must at least a catch or a finally block

// a loop for
for (let n = 1; n < 11; n++) {
    console.log(n);
}

// while
let n = 10;
while (n > 0) {
    console.log(n);
    n--;
}

// do...while
do {
    console.log(n);
} while (false)

/*
we can create a label as follow:

label_name:
    statement

then we can use "break statement" to exit the current label rather than the inner-most block
just like so, we can use continue to go back to the beggining of the current label.

*/

// we can use for..in to iterate over user-defined properties of an enumerable object:
const sequence1 = [1, 2, 3, 4, 5];
sequence1.variable1 = 10;
sequence1.variable2 = 20;

console.log("for..in:");
for (let item in sequence1) {
    console.log(item); // this logs 0, 1, 2, 3, 4, "variable1", "variable2"
}

/*
Although it may be tempting to use this as a way to iterate over Array elements, the for...in
statement will return the name of your user-defined properties in addition to the numeric indexes.

Therefore, it is better to use a traditional for loop with a numeric index when iterating over
arrays, because the for...in statement iterates over user-defined properties in addition to the
array elements, if you modify the Array object (such as adding custom properties or methods).
*/

// alternatively, we can use for..of to iterate over value properties of an enumerable object:
console.log("for..of:");
for (let item of sequence1) {
    console.log(item); // this logs 1, 2, 3, 4, 5
}

/*
The for...of statement creates a loop Iterating over iterable objects (including Array, Map,
Set, arguments object and so on), invoking a custom iteration hook with statements to be
executed for the value of each distinct property.
*/

// functions

// when you pass a variable to a function, this variable is passed by value, but if this
// variable is an object, it's passed by reference

// functions has hoisting too, which means we can access functions before the line in wich it's
// declared juts like variables declared with var

// in a function, we can use the arguments variable (which is a local variable inside
// the function scope) to access every argument passed to the function:
function test1(args) {
    return arguments.length;
}

console.log(test1(1, 2, 3)); // return 3
console.log(test1(1, 2));    // return 2
console.log(test1(1));       // return 1

// the arguments variable is not an array actually, it is an array-like that has a numbered
// index and a length property, but does not have all manipulations methods of arrays

// a function containing a default parameter:
function test2(a, b = 2) {
    return a + b;
}

// The rest parameter syntax allows us to represent an indefinite number of arguments as an array:
function test3(a, b, ...c) {
    let n = 0;
    for (let item in c) {
        n += c;
    }

    return (n * a) / b;
}

//If an expression does not evaluate to an object, then assignments
// to properties of that expression do not assign:
const val1 = 0;
val1.x = 3;

console.log(val1.x); // Prints undefined.
console.log(val1); // Prints 0.

// putting a variable chain in a const, let, or var statement often does not work. Only the
// outermost/leftmost variable would get declared; other variables within the assignment
// chain are not declared by the const/let/var statement. For example:
const z = y = x = 10; // z is declared, y and x are not, referenceing one of the two raises an error

// the ternary operator:
let var2;
var2 = (1 > 2)? "its true": "it's false";

// the typeof operator returns the type of a variable as a string
let a = 1;
let b2 = "2";
let c = [3, 4, 5];
let d = {e: 6, ff: 7}

typeof a; // int
typeof b2; // string
typeof c; // array
typeof d; // object

// The instanceof operator returns true if the specified object is of the specified object type:
[1, 2, 3] instanceof Array; // true

// You can use the new operator to create an instance of a user-defined
// object type or of one of the built-in object types:
const a2 = new Array(1, 2, 3); // [1, 2, 3]

/* 
Use the this keyword to refer to the current object. In general, this refers to the calling
object in a method. Use this either with the dot or the bracket notation:

this["propertyName"];
this.propertyName;

The super keyword is used to call functions on an object's parent. It
is useful with classes to call the parent constructor, for example.

super(args); // calls the parent constructor.
super.functionOnParent(args);
*/

// if we try to access an array element using something other than a number
// we will be accessing a property instead:
const a3 = [1, 2, 3];

a["a3"] = 4;

console.log(a); // this prints: [1, 2, 3, a3: 4]

// but this only happens because the value between the index accessors is a string
// and can't be converted to a number to access some posiiton in the array, ex:
a["4"] = 5;

console.log(a); // this prints: [1, 2, 3, a3: 4, 5]

// we can use maps, that are actually like dictionaries:
const map1 = new Map();

// set
map1.set("dog", "woof");
map1.set("cat", "meow");
map1.set("Williams FW15C", "vruuuummmm vruuuuuuummmmm vruuuuuuuuummmmmmm");

// get
map1.get("dog"); // return "woof"
map1.size; // 3

// delete
map1.delete("dog");
map1.has("dog"); // false

/*
advantages of using map as dicionary instead of objects:

- The keys of an Object are strings or symbols,
whereas they can be of any value for a Map

- You can get the size of a Map easily, while you
have to manually keep track of size for an Object.

- The iteration of maps is in insertion order of the elements.

These three tips can help you to decide whether to use a Map or an Object:

- Use maps over objects when keys are unknown until run time, and
when all keys are the same type and all values are the same type.

- Use maps if there is a need to store primitive values as
keys because object treats each key as a string whether it's
a number value, boolean value or any other primitive value.

- Use objects when there is logic that operates on individual elements.
*/

// Set objects

// set objects behave like set objects in python
const setVar1 = new Set();
setVar1.add(1);
setVar1.add("some string");
setVar1.add(2);
setVar1.add(1);
setVar1.add(1);

console.log(setVar1); // print (1, "some string", 2)

// using an object initializer:
const obj1 = {
    var1: 3,
    var2: 4,
    var3: "five", // all fine here
    4: "six",
    "five": 7
}

// the 4 attribute can only be accessed using bracket
// notation because it's not a valid name

// we can use a construction function to create a "simple class":
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

let someCar1 = new Car("don't know", "Lebron", "1984");
console.log(someCar1.year); // 1984

// we can access it's properties with dot notation and bracket notation:
someCar1.model;   // dot
someCar1["model"] // bracket

/*
you cannot use dot notation to access a property whose name is not a valid JavaScript
identifier. For example, a property name that has a space or a hyphen, that starts with
a number, or that is held inside a variable can only be accessed using the bracket notation.
*/

// if you try to add a new property for an object using the bracket notation and using a defined
// string variable, it's content will be the name of the new added attribute:
const myObj= {};
let str1;

str1 = "myString";
myObj[str1] = "This key is in variable str1";

// console.log(myObj.str); // this returns undefined because only the content of the string variable is used

console.log(myObj[str1]);     // 'This key is in variable str'
console.log(myObj.myString);  // 'This key is in variable str'
console.log(myObj);           // {myString: 'This key is in variable str1'}

/*
You can add a property to all objects created through a certain constructor using the prototype property.
This defines a property that is shared by all objects of the specified type, rather than by just one
instance of the object. The following code adds a color property to all objects of type Car, and then
reads the property's value from an instance car1.
*/
Car.prototype.color = "red";
console.log(car1.color); // "red"

// we can add functions to objects:
const myObj2 = {
    name: "Cristiano",

    useless() { // we don't need the function keyword here
        console.log("i do nothing");
    },

    another_useless: function () {
        console.log("i do nothing too");
    },
};

myObj2.useless(); // i do nothing

// we can use the keyword "this" to access its internal variables:
function getName() {
    return this.name;
}
myObj2.getName = getName;
console.log(myObj2.getName()); // it return "Cristiano"

// this is a "hidden parameter" of a function call that's passed
// in by specifying the object before the function that was called.