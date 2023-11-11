/*****************************
* 023 - TABLEAUX - CODING CHALLENGE 3
*/
// 1. Créez un tableau appelé 'factures' contenant les trois montants des factures.
// 2. Créez une fonction appelée 'calculateurPourboire' prenant une facture comme argument.
// 3. À l'intérieur de la fonction 'calculateurPourboire', utilisez des instructions conditionnelles pour calculer le pourboire en fonction du montant de la facture.
//    - Si la facture est inférieure à $50, calculez 20% de la facture.
//    - Si la facture est entre $50 et $200, calculez 15% de la facture.
//    - Si la facture est supérieure à $200, calculez 10% de la facture.
// 4. La fonction 'calculateurPourboire' devrait renvoyer le montant du pourboire.
// 5. Créez un tableau vide appelé 'pourboires'.
// 6. Créez un autre tableau vide appelé 'montantsFinaux'.
// 7. Utilisez la fonction 'calculateurPourboire' pour calculer les pourboires pour chaque facture du tableau 'factures' et ajoutez-les au tableau 'pourboires'.
// 8. Pour chaque facture, calculez le montant final payé en ajoutant le montant de la facture au montant du pourboire, puis ajoutez-le au tableau 'montantsFinaux'.
// 9. Affichez les tableaux 'pourboires' et 'montantsFinaux' dans la console pour voir les résultats.
const factures =[29, 150, 300];
function calculateurPourboire (facture){
    if (facture<(50)){
        let pbFacture1= facture*0.20
        console.log(pbFacture1);
        return pbFacture1;
    }else if (facture>=50&&facture<200){
        let pbFacture2= facture*0.15
        console.log(pbFacture2);
        return pbFacture2
    }else if(facture>=200){
        let pbFacture3= facture*0.1
        console.log(pbFacture3);
        return pbFacture3;
    }
}
const pbFacture1 = calculateurPourboire(factures[0]);
const pbFacture2 = calculateurPourboire(factures[1]);
const pbFacture3 = calculateurPourboire(factures[2]);
const final1= factures[0]-pbFacture1;
const final2=factures[1]-pbFacture2;
const final3=factures[2]-pbFacture3;

const pourboires=[];
pourboires.push(pbFacture1);
pourboires.push(pbFacture2);
pourboires.push(pbFacture3);
console.log(pourboires);

const tableauxFinaux=[];
tableauxFinaux.push(final1);
tableauxFinaux.push(final2);
tableauxFinaux.push(final3);
console.log(tableauxFinaux);