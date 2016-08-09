
var aboutholder = document.getElementsByClassName("aboutholder");
var array = ["#9ad3de", "#89bdd3", "#dbe9d8", "#b0aac2", "#dbc3d0", "#4D7EA8"];
var number = Math.floor(Math.random() * array.length);
aboutholder[0].style.background = array[number];
document.onclick = function(e){
    var number = Math.floor(Math.random() * array.length);
    aboutholder[0].style.background = array[number];
}
