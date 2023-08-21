//a function with html & JS using a ternary operation with input from the browser 
function Ride_Function() {
    var Height = document.getElementById("Height").value; 
    var Can_ride=Height<52? "You are too short":"You are tall enough"; 
    document.getElementById("Ride").innerHTML=Can_ride+" to ride."; 
}

//a constructor function utilizing "new" and "this" keywords 
function_Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make=Make; 
    this.Vehicle_Model=Model; 
    this.Vehicle_Year=Year; 
    this.Vehicle_Color=Color; 
}
var Jack = new Vehicle("Dodge," "Viper," 2020, "Red"); 
var Emily = new Vehicle("Jeep", "Trail Hawk," 2019, "White and Black"); 
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); 

//a function to display the results of the constructor in an html element 
function my_Function() {
    document.getElementById("Keywords_Constructors").innerHTML 
    "Erik drives a " + 
    Erik.Vehicle_Color + 
    "-coloured " + 
    Erik.Vehicle_Model + 
    "manufactured in " + 
    Erik.Vehicle_Year 

//A nested function 
    function add_Strings() {
        var start_string = "Bonjour"; 

        function Adding(str) {
            start_string = start_string + " " + str; 
        }
        Adding("tout le monde"); 
        document.getElementById("Nested_Functoin").innerHTML=start_string; 
    }
}