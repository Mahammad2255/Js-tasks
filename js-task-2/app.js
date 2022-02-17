let age = prompt("Yasinizi daxil edin: ");

if(age >= 18){
    document.getElementById("yazdir").innerHTML = "Sizin " + age + " yasiniz oldugu ucun qeydiyyatdan kece bilersiniz";

}
else {
    alert("Sizin yasiniz 18den asagidir! ")
}