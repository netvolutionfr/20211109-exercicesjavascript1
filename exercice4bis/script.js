bouton = document.getElementById("bouton");
compteur = document.getElementById("compteur");

let nbClicks = 0;

function incrementerCompteur() {
    nbClicks++;
    compteur.innerText = nbClicks;
}

bouton.addEventListener("click", incrementerCompteur);
