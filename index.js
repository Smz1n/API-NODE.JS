const express = require('express');
const cors = require('cors');
const host = 'localhost';
const port = 8000;

const token = 'cachorro';

// iniciando uma aplicação express (que vai facilitar a criação)
const app = express();
app.use(cors());

const enderecos = {
    '60352590': {
        'logradouro': 'Rua Barca Velha',
        'bairro': 'Quintino cunha',
        'cidade': 'Fortaleza',
        'estado': 'Ceará'
    },
    '12345678': {
        'logradouro': 'Rua 25 de março',
        'bairro': 'Alameda dos Anjos',
        'cidade': 'Caucaia',
        'estado': 'Ceará'
    },
    '60440782': {
        'logradouro': 'Rua Estado do Rio de janeiro',
        'bairro': 'Bela Vista',
        'cidade': 'Fortaleza',
        'estado': 'Ceará'
    },
}


/* ROTAS */
app.get('/produtos', (req, res) => {
    res.send('listar produtos');
})

//validando se o cep e valido
app.get('/buscar-endereco/:cep',  cors(), (req, res) => {
    if (req.headers.authorization !== token) {
        res.status(401);
        res.send();


       return; 
    };
    



    //recuperando as variaveis
    let parametros = req.params;

    if(parametros.cep.length !== 8) {
        res.status(400);
        res.send({
            'erro': 'Cep invalido',
            'detalhes': `O cep precisa de 8 digitos, foi informado apenas ${parametros.cep.length}` 
        });
        return;
    }

    if (!enderecos[parametros.cep]) {
        res.status(404);

        res.send({
            'erro': 'Cep não encontrado'
        })
    }

    let conteudo = enderecos[parametros.cep];

    res.send(conteudo);
});

/* FIM DAS ROTAS */

//subindo o servidor





app.listen(port, () => {
    console.log('api rodando no endereço localhost:'+port);
})