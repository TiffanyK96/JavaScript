//This is the concat() Method Assignment 
function full_Sentence () {
    var part_1="Here is"; 
    var part_2=" my two"; 
    var part_3=" or more"; 
    var part_4=" strings. :)"; 
    var whole_sentence=part_1.concat(part_2, part_3, part_4); 
    document.getElementById("Concatenate").innerHTML=whole_sentence; 
}

//This is the slice() Method Assignment 
function slice_Method() {
    var Sentence = "Never gonna give you up.";
    var Section = Sentence.slice(21,23) //numbers show what characters in the string will be cut out and displayed 
    document.getElementById("Slice").innerHTML=Section; 
} 

//More Methods Challenge: upper case & search word position  
function toUpperCase() { 
    var str="Bonjour!"; 
    var result=str.toUpperCase(); 
    document.getElementById("toUpperCase").innerHTML=result; 
} 

function search() { 
    var str="Roses are red, violets are blue"; 
    var position = str.search("red"); 
    document.getElementById("search").innerHTML=position; 
}

//Number Methods Assignment. toString() returns a number as a string 
function string_Method() {
    var X = 80; 
    document.getElementById("Numbers_to_string").innerHTML=X.toString(); 
}

//toPrecision() Method Assignment 
function precision_Method() {
    var X=3.14159265359; 
    document.getElementById("Precision").innerHTML=X.toPrecision(5)
} 

//New Methods Challenge: toFixed() & valueOf() 

//toFixed() converts a number to a string, rounded to a specific number of decimals 
function toFixed() {
    var X=3.14159265359; 
    var n=X.toFixed(3); 
    document.getElementById("toFixed").innerHTML=n; 
}

//valueOf() returns the primitive value of the string, does not change the original string, & can be used to convert a string object into a string 
//it is the default method for JavaScript strings & is used internally. 
function valueOf() {
    var X = "Hello World"; 
    var result = X.valueOf();  
    document.getElementById("valueOf").innerHTML=result; 
}