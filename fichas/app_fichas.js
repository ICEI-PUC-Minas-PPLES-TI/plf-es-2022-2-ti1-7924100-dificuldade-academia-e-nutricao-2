const dbMock = {
    fichas: [ 
        { id: 1, 
          nome: 'Exercicio 1', 
          descricao: 'Estes exercícios são fáceis de fazer, não precisam de muito espaço nem de materiais específicos e são bastante eficazes. Conheça o treino que deve fazer todos os dias e que garante resultados.', 
          musculo: 'perna', 
          idObjetivo: 2, 
          equipamento: 'nenhum', 
          autor: 'Sergio Gomes',
          imagem: 'https://source.unsplash.com/random/120x120?exercicios&5',
          link: 'https://www.youtube.com/watch?v=Fem-R7n59O8'
        }, 
        { id: 2, 
            nome: 'Exercicio 2', 
            descricao: 'Não há nada como fazer agachamento para definir bumbum e pernas. Isso acontece porque é um exercício completo: trabalha vários grupos musculares da região, proporciona gasto calórico e turbina o ganho de massa magra .', 
            musculo: 'Coxa', 
            idObjetivo: 2, 
            equipamento: 'Halter', 
            autor: 'Ronaldo Goularte',
            imagem: 'https://source.unsplash.com/random/120x120?exercicios&5',
            link: 'https://www.youtube.com/watch?v=Fem-R7n59O8'
          }, { id: 3, 
            nome: 'Exercicio 3', 
            descricao: 'Es exercícios com halteres são uma ótima opção para treinamento da força muscular, além de terem muitos benefícios para a saúde como melhorar o condicionamento físico e a flexibilidade, ajudar a perder peso, aumentar a massa muscular e promover a coordenação e a estabilidade das articulações.', 
            musculo: 'Braço', 
            idObjetivo: 1, 
            equipamento: 'Halter', 
            autor: 'Tomás Tulio',
            imagem: 'https://source.unsplash.com/random/120x120?exercicios&5',
            link: '<iframe width="200" height="100" src="https://www.youtube.com/embed/Fem-R7n59O8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
          }
        ],

        objetivos: [
            { id: 1, descricao: 'Musculação' },
            { id: 2, descricao: 'Emagrecer' },
        ]

    
}
let db = JSON.parse (localStorage.getItem('dbFichas'))
if (!db) {
    db = dbMock
}



let FILTRO_OBJETIVO = 0
function getDescricaoObjetivo (id) {
    let idx = db.objetivos.findIndex (elem => elem.id == id)
    if (idx != -1)
        return db.objetivos[idx].descricao
    else    
        return 'Não identificado'
}

function alteraImagem (event) {
}


function exibeFichas () {
    let str = ''
    for (let i=0; i < db.fichas.length; i++) {
        let ficha = db.fichas[i]
        if   ((FILTRO_OBJETIVO == 0) || pet.idObjetivo == FILTRO_OBJETIVO)
        {
            str += `<div class="card col-md-4" >
            <img src="${ficha.imagem}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${ficha.nome}</h5>
              <p class="card-text"><span class="text-danger">${getDescricaoObjetivo(ficha.idObjetivo)}</span><br>
              ${ficha.descricao}</p>
              <p class="card-video">${ficha.link}</p>
              <a href="exibe_ficha.html?id=${ficha.id}" class="btn btn-primary">Mais detalhes</a>
            </div>
          </div>`
        }
    }
    document.querySelector('#tela').innerHTML = str
}

function exibeFicha (id) {
    let idx = db.fichas.findIndex (elem => elem.id == id)
    if (idx != -1) {
        let ficha = db.fichas[idx]
        let str = `<div class="card col-md-4" >
        <img src="${ficha.imagem}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${ficha.nome}</h5>
            <p class="card-text"><span class="text-danger">${getDescricaoObjetivo(ficha.idObjetivo)}</span><br>
            ${ficha.descricao}</p>
            <p class="card-video">${ficha.link}<iframe width="400" height="300" src="https://www.youtube.com/embed/Fem-R7n59O8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>`
    
        document.querySelector('#tela').innerHTML = str    
    }
    else {
        document.querySelector('#tela').innerHTML = '<h1>Ficha não encontrado</h1>'    
    }

}

function alterarImagem (id, imageURI) {    
    let idx = db.fichas.findIndex (elem => elem.id == id)
    if (idx != -1) {
        db.fichas[idx].imagem = imageURI
        localStorage.setItem('dbFichas', JSON.stringify (db))
    }
}
