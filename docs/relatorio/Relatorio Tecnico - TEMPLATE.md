# Informações do Projeto
BeHealthy

Engenharia de Software - PUC Minas

## Participantes

- Henrique Mascarenhas
- João Arthur
- Lucas Hemétrio
- Paulo Artur Martins da Silva

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução
O bom cuidado com a alimentação apropriada e exercícios físicos sempre deve ser uma prioridade para qualquer pessoa, para ter uma boa saúde e viver bem. 

Em paralelo, tem-se observado que conforme as evoluções tecnológicas e maiores comodismos e consumo de comidas rápidas e fáceis, além de crises financeiras. Muitas pessoas têm falta de exercícios apropriados e alimentação saudável para um bom condicionamento físico.

Diante disso, torna-se fundamental a existência de mais formas para incentivar a nutrição e exercícios de maneira fácil e acessível, para mais pessoas poderem ter acesso a instruções para melhorar a saúde ou porte físico desejado

## Problema
Como foi dito, o problema que se procura resolver é que muitas pessoas tem dificuldades ou difícil acesso, a informação e instrução de forma fácil a alimentação saudável e exercícios físicos adequados, prejudicando a autoestima e saúde.

> Nesse momento você deve apresentar o problema que a sua aplicação deve
> resolver. No entanto, não é a hora de comentar sobre a aplicação.
> Descreva também o contexto em que essa aplicação será usada, se
> houver: empresa, tecnologias, etc. Novamente, descreva apenas o que de
> fato existir, pois ainda não é a hora de apresentar requisitos
> detalhados ou projetos.
>
> Nesse momento, o grupo pode optar por fazer uso
> de ferramentas como Design Thinking, que permite um olhar de ponta a
> ponta para o problema.
>
> **Links Úteis**:
> - [Objetivos, Problema de pesquisa e Justificativa](https://medium.com/@versioparole/objetivos-problema-de-pesquisa-e-justificativa-c98c8233b9c3)
> - [Matriz Certezas, Suposições e Dúvidas](https://medium.com/educa%C3%A7%C3%A3o-fora-da-caixa/matriz-certezas-suposi%C3%A7%C3%B5es-e-d%C3%BAvidas-fa2263633655)
> - [Brainstorming](https://www.euax.com.br/2018/09/brainstorming/)

## Objetivos

O objetivo do trabalho é criar um site acessível para um grande número de pessoas e fácil de navegar e entender, fornecendo instruções adequadas para um condicionamento físico saudável.

Temos objetivos principais como:
●	Fornecer instruções adequadas de exercícios para se seguir, conforme o objetivo individual da pessoa. 
●	Divulgar receitas e dicas para uma dieta adequada para o interesse do usuário.


> Aqui você deve descrever os objetivos do trabalho indicando que o
> objetivo geral é desenvolver um software para solucionar o problema
> apresentado acima. Apresente também alguns (pelo menos 2) objetivos
> específicos dependendo de onde você vai querer concentrar a sua
> prática investigativa, ou como você vai aprofundar no seu trabalho.
> 
> **Links Úteis**:
> - [Objetivo geral e objetivo específico: como fazer e quais verbos utilizar](https://blog.mettzer.com/diferenca-entre-objetivo-geral-e-objetivo-especifico/)

## Justificativa

Em um artigo da OMS (Organização Mundial de Saúde), realizado em 2020, quatro a cinco milhões de mortes por ano poderiam ser evitadas se a população global fosse mais fisicamente ativa. 

Com ações e investimentos em políticas para promover a atividade física e reduzir o comportamento sedentário podem ajudar a alcançar os Objetivos de Desenvolvimento Sustentável (ODS) e garantir um futuro melhor. 


> Descreva a importância ou a motivação para trabalhar com esta aplicação
> que você escolheu. Indique as razões pelas quais você escolheu seus
> objetivos específicos ou as razões para aprofundar em certos aspectos
> do software.
> 
> O grupo de trabalho pode fazer uso de questionários, entrevistas e
> dados estatísticos, que podem ser apresentados, com o objetivo de
> esclarecer detalhes do problema que será abordado pelo grupo.
>
> **Links Úteis**:
> - [Como montar a justificativa](https://guiadamonografia.com.br/como-montar-justificativa-do-tcc/)

## Público-Alvo

Todas as pessoas serão beneficiadas com esse trabalho, porém nós nos focamos nas pessoas mais jovens que podem prejudicar seu desenvolvimento por seu sedentarismo mais elevado e estão perdidas ou sem acesso á informações sobre saúde adequadas.

Com isso em mente, nosso público alvo são pessoas de qualquer gênero jovens entre 16-30 anos, que tem baixa autoestima, procuram uma saúde melhor ou corpo com que sintam mais confortáveis para ajuda-los a cumprir seus objetivos. 


> Descreva quem serão as pessoas que usarão a sua aplicação indicando os
> diferentes perfis. O objetivo aqui não é definir quem serão os
> clientes ou quais serão os papéis dos usuários na aplicação. A ideia
> é, dentro do possível, conhecer um pouco mais sobre o perfil dos
> usuários: conhecimentos prévios, relação com a tecnologia, relações
> hierárquicas, etc.
>
> Adicione informações sobre o público-alvo por meio de uma descrição
> textual, ou diagramas de personas, mapa de stakeholders, ou como o
> grupo achar mais conveniente.
> 
> **Links Úteis**:
> - [Público-alvo: o que é, tipos, como definir seu público e exemplos](https://klickpages.com.br/blog/publico-alvo-o-que-e/)
> - [Qual a diferença entre público-alvo e persona?](https://rockcontent.com/blog/diferenca-publico-alvo-e-persona/)
 
# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foram consolidados por meio de entrevistas com pessoas cujo possuíam ambição para praticar exercícios ou ter uma alimentação saudável, porém possuem dificuldade para se realizar isso. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

> Apresente uma visão geral do que será abordado nesta parte do
> documento, enumerando as técnicas e/ou ferramentas utilizadas para
> realizar a especificações do projeto

## Personas 

As personas levantadas durante o processo de entendimento do problema são apresentadas na Figuras que se seguem.


> Relacione as personas identificadas no seu projeto e os respectivos mapas de empatia. Lembre-se que 
> você deve ser enumerar e descrever precisamente e de forma
> personalizada todos os principais envolvidos com a solução almeja. 
> 
> Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina
> e/ou nos seguintes links:
>
> **Links Úteis**:
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Como fazer um mapa de empatia - Vídeo](https://www.youtube.com/watch?v=JlKHGpVoA2Y)
> 
> 
> **Exemplo de Persona**
> 
![personas1](https://user-images.githubusercontent.com/63072372/192752563-19d51f7b-b1f0-494e-a883-c44789e13655.png)



> 
> 
> Fonte: [Como criar uma persona para o seu negócio](https://raissaviegas.com.br/como-criar-uma-persona/)


## Histórias de Usuários


A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários.

![personas](https://user-images.githubusercontent.com/63072372/192752321-99d1cbb4-fc43-4cc3-9dc3-28aef50578eb.png)



> Apresente aqui as histórias de usuário que são relevantes para o
> projeto de sua solução. As Histórias de Usuário consistem em uma
> ferramenta poderosa para a compreensão e elicitação dos requisitos
> funcionais e não funcionais da sua aplicação. Se possível, agrupe as
> histórias de usuário por contexto, para facilitar consultas
> recorrentes à essa parte do documento.
>
> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve mostrar pagina principal de planos de dieta | ALTA |
|RF-002| O site deve mostrar os alimentos de cada plano de dieta | ALTA |
|RF-003| O site deve mostrar a pagina principal de exercicios fichas | ALTA |
|RF-004| O site deve mostrar os exercícios de cada ficha e explica-los | ALTA |
|RF-005| O site deve mostrar pra que serve cada tipo de alimento e explicar a sua importância pra o corpo | ALTA | 
|RF-006| Criar uma agenda para anotar o progresso | ALTA | 
|RF-007| O site deve ensinar receitas saudáveis rápidas, práticas e barata | MÉDIA |
|RF-008| Favoritar os Exercicios | MÉDIA | 




### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku);  | ALTA | 
|RNF-002| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge) |  ALTA | 

> Com base nas Histórias de Usuário, enumere os requisitos da sua
> solução. Classifique esses requisitos em dois grupos:
>
> - [Requisitos Funcionais (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
>   correspondem a uma funcionalidade que deve estar presente na
>   plataforma (ex: cadastro de usuário).
>
> - [Requisitos Não Funcionais (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
>   correspondem a uma característica técnica, seja de usabilidade,
>   desempenho, confiabilidade, segurança ou outro (ex: suporte a
>   dispositivos iOS e Android).
>
> Lembre-se que cada requisito deve corresponder à uma e somente uma
> característica alvo da sua solução. Além disso, certifique-se de que
> todos os aspectos capturados nas Histórias de Usuário foram cobertos.
> 
> **Links Úteis**:
> 
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


> Enumere as restrições à sua solução. Lembre-se de que as restrições
> geralmente limitam a solução candidata.
> 
> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


# Projeto de Interface

A interface foi desenvolvida para manter uma aparência simples e fácil de usar.

## User Flow

![userflowBeHealthy](https://user-images.githubusercontent.com/63072372/192672258-2b4dbc2a-665d-41f8-b10d-45c3e5e1e858.png)

## Wireframes
Home
![Home](https://user-images.githubusercontent.com/63072372/192672432-8ddb626f-dfcf-4397-9850-88ae0ab846b7.png)
Tela de Login
![login](https://user-images.githubusercontent.com/63072372/192672471-c04a240a-52cf-4dc5-9640-e089191eeba9.png)
Tela de criação de contas
![criarconta](https://user-images.githubusercontent.com/63072372/192672518-827787ac-20ca-463c-9e88-6243910a6483.png)
Tela com lista de fichas
![listafichas](https://user-images.githubusercontent.com/63072372/192672559-68629dac-d38b-495e-a6ff-c7f27362887e.png)
Tela com exercícios de uma ficha
![exficha](https://user-images.githubusercontent.com/63072372/192672606-82b01059-91da-443f-90ba-5faeace8bc1c.png)
Tela com lista de dietas
![listadietas](https://user-images.githubusercontent.com/63072372/192672632-9ce6f55e-c9db-4ce5-8225-ab22e8018b4b.png)
Tela com o plano de uma dieta
![planodieta1](https://user-images.githubusercontent.com/63072372/192672689-83dd5cba-8d54-43e2-8279-95b4a0a34bc2.png)
Tela com receitas
![receitas](https://user-images.githubusercontent.com/63072372/192672715-70aa75ef-e840-41a5-966f-90780af5c73e.png)



# Metodologia

O método usado pelo grupo para a concepção do porjeto foi o Design Thinking para a análise do problema abordado pelo grupo e criar possiveis soluções. Para o desenvolvimento do projeto o metodo Scrum por sua divisão em pequenos ciclos de trabalho, as Sprints.
> 


## Divisão de Papéis

O grupo optou por usar o método Scrum. Tendo isso em mente a divisão de papeis será a seguinte:

|Membro                | Função                        |
|----------------------|-------------------------------|
|Henrique Mascarennhas | Desenvolvedor                 |
|João Arthur           | Desenvolvedor                 |
|Lucas Hemétrio        | Desenvolvedor e Scrum Master  |
|Paulo Artur           | Desenvolvedor e Product Owner |



## Ferramentas

......  COLOQUE AQUI O SEU TEXTO - SIGA O EXEMPLO DA TABELA ABAIXO  ......

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  https://miro.com/app/board/uXjVPTchm2M=/ | 
|Repositório de código | GitHub | https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-2-ti1-7924100-dificuldade-academia-e-nutricao-2 | 
|Hospedagem do site | Replit |  https://BeHealthy.lucashemetrio.repl.co | 
|Protótipo Interativo | Figma | https://www.figma.com/proto/vS6gHbUQjrExaSV6ku3N2f/BeHealthy?node-id=1%3A8&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A8 | 

>
> Liste as ferramentas empregadas no desenvolvimento do
> projeto, justificando a escolha delas, sempre que possível.
> 
> As ferramentas empregadas no projeto são:
> 
> - Editor de código.
> - Ferramentas de comunicação
> - Ferramentas de diagramação
> - Plataforma de hospedagem
> 
> O editor de código foi escolhido porque ele possui uma integração com o
> sistema de versão. As ferramentas de comunicação utilizadas possuem
> integração semelhante e por isso foram selecionadas. Por fim, para criar
> diagramas utilizamos essa ferramenta por melhor captar as
> necessidades da nossa solução.
> 




# Projeto da Solução

> A solução foi desenvolvida ao longo de 3 meses com encontros uma vez na semana com nossos responsáveis. 
> O grupo tentou manter o mais próximo possível do protótipo original. Seguem mais alguns detalhes sobre o desenvolvimento do projeto

## Tecnologias Utilizadas e Arquitetura

> Para a criação do site foi usada somente tecnologia de front-end: HTML, CSS3, e JavaScript.
> O site foi hospedado no Replit, que foi suficiente para o grupo e tambemd devido a sua simplicidade. (Link do site https://BeHealthy.lucashemetrio.repl.co).
> Como repositorio para os dados está sendo usado somento o Local Storage do navegador.
> Não foi usada nenhuma API no site. Todo o conteúdo vem de pessoas que, como nós, querem trazer algum conhecimento sobre saúde física de forma gratuita

 
>![image](https://user-images.githubusercontent.com/63072372/205510579-4a519fb8-d74e-46a0-ba55-55997d714de1.png)


# Avaliação da Aplicação

Alguns testes foram realizados para ver se o site está funcionando corretamente

## Plano de Testes

|ID |Cenário Analisado     |Requisito de referência|
|1  | Fazer o login no site e mostrar a página principal de exercícios e dieta, com video, título e descrição| RF-003 e RF-001 |
|2  | Fazer o login, ir na página geral de exercícios e clicar em "Favoritar". Após isso deve clicar em "Olá,..." para ver o perfil do usúario com suas infromações e videos favoritados| RF-008 |
|3  | Fazer o login, clicar em "Adicionar" e fazer o cadastro do conteúdo desejado. Após isso ver se está aparecendo no página principal| RF-005 e RF-003 | 
      


## Registros de Testes

> Os testes foram feitos pelos próprios integrantes do grupo de desenvolvimento.
> Ainda há muito a ser feito para um software de alta qualidade.
> Apesar dos funcionamentos básicos estarem funcionando corretamente, o software como um todo deve ser revisado para evitar erros e obter uma maior fluidez para o usuário.


# Referências

●	Diretrizes da OMS para atividade física e comportamento sedentário: num piscar de olhos. Prof. Dra. Edina Maria de Camargo e Prof. Dr. Ciro Romelio Rodriguez Añez, 2020.


