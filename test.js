
//Encuentra el número más alto que es menor que el número consultado 
//y el número más bajo que es mayor que el número consultado.
function BuscarLimites(lista, consulta){
    const results = [];

    consulta.forEach(c => {
        let bajo = 'X';
        let alto = 'X';

        for (let i = 0; i < lista.length; i++) {
            if (lista[i] < c) {
                bajo = lista[i];
            } else if (lista[i] > c) {
                alto = lista[i];
                break;
            }
        }

        results.push(`${bajo} ${alto}`);
    });

    return results;
}
//llena los array con los datos del formulario
function Formulario() {
    const listaSize = parseInt(document.getElementById('listaSize').value, 10);
    const lista = document.getElementById('lista').value.split(' ').map(num => parseInt(num, 10));
    const consultasCant = parseInt(document.getElementById('consultasCant').value, 10);
    const consultas = document.getElementById('consultas').value.split(' ').map(num => parseInt(num, 10));

    if (lista.length !== listaSize || consultas.length !== consultasCant) {
        alert('El tamaño de la lista de números o el número de consultas no coincide con los datos ingresados.');
        return;
    }

    const resultados = BuscarLimites(lista, consultas);

    const resultsDiv = document.getElementById('resultados');
    resultsDiv.innerHTML = resultados.map(result => `<p>${result}</p>`).join('');
}