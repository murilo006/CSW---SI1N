

var cars = [" Corola", " Uno", " Brasilia", " Sandeiro", " Ka", " Gol"];
var text = "";

for (var i = 0; i < cars.length; i++) {
    text += "Carro " + i + cars [i]+ "<br>";
}
document.getElementById ("Carro").innerHTML = text;

alert(text)