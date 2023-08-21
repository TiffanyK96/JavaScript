//instructions: create a function that returns the result of an additional operation to the p element with the id "Math" 

function myFunction(p1, p2) {
    return p1*p2; 
}

//Subtraction, multiplication, division & random assignments: once saved, execute the index.html file in browser  

function addition() {
    var add=6+4; 
    document.getElementById("Add").innerHTML="6+4= " + add; //print the result in html 
}
function subtraction_Function() {
    var Subtraction=10-4; 
    document.getElementById("Sub").innerHTML="10-4=" + Subtraction; 
}

function multiplication() {
    var simple_Math=8*6; 
    document.getElementById("Mlt").innerHTML="6x8=" + mult; 
}

function division() {
    var simple_Math=48/8; 
    document.getElementById("Div").innerHTML="48/8=" + divide; 
} 

function random() {
    document.getElementById("Ran").innerHTML=Math.random()*10; 
}

//Multiple operator assignment: successfully execute the index.html file in browser afterwards 

function more_Math() {
    var simple_Math=(3+5)*20/4-4; 
    document.getElementById("Math").innerHTML="3 plus 5, multiplied by 20, divided by 4 and then subtracted by 4 equals " + simple_Math; 
}

//Modulus Operator: same final instructions as above 

function modulus_Operator() { 
    var modulus=51%2; 
    document.getElementById("Mod").innerHTML="When you divide 51 by 2 you have a remainder of: " + modulus; 
}

//Unary Operator: ditto 

function negation_Operator() {
    var x=7; 
    document.getElementById("Math").innerHTML=-x; 
}

//Increment & Decrement Assignment 
function Increment() {
    var value = document.getElementById("IncrementText").innerHTML; //saves the text of the HTML element to a variable 
    value++; //Adds one to the value 
    document.getElementById("IncrementText").innerHTML; //prints the result in html 
}

function Decrement() {
    var value = document.getElementById("DecrementText").innerHTML; 
    value--; //Subtracts one from the value 
    document.getElementById("DecrementText").innerHTML=value; 
}