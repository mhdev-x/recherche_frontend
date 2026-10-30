const etudiantL2 = {
id: 104,
prenom: "Aminata",
nom: "Fall",
notes: [13, 16, 12],
filiere: "IAGE"
};

// 1. Écrire extraireIdentite(etudiant) qui utilise le destructuring et retourne un objet contenant uniquement le prénom, le nom et la filière.
function extraireIdentite(etudiantL2) {
    const { 
        prenom,
        nom,
        filiere
    } = etudiantL2;
    return { 
        prenom,
        nom, 
        filiere 
    };
}
console.log(extraireIdentite(etudiantL2));