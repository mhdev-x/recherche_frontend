// 1. Écrire additionner(...nombres) qui accepte un nombre variable d’arguments et retourne leur somme. Tester avec 2, 3 puis 5 valeurs.
function additionner(...nombres) {
    let somme = 0;
    for (let i = 0; i < nombres.length; i++) {
        somme += nombres[i];
    }
    return somme;
}
console.log(additionner(2, 3)); // 5
console.log(additionner(1, 2, 3, 4, 5)); // 15

// 2. Écrire afficherPremierEtAutres(premier, ...autres) qui affiche le premier argument séparément puis le tableau des autres arguments.
function afficherPremierEtAutres(premier, ...autres) {
    console.log("Le premier argument est : " , premier);
    console.log("Les autres arguments sont : " , autres);

}
afficherPremierEtAutres("Bonjour", "Comment", "ça", "va", "????");

// 3. Écrire creerFiche(nom, filiere, ...competences) qui retourne un objet contenant le nom, la filière et un tableau de compétences.
function creerFiche(nom, filiere, ...competences) {
    return {
        nom: nom,
        filiere: filiere,
        competences: competences
    };
}
console.log(creerFiche("Axe", "IAGE", "JavaScript", "HTML", "CSS"));

// 4. Expliquer pourquoi le paramètre rest doit être placé à la fin de la liste des paramètres.
// Réponse : Le paramètre rest doit être placé à la fin de la liste des paramètres 
// car il capture tous les arguments supplémentaires passés à la fonction. 
// Si un autre paramètre était placé après le paramètre rest, 
// il ne pourrait jamais recevoir d'arguments car tous les arguments supplémentaires seraient capturés par le paramètre rest. 
// Autrement dit, le rest ramasse tout ce qui reste. Si tu le mets au début, 
// il n'y aurait plus rien à ramasser pour les autres paramètres, 
// et JavaScript ne saurait plus où placer les arguments suivants.
