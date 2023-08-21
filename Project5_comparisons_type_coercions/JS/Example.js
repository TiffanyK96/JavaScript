//NaN Challenge (1) 
function my_Function() {
    document.getElementById("Test").innerHTML=0/0; 
    document.getElementById("Test").innerHTML=isNaN('This is a string'); //to display true (2)
    document.getElementById("Test").innerHTML=isNan('007'); //to display false (3)
}

//Infinity Assignment 
document.write(2E310); 
document.write(-3E310); 

//Boolean Assignment 
document.write(5<7); 
document.write(5>7); 

//console.log() Assignment 
console.log(6+6); 