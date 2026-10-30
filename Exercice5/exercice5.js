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

// 2. Écrire calculerMoyenneNotes(notes) qui calcule la moyenne d’un tableau. Si le tableau est vide, retourner 0.
function calculerMoyenneNotes(notes) {
    if (notes.length === 0) {
        return 0;
    }
    let somme = 0;
    for (let i = 0; i < notes.length; i++) {
        somme += notes[i];
    }
    return somme / notes.length;
}
console.log(calculerMoyenneNotes(etudiantL2.notes));

// 3. Écrire ajouterNote(etudiant, nouvelleNote) qui retourne un nouvel objet avec la nouvelle note ajoutée. Utiliser spread pour ne pas modifier l’objet et le tableau d’origine.
function ajouterNote(etudiantL2, nouvelleNote) {
    return {
        ...etudiantL2,
        notes: [...etudiantL2.notes, nouvelleNote]
    };
}
const etudiantAvecNouvelleNote = ajouterNote(etudiantL2, 18);
console.log(etudiantAvecNouvelleNote);

