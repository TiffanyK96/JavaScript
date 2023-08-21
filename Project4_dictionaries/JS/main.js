function my_Dictionary() {
    var animal ={
        Species: "Cat", 
        Color: "Calico", 
        Breed: "Calico", 
        Sound: "Meow", 
    }; 
    delete animal.Sound; //this removes the Sound KVP from the Dictionary before it is displayed 
    document.getElementById("Dictionary").innerHTML=animal.Sound; 
}