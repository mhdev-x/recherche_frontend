// 1. Créer tousLesEtudiants en rassemblant les deux groupes sans écrire chaque nom manuellement.
const groupeA = ["Awa", "Moussa", "Fatou"];
const groupeB = ["Ibra", "Mariama"];
const tousLesEtudiants = [...groupeA, ...groupeB];
console.log(tousLesEtudiants);

// 2. Créer une copie de groupeA, puis ajouter "Cheikh" dans la copie. Vérifier que le tableau original n’a pas changé.
const copieGroupeA = [...groupeA];
copieGroupeA.push("Cheikh");
console.log(copieGroupeA);
console.log(groupeA);

// 3. Créer etudiantComplet à partir de etudiantBase, en ajoutant age: 22 et ville: "Dakar" .
const etudiantBase = {
    nom: "Ndiaye",
    prenom: "Moussa",
    filiere: "IAGE"
};
const etudiantComplet = {
    ...etudiantBase,
    age: 22,
    ville: "Dakar"
};
console.log(etudiantComplet);

// 4. Créer une copie de etudiantBase en remplaçant uniquement le niveau par "L3". Vérifier que l’objet original conserve "L2" .
const etudiantBase2 = {
    nom: "Ndiaye",
    prenom: "Moussa",
    filiere: "IAGE",
    niveau: "L2"
};
const etudiantModifie = {
    ...etudiantBase2,
    niveau: "L3"
};
console.log(etudiantModifie);
console.log(etudiantBase2);

// 5. Fusionner les objets coordonnees et contact dans un objet profil. Si une propriété existe dans les deux objets, observer la valeur conservée.
const coordonnees = {
    adresse: "Dakar",
    telephone: "77 123 45 67"
};
const contact = {
    email: "moussa.ndiaye@example.com"
};
const profil = {
    ...coordonnees,
    ...contact
};
console.log(profil);