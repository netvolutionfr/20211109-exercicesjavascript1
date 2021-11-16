function estBissextile(annee) {
    if (annee % 400 === 0) {
        return true;
    } else {
        if (annee % 4 === 0) {
            if (annee % 100 !== 0) {
                return true;
            }
        }
    }
    return false;
}

bouton = document.getElementById('bouton');

function calculBissextile() {
    annee = document.getElementById('annee').value;
    resultat = document.getElementById("resultat");
    if (estBissextile(annee)) {
        resultat.innerText = "L'année est bien bissextile";
    } else {
        resultat.innerText = "L'année n'est pas bissextile";
    }
}

bouton.addEventListener('click', calculBissextile);

