const etudiant = { 
    id: 2026, 
    nom: "Ndiaye", 
    prenom: "Moussa", 
    filiere: "IAGE", 
    niveau: "L2", 
    ville: "Dakar" 
};

const resultats = [15, 11, 17, 13, 16];


// 1. Avec le destructuring d’objet, extraire nom, prenom et filiere.
const { 
    nom, 
    prenom, 
    filiere 
} = etudiant;

// 2. Extraire niveau dans une variable appelée classe (renommage).
const {niveau : classe} = etudiant;

// 3. Avec le destructuring de tableau, récupérer la première, la deuxième et la dernière note sans modifier le tableau d’origine.
const [premiere, deuxieme, ...dernieres] = resultats;
const derniere = dernieres[dernieres.length - 1];

// 4. Extraire la première et la troisième note en laissant volontairement une position ignorée.
const [note1, , note3] = resultats;

// 5. Utiliser une valeur par défaut pour extraire la propriété email, absente de l’objet.
const { email = "etudiant@gmail.com"} = etudiant;

// 6. Afficher une phrase de présentation contenant le prénom, le nom, la filière et la classe.
console.log(`Bonjour, je m'appelle ${prenom} ${nom}, je suis en filière ${filiere} et je suis en classe de ${classe} .`);
