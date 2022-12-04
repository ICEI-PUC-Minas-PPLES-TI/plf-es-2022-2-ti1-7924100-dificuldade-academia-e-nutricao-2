
export const dbMockC = {
    conteudo: [
        /* dados de teste */
        { id: "1", musculo: "Peito", objetivo: "Desenvolvimento", equipamento: "Nenhum", autor: "Carlos", link: "https://www.youtube.com/embed/8-49TscRd0M", titulo: "Titulo", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati, exercitationem mollitia molestias quis cupiditate quia quod blanditiis sint quos asperiores quo dolorum architecto nisi atque, similique nihil incidunt porro!" },
        { id: "2", musculo: "Peito", objetivo: "Desenvolvimento", equipamento: "Nenhum", autor: "Carlos", link: "https://www.youtube.com/watch?v=oAPCPjnU1wA", titulo: "Titulo2", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati, exercitationem mollitia molestias quis cupiditate quia quod blanditiis sint quos asperiores quo dolorum architecto nisi atque, similique nihil incidunt porro!" },
        { id: "3", musculo: "Peito", objetivo: "Desenvolvimento", equipamento: "Nenhum", autor: "Carlos", link: "https://www.youtube.com/embed/eQ4GKdK_Xps", titulo: "Titulo3", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati, exercitationem mollitia molestias quis cupiditate quia quod blanditiis sint quos asperiores quo dolorum architecto nisi atque, similique nihil incidunt porro!" }
    ]
}


function leDados() {
    let strDados = localStorage.getItem('db');
    let objDados = {};
    objDados = dbMockC

    return objDados;
}

function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}

function imprimeDados() {

    var cont = '';
    let objDados = leDados();
    salvaDados(objDados);
    console.log(objDados);
    for (i = 0; i < objDados.conteudo.length; i++) {
        cont += `<div class="posts"><iframe width="560" height="315" src="${objDados.conteudo[i].link}"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    <div class="texto">
        <h2>${objDados.conteudo[i].titulo}</h2>
        <p>${objDados.conteudo[i].descricao}</p>
    </div></div>`
    }
    document.getElementById('conteudosDisplay').innerHTML = cont;

}

