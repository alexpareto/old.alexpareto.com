
var aboutholder = document.getElementsByClassName("aboutholder");
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
