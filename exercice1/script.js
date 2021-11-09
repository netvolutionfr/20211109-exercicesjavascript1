const date = new Date();

/* Creation et affichage de la date */
const chaineDate = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();

const dateSpan = document.getElementById('date');
dateSpan.innerText = chaineDate;

/* Creation et affichage de l'heure */
const chaineHeure = date.getHours() + ':' + (date.getMinutes()<10?'0':'') + date.getMinutes() + ':' + (date.getSeconds()<10?'0':'') + date.getSeconds();

document.getElementById('heure').innerText = chaineHeure;
