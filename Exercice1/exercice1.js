// 1. Écrire calculerMoyenne(note1, note2, note3) qui retourne la moyenne de trois notes.
function calculerMoyenne(note1, note2, note3) {
    let moyenne = (note1 + note2 + note3) / 3;
    return moyenne; 
}
console.log(calculerMoyenne(12, 14, 16));

// 2. Écrire estAdmis(moyenne) qui retourne true si la moyenne est supérieure ou égale à 10, sinon false.
function estAdmis(moyenne) {
    if (moyenne >= 10) {
        return true;
    } else {
        return false;
    }
}
console.log(estAdmis(9.5));