document.getElementById('calc').addEventListener('click', () => {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const op = document.getElementById('op').value;
    let result = 0;

    // Les fonctions de calcul seront ajoutées ici via les branches features
    
    document.getElementById('res').innerText = result;
});