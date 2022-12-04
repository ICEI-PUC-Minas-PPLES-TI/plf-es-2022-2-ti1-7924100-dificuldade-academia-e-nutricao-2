import {dbMockC} from "./script.js"

const dbMock = {
    perfil: 
        {
            id: '1',
            nome: 'Flavio Abreu',
            email: 'flavinho@gmail.com',
            bio: 'Iniciante na academia',
            imagem: 'imgs/perfil.png',
            idFavoritos: [1, 3]
        }
}

function exibePerfil () {
    let pessoa = dbMock.perfil
    let str = `
            <img src="imgs/perfil.png" alt="">
            <div  class="info">
                <div>
                    <h2>${pessoa.nome}</h2>
                    <p>${pessoa.email}</p>
                </div>
                
            </div>`
    document.querySelector('.dados').innerHTML = str
}

function exibeFavoritos () {
    let pessoa = dbMock.perfil
    let fav = dbMockC.conteudo
    let str = ""
    for (let i=0; i < pessoa.idFavoritos.length; i++) {
        for (let j=0; j < fav.length; j++){
            if (pessoa.idFavoritos[i] == fav[j].id){
                str += `                
                    <div class="posts">
                        <div>
                            <iframe width="560" height="315" src="${fav[j].link}"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                        <div class="texto">
                            <h2>${fav[j].titulo}</h2>
                            <p>${fav[j].descricao}</p>
                        </div>
                    </div>`
            }
        }
    } 
    document.querySelector('.favoritos').innerHTML = str
}

document.body.onload = () => {
    exibePerfil();
    exibeFavoritos();
}