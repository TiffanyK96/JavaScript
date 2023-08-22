//create a while loop 
function count_to_Ten(){
    var Digit=""; 
    var x = 1; 
    while (x<11) {
        while (x<11) {
            Digit += "<br>" + x; 
            x++; 
        }
        document.getElementById("Counting_to_Ten").innerHTML=Digit; 
    }
}

//for loop assignment 
var Instruments = [
    "Guitar", 
    "Drum", 
    "Piano", 
    "Cello", 
    "Violin", 
    "Tuba", 
    "Flute", 
]; 
var content=""; 
var y; 
function for_Loop() {
    for (y=0; y < Instruments.length; y++) {
        content += Instruments[y] + "<br>"; 
    }
    document.getElementById("List_of_Instruments").innerHTML=content; 
}

//array (document.getElementById().innerHTML Assignment) 
function color_array() {
    var Colors=[]; 
    Colors[1] = "Red";
    Colors[2] = "Orange";
    Colors[3] = "Yellow"; 
    Colors[4] = "Green"; 
    Colors[5] = "Blue"; 
    Colors[6] = "Indigo"; 
    Colors[7] = "Violet"; 
    document.getElementById("Array").innerHTML="My favourite color is " + Colors[3] + "."; 
}


//Let Keyword Assignment 
function tea() {
    let tea = {
        make: "oolong", 
        year: "1996", 
        color: "the colour of deliciousness",
    }; 
}

document.getElementById("tea").innerHTML="I have a " + tea.year + " " + tea.color + " " + tea.make + "."; 

//These below will be in a separate document: 

//async 
//Const Keyword Assignment (things change mid-way)
//Object Assignment 
//Break & Continue Challenge 