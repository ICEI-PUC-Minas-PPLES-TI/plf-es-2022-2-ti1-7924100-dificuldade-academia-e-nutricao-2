

function leDados() {
    let strDados = localStorage.getItem('db');
    let dbMockC = {};
    dbMockC = {
        conteudo: [
            { id: "1", musculo: "Peito", objetivo: "Desenvolvimento", equipamento: "Nenhum", autor: "Carlos", link: "https://www.youtube.com/embed/8-49TscRd0M", titulo: "Titulo", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati, exercitationem mollitia molestias quis cupiditate quia quod blanditiis sint quos asperiores quo dolorum architecto nisi atque, similique nihil incidunt porro!" },
            { id: "2", musculo: "Peito", objetivo: "Desenvolvimento", equipamento: "Nenhum", autor: "Carlos", link: "https://www.youtube.com/embed/8-49TscRd0M", titulo: "Titulo", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati, exercitationem mollitia molestias quis cupiditate quia quod blanditiis sint quos asperiores quo dolorum architecto nisi atque, similique nihil incidunt porro!" }
        ]
        }
    return dbMockC;
}

function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}

/* function favoritar (idVideo) {
    pegar o id do perfil
    localizar o perfil no db que esta no localStorage
    realizar a inclusao do idVideo no perfil.idFavoritos.push(idVideo)
    salva os dados novamente no localStorage
} */

function imprimeDados() {

    var cont = '';
    let dbMockC = leDados();
    salvaDados(dbMockC);
    console.log(dbMockC);
    for (i = 0; i < dbMockC.conteudo.length; i++) {
        cont += `
        <div class="posts">
            <iframe width="560" height="310" src="${dbMockC.conteudo[i].link}"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
            
            <div class="texto">
                <div class="headpost">
                    <h2>${dbMockC.conteudo[i].titulo}</h2>
                    <button id="bntFav"class="fav" onclick="favoritar(${dbMockC.conteudo[i].id})">Favoritar</button>
                </div>
                <p>${dbMockC.conteudo[i].descricao}</p>
                
            </div>
        </div>`
    }
    document.getElementById('conteudosDisplay').innerHTML = cont;
}

