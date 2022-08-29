vet = [];

function par() {
    const div = document.getElementById('numeros-par');
    div.innerHTML = ""
    for (var i = 0; i <= vet.length; i++) {
        if (vet[i]%2 == 0) {
            document.getElementById('numeros-par').innerHTML+= '[' + vet[i] + '] ';
        }
    }    
}

function impar() {
    const div = document.getElementById('numeros-impar');
    div.innerHTML = ""
    for (var i = 0; i <= vet.length-1; i++) {
        if (vet[i]%2 != 0) {
            document.getElementById('numeros-impar').innerHTML+= '[' + vet[i] + '] ';
        }
    }    
}

function vetor() {
    const div = document.getElementById('mostrar-vetor');
    div.innerHTML = ""
    num = document.getElementById('vet').value;
    vet.push(num);
    document.getElementById('mostrar-vetor').innerHTML+= vet;
}