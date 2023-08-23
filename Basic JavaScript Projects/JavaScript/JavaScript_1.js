function Hobby_Function() {
    var Hobby_Output; 
    var Hobbies = document.getElementById("Hobby_Input").value; 
    var Hobby_String = " is a great hobby!"; 
    switch(Hobbies) {
        case "read"; 
            Hobby_Output="read" + Hobby_String; 
        break; 
        case "write"; 
            Hobby_Output="write" + Hobby_String; 
        break; 
        case "hike"; 
            Hobby_Output="hike" + Hobby_String; 
        break; 
        case "sing"; 
            Hobby_Output="sing" + Hobby_String; 
        break; 
        case "dance"; 
            Hobby_Output="dance" + Hobby_String; 
        break; 
        case "paint"; 
            Hobby_Output="paint" + Hobby_String; 
        break; 
        case "exercise"; 
            Hobby_Output="exercise" + Hobby_String; 
        break; 
        case "meditate"; 
            Hobby_Output="meditate" + Hobby_String; 
        break; 
        default: 
        Color_Output="Please enter a hobby exactly as written on the above list."; 
    }
    document.getElementById("Output").innerHTML=Color_Output; 
} 
//did not work, will come back to this later 

//canvas and gradient challenge 
function ID_Name(){ 
    var c = document.getElementById("ID_Name"); 
    var ctx = c.getContext("2d"); 
    ctx.font = "30px Arial"; 
    ctx.strokeText("Hobbies make life worth living", 10,50); 
}

