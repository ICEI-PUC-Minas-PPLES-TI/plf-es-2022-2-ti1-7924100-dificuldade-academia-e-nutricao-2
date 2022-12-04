// declara um conjunto inicial de contatos
var db_exercicio_inicial = {
    "data": [
        {
            "id": 1,
            "autor": "abdominais.com",
            "musculo": "abdomen",
            "objetivo": "fortalecer",
            "equipamento": "sem equipamento",
            "link": "https://youtu.be/YMGevmwBams",
        },
        {
            "id": 2,
            "autor": "fisic academia",
            "musculo": "gluteo",
            "objetivo": "fortalecer",
            "equipamento": "sem equipamento",
            "link": "https://youtu.be/m-ewcuzzZS0",
        },
        {
            "id": 3,
            "autor": "fisic academia",
            "musculo": "gluteo",
            "objetivo": "fortalecer",
            "equipamento": "sem equipamento",
            "link": "https://youtu.be/p1KsWs_SNjg",
        },
        {
            "id": 4,
            "autor": "saude na rotina",
            "musculo": "peito",
            "objetivo": "fortalecer",
            "equipamento": "sem equipamento",
            "link": "https://youtu.be/rig2BqSMoe4",
        },
        {
            "id": 5,
            "autor": "micheline masiole",
            "musculo": "panturrilha",
            "objetivo": "fortalecer",
            "equipamento": "sem equipamento",
            "link": "https://youtu.be/tfA5BoBPO04",
        },
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_exercicio'));
if (!db) {
    db = db_exercicio_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertExercicio(exercicio) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoExercicio = {
        "id": novoId,
        "autor": exercicio.autor,
        "musculo" : exercicio.musculo,
        "objetivo": exercicio.objetivo,
        "equipamento" : exercicio.equipamento,
        "link": exercicio.link,
    };

    // Insere o novo objeto no array
    db.data.push(novoExercicio);
    displayMessage("exercicio inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_exercicio', JSON.stringify(db));
}

function updateExercicio(id, exercicio) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].autor = exercicio.autor,
    db.data[index].musculo = exercicio.musculo,
    db.data[index].objetivo = exercicio.objetivo,
    db.data[index].equipamento = exercicio.equipamento,
    db.data[index].link = exercicio.link,

    displayMessage("Exercicio alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_exercicio', JSON.stringify(db));
}

function deleteExercicio(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Exercicio removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_exercicio', JSON.stringify(db));
}