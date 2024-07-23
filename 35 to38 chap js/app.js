
/*1. Write a function that displays current date & time in your
browser. */

function displayCurrentDateTime(){
    var today=new Date();
    return today;
}
console.log(displayCurrentDateTime());

/*2. Write a function that takes first & last name and then it
greets the user using his full name.*/

function Greet(fName,lName){
    return alert("welcome " + fName + " " + lName) ;
}

var firstName=prompt("Enter your first name");
var lastName=prompt("Enter your last name");
console.log(Greet(firstName,lastName));

/*3. Write a function that adds two numbers (input by user)
and returns the sum of two numbers. */

function addTwoNumbers(fNumber,SNumber){
    return (firstNumber + SecondNumber);
}
var firstNumber=+prompt("Enter First Number");
var SecondNumber=+prompt("Enter Second Number");
 console.log(addTwoNumbers(firstNumber,SecondNumber));

/*4. Calculator:
Write a function that takes three arguments num1, num2
& operator & compute the desired operation. Return and
show the desired result in your browser. */

function calculator(num1,num2,operator){
    if(operator === "+"){
        return num1+num2;
    }
    else if(operator === "-"){
        return num1-num2;
    }
    else if(operator === "*"){
        return num1*num2;
    }
    else if(operator === "/"){
        return num1/num2;
    }
    else if(operator === "%"){
        return num1%num2;
    }
}
var number1=+prompt("Enter First Number");
var number2=+prompt("Enter second Number");
var op=prompt("Enter operator '+,-,*,%,/' ");
console.log(calculator(number1,number2,op));


/*5. Write a function that squares its argument. */
function squareNumber(num){
    return num*num;
}
var number=+prompt("Enter number this function will give you its square : ");
console.log(squareNumber(number));

// 6. Write a function that computes factorial of a number. 
function factorialNumber(num){
    if(num===0){
        return 1;
    }
    var factorial=1;
    for(i=1;i<=num;i++){
        factorial*=i;
    }
    return factorial;
}
var num=+prompt("enter number to finds its factorial : ");
console.log(factorialNumber(num));

/*8. Write a nested function that computes hypotenuse of a
right angle triangle.
Hypotenuse2 = Base2 + Perpendicular2
Take base and perpendicular as inputs.
Outer function : calculateHypotenuse()
Inner function: calculateSquare()*/

function calculateHypotenuse(){
    function calculatesquare(x){
          return x*x;
    }
    var base = +prompt("Enter the base of a right angle triangle:")
       var perpendicular = +prompt("Enter the perpendicular of a right angle triangle:");
    
       var hypotenuse = Math.sqrt(calculatesquare(base)+ calculatesquare(perpendicular));
    
    alert("The hypoteneus of right angle triangle with base "+ base+ " and perpendicular " +perpendicular+ " is "+ hypotenuse)
    }
    calculateHypotenuse();

/* 9. Write a function that calculates the area of a rectangle.
A = width * height
Pass width and height in following manner:

i. Arguments as value
ii. Arguments as variables */

//Arguments as variables
var width = 20;
var height = 10;

function calculateArea(w, h){
    return w * h;
}
alert(calculateArea(width, height));

// //Argument as value
alert(calculateArea(3,5));

/*10. Write a JavaScript function that checks whether a passed
string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as
forward, e.g., madam.*/

function isPalindrome(str) {
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - i - 1]){
            return str+ " is not a palindrome";
        }else{
              return str+ " is a palindrome";
        }
    }
}

console.log(isPalindrome(prompt("Enter a word:")));

/*11. Write a JavaScript function that accepts a string as a
parameter and converts the first letter of each word of the
string in upper case.
EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fox' */


 function titleCase(){
    var str=prompt("enter any sentence:");
    var words=str.split(" ");
    var titleCase=" ";
    for(i=0;i<words.length;i++){
        titleCase +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()+ " ";
    }
    return titleCase;
}
console.log(titleCase());



/*12. Write a JavaScript function that accepts a string as a
parameter and find the longest word within the string.
EXAMPLE STRING : 'Web Development Tutorial'
EXPECTED OUTPUT : 'Development'*/
function findLongestString(){
    var str = prompt("Enter a string:")
    var words =str.split(" ")
    var longestWord= "";
    var maximumLength = 0;

    for(var i=0 ; i<words.length ; i++){
        if(words[i].length > maximumLength){
            longestWord =words[i] ;
            maximumLength= words[i].length;
        }
    }
    return longestWord+ " is the longest word";
}
console.log(findLongestString());

/*13. Write a JavaScript function that accepts two arguments, a
string and a letter and the function will count the number o
occurrences of the specified letter within the string.
Sample arguments : 'JSResourceS.com', 'o' */

function countLetterOccurrence(str, letter){
    var count = 0;
    for(var i =0; i< str.length; i++){
        if(str[i].toLowerCase()===letter.toLowerCase()){ //javascript,   a
            count++
        }
    }
 return count;
}
var string = prompt("Enter a string");
var ltr= prompt("Enter a letter");
alert(countLetterOccurrence(string, ltr));

/*14. The Geometrizer
Create 2 functions that calculate properties of a circle, using
the definitions here.
Create a function called calcCircumference:
• Pass the radius to the function.
• Calculate the circumference based on the radius, and output
"The circumference is NN".
Create a function called calcArea:
• Pass the radius to the function.
• Calculate the area based on the radius, and output "The area
is NN".

Circumference of circle = 2πr
Area of circle = πr2 */

var r = +prompt("Enter radius Value");
function circumfarance(radius){
    var pi = Math.PI;
    var circum = 2*pi*radius;
    return "The circumfarance of circle is " +circum;
}
function area(radius){
    var area = Math.PI*Math.pow(radius,2);
    return "The area of circle is " + area.toFixed(2);
}
console.log(circumfarance(r));
console.log(area(r));
