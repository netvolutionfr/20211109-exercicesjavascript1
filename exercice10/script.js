bouton = document.getElementById("bouton");
paragraphe = document.getElementById("paragraphe");

let estVisible = false;

function afficheParagraphe() {
    if (estVisible) {
        paragraphe.style.opacity = 0;
        paragraphe.style.color = "red";
    } else {
        paragraphe.style.opacity = 1;
        paragraphe.style.color = "blue";
    }
    estVisible = !estVisible;
}

bouton.addEventListener("click", afficheParagraphe);