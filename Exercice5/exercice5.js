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

// 4. Écrire creerResume(etudiant, ...options) qui retourne un résumé contenant l’identité, la moyenne et les options reçues dans un tableau.
function creerResume(etudiantL2, ...options) {
    const identite = extraireIdentite(etudiantL2);
    const moyenne = calculerMoyenneNotes(etudiantL2.notes);
    return {
        ...identite,
        moyenne,
        options
    };
}
const resumeEtudiant = creerResume(etudiantL2, "Option1", "Option2");
console.log(resumeEtudiant);

// QUESTIONS DE COMPREHENSION

// 1. Quelle est la différence entre une fonction qui utilise return et une fonction qui utilise uniquement console.log() ?
// Réponse : 
// En gros, return sert à "donner" le résultat à l'extérieur de la fonction pour qu'on puisse le réutiliser 
// (par exemple, le stocker dans une variable pour faire d'autres calculs avec). console.log(), c'est juste un outil 
// d'affichage pour le développeur : ça écrit dans la console, mais ça ne renvoie rien d'utilisable (la fonction 
// renvoie undefined si on ne met pas de return).

// 2. Quelle est la différence entre le destructuring d'un objet et celui d'un tableau ?
// Réponse : 
// Pour un objet, on utilise les accolades {} et on extrait les données grâce au nom de la propriété 
// (ex: nom, prenom). Pour un tableau, on utilise les crochets [] et on extrait les données selon leur position/ordre 
// (le 1er, le 2ème...). On peut aussi renommer une propriété d'objet (ex: niveau: classe), ou sauter une position 
// dans un tableau avec une virgule vide.

// 3. Quelle différence faites-vous entre spread et rest ? Donnez un exemple de chaque.
// Réponse : 
// Bien qu'ils utilisent tous les deux les trois petits points (...), ils font exactement l'inverse :
// - Le Spread sert à "déballer" ou étaler le contenu. Exemple : const copie = [...tableau];
// - Le Rest sert à "ramasser" ou regrouper ce qui reste dans une seule variable. 
// Exemple : function additionner(...nombres) (ça regroupe tous les arguments dans un tableau).

// 4. Pourquoi est-il souvent utile de créer une copie avec spread avant de modifier un tableau ou un objet ?
// Réponse : 
// C'est pour respecter le principe d'immutabilité. En JavaScript, si on modifie directement un objet ou 
// un tableau, on risque de créer des bugs ailleurs dans le code. En créant une copie avec le spread, on peut 
// modifier la copie tranquillement sans toucher aux données d'origine. On garde ainsi nos données de départ intactes.

// 5. Que se passe-t-il si deux objets fusionnés avec spread possèdent la même propriété ?
// Réponse : 
// C'est le dernier objet de la liste qui "gagne". Si on fait { ...objet1, ...objet2 } et que les deux 
// ont une clé "nom", alors c'est la valeur de objet2 qui sera gardée, parce que c'est lui qui a été lu en dernier 
// et qui vient écraser la valeur de objet1.