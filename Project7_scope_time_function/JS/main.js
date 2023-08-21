//Assigning local and global variables 
var X=10; 

function Add_numbers_1() {
    var x=88; //local variable 
    document.write(20+X+"<br>"); //using local variable 
} 

function Add_numbers_2() {
    document.write(X+100); //using global variable 
    console.log(x); //using console.log to debug which variable is being used 
} 
Add_numbers_1(); 
Add_numbers_2(); 

//Method Assignment/a function that includes an if statement 
function get_Date() {
    if (new Date().getHours() <18) {
        document.getElementById("Greeting").innerHTML="What time of day is it?"; 
    }
}

//Else if Assignment 
function get_Reply() {
    var user_input=document.getElementById("userInput").value; 
    if (user_input % 2 ===0) {
        reply = "You entered an even number!"; 
        document.getElementById("feedback").innerHTML=reply; 
    }
    else{
        reply="You entered an odd number!"; 
        document.getElementById("feedback").innerHTML=reply; 
    }
}

//Utilizing the time_function() from previous slides 
function Time_function() {
    var Time=new Date().getHours(); 
    var Reply; 
    if (Time<12==Time>0) {
        Reply="It is the morning. Time to rise! "; 
    }  else if (Time >= 12 == Time <18) {
        Reply = "It is the afternoon. Time for tea!"; 
    }  else {
        Reply = "It is the evening. Time to sleep!"
    }
    document.getElementById("Time_of_day").innerHTML=Reply; 
}