// 1. On définit la fonction de calcul
function soustraction(a, b) {
    return a - b;
}

document.getElementById('calc').addEventListener('click', () => {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const op = document.getElementById('op').value;
    let result = 0;

    // 2. On utilise la fonction selon l'opération choisie
    if (op === 'sub') {
        result = soustraction(n1, n2);
    }
    
    document.getElementById('res').innerText = result;
});