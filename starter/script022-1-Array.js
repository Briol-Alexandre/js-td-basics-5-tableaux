/*****************************
 * 022 - Les tableaux indicés (Arrays)
 */

// 1. Initialiser un nouveau tableau
// EXERCICE 1 : Créez un tableau appelé "semaine" qui contient les noms des jours de la semaine
const jour1='lundi';
const jour2='mardi';
const jour3='mercredi';
const jour4='jeudi';
const jour5='vendredi';
const jour6='samedi';
const jour7='dimanche';

const jours =['lundi', 'mardi','mercredi', 'jeudi', 'vendredi','samedi', 'dimanche'];
// 2. Accéder à un élément du tableau
// EXERCICE 2 : Affichez le premier jour de la semaine et le dernier jour de la semaine en utilisant les indices du tableau
console.log(jours[0]);
// 3. Nombre d'éléments dans un tableau
// EXERCICE 3 : Affichez le nombre de jours dans une semaine et le dernier jour de la semaine

console.log(jours.length);
jours.push('dimanche2')
console.log(jours[6]);
console.log(jours)

// 4. Modifier les données d'un tableau
// EXERCICE 4 : Modifiez "samedi" en "saturday", réaffichez le tableau, stockez "dimanche" dans une variable jourFerie, affichez le contenu de la variable, ajoutez un nouveau jour, "dimanche2", à la fin de la semaine, puis réaffichez le tableau des jours de la semaine.
jours[5]='saturday';
// 5. Un tableau peut contenir des données de différents types
// 6. Méthodes associées à un tableau
// EXERCICE 5 : Suivez les consignes pour manipuler le tableau de fruits
