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
    console.log(annee);
}

bouton.addEventListener('click', calculBissextile);

