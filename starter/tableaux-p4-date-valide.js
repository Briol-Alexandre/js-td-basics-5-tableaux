/*
TABLEAUX - PRÉPA 4 : Date valide - version 3
- Déclarez deux fonctions :
    - La première fonction 'isBissextile' retourne true ou false selon que l'année est bissextile ou pas.
    - La deuxième fonction 'isValid' retourne true ou false selon que la date est valide ou pas.
    Stockez cette fois le nombre maximum de jours autorisé par mois dans un tableau (utilisez 'isBissextile' pour gérer le cas du mois de février).
- Utilisez 'isValid' pour décider si votre date est valide avant d'afficher votre message dans la console.
*/

// Fonction pour vérifier si une année est bissextile
const jourMois = [31, 28, 29, 30];
function isBissextile(annee) {
    // Code pour déterminer si 'annee' est bissextile
    if (annee % 4 === 0) {
        if (annee % 100 === 0) {
            if (annee % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}
isBissextile();
// Fonction pour vérifier si une date est valide
function isValid(jour, mois, annee) {
    // Code pour vérifier si la date (jour, mois, annee) est valide
    switch (mois) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if (jour > jourMois[0]) {
                return false;
            }
            break;
        case 2:
            if (isBissextile(annee)) {
                if (jour > jourMois[1]) {
                    return false;
                }
            }
            break;
    }

    return true;
}


isValid(18, 9, 2023);
if (isValid(true)){
    console.log('Votre date est valide')
}else{
    console.log('Votre date n\'est pas valide');
}


// Utilisez 'isValid' pour vérifier si une date est valide avant d'afficher un message dans la console
