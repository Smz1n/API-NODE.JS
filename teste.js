function severino (funcionalidade) {
    funcionalidade();
}

severino (() => {
    console.log('Lavando o carro');
})

severino (() => {
    console.log('buscando o menino na escola')
    console.log('Comprando ração para o cachorro')
    console.log('alimentando os cachorro')
})