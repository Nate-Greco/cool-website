function changeText() {
    var paragraph = document.getElementById("para")
    paragraph.innerHTML="How did you find this?<br>You discovered his contact<br>You should screen shot this<br>Comemorate this moment<br><a href='mailto:yyznate@gmail.com?subject=You So Cool&body=I%20wish%20I%20could%20be%20as%20cool%20as%20you.'>yyznate@gmail.com</a>"
}

document.addEventListener("DOMContentLoaded", () => {
    var button = document.getElementById("switch up")
    button.onclick = changeText
})