const precoGasolina = 5;
const precoEtanol = 3;
const gasto = 10;
const distancia = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distancia / gasto;

if (tipoCombustivel === 'Etanol') {
    const valor = litrosConsumidos * precoEtanol;
    console.log(valor);
} else {
    const valor = litrosConsumidos * precoGasolina;
    console.log(valor);
}

