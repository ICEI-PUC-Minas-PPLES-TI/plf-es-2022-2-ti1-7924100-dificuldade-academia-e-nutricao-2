// declara um conjunto inicial de contatos
var db_dieta_inicial = {
    "data": [
        {
            "id": 1,
            "autor": "receiteria.com.br",
            "descricao": "café da manha, pao de aveia fit",
            "objetivo": "emagrecer",
            "tempoDePreparo": "20 minutos",
            "link": "https://www.receiteria.com.br/receita/pao-de-aveia-fit-de-frigideira/",
        },
        {
            "id": 2,
            "autor": "receiteria.com.br",
            "descricao": "almoço, massa de panqueca sem gluten",
            "objetivo": "emagrecer",
            "tempoDePreparo": "9 minutos",
            "link": "https://www.receiteria.com.br/receita/massa-de-panqueca-sem-gluten/",
        },
        {
            "id": 3,
            "autor": "receiteria.com.br",
            "descricao": "lanche da tarde, sanduiche vegano",
            "objetivo": "emagrecer",
            "tempoDePreparo": "46 minutos",
            "link": "https://www.receiteria.com.br/receita/sanduiche-vegano-colorido/",
        },
        {
            "id": 4,
            "autor": "receiteria.com.br",
            "descricao": "jantar, omelete a florentina",
            "objetivo": "emagrecer",
            "tempoDePreparo": "15 minutos",
            "link": "https://www.receiteria.com.br/receita/omelete-a-florentina/",
        },
        {
            "id": 5,
            "autor": "receiteria.com.br",
            "descricao": "sobremesa, waffle de bananas",
            "objetivo": "emagrecer",
            "tempoDePreparo": "20 minutos",
            "link": "https://www.receiteria.com.br/receita/waffle-de-bananas/",
        },
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_dieta'));
if (!db) {
    db = db_dieta_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertDieta(dieta) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoDieta = {
        "id": novoId,
        "autor": dieta.autor,
        "descricao" : dieta.descricao,
        "objetivo": dieta.objetivo,
        "tempoDePreparo" : dieta.tempoDePreparo,
        "link": dieta.link,
    };

    // Insere o novo objeto no array
    db.data.push(novoDieta);
    displayMessage("dieta inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_dieta', JSON.stringify(db));
}

function updateDieta(id, dieta) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].autor = dieta.autor,
    db.data[index].descricao = dieta.descricao,
    db.data[index].objetivo = dieta.objetivo,
    db.data[index].tempoDePreparo = dieta.tempoDePreparo,
    db.data[index].link = dieta.link,

    displayMessage("Dieta alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_dieta', JSON.stringify(db));
}

function deleteDieta(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Dieta removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_dieta', JSON.stringify(db));
}