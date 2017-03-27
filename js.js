
var aboutholder = document.getElementsByClassName("aboutholder");
var array = ["#9ad3de", "#89bdd3", "#dbe9d8", "#b0aac2", "#dbc3d0", "#4D7EA8"];
var number = Math.floor(Math.random() * array.length);
aboutholder[0].style.background = array[number];
document.onclick = function(e){
    var number = Math.floor(Math.random() * array.length);
    aboutholder[0].style.background = array[number];
}
<!--//--><![CDATA[//><!--
var images = new Array()
function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image()
        images[i].src = preload.arguments[i]
    }
}
preload(
    "images/Facebook-color.svg",
    "images/Github-color.svg",
    "images/GooglePlus-color.svg",
    "images/Instagram-color.svg",
    "images/LinkedIn-color.svg",
    "images/Spotify-color.svg",
    "images/Twitter-color.svg",
    "images/usc-color.png"
)
//--><!]]>
