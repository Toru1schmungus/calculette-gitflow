// Fonctions de calcul
function addition(a, b) {
    return a + b;
}

function soustraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

// Écouteur d'événement pour le bouton calculer
document.getElementById('calc').addEventListener('click', () => {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const op = document.getElementById('op').value;
    let result = 0;

    // Logique de calcul selon l'opération choisie
    if (op === 'add') {
        result = addition(n1, n2);
    } else if (op === 'sub') {
        result = soustraction(n1, n2);
    } else if (op === 'mul') {
        result = multiplication(n1, n2);
    }
    
    // Affichage du résultat
    document.getElementById('res').innerText = result;
});