class Person{
    constructor(name,lastname,password){
        this.name = name;
        this.lastname = lastname;
        this.password = password;
 
    }
    fullName(){
        var value = this.name.toUpperCase() + " " + this.lastname.toUpperCase();
        return document.getElementById("h1").innerHTML = value;
    }
    
 }
 
 var test = new Person("Mehemmed", "ismayilov", "546");
 console.log(test.fullName());
 
 
 
 
 