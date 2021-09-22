<h1> Projeto React Forúm de técnologias <h1/>

<h3> O projeto basicamente basicamente consiste em um forúm de técnologias, onde você pode adicionar uma tecnologia e 
  argumentar sobre ela, se tratando de um forúm, gerando conhecimento. <h3/>

<h3>Tecnologias usadas para o desenvolvimento</h3>
  
  * HTML5
  * Css3
  * Java Script
  * React.js
  * React-Bootstrap
  * Material-ui
  * Node.js v14.16.1
  *  Axios
  
  
 <h3>Desenvolvimento<h3/>
  
  <p>Nesse CRUD fizemos o consumo de de uma API REST que foi desenvolvida em Node.js, para fazermos o consumo,
  usamos o AXIOS, o front-end foi desenvolvido utilizando Java Scrip com a biblioteca React.js<p/>
  
  <h3>Funcionalidades<h3/>
    
    * Fazer inclusão de cards
    * Fazer pesquisas de tecnologias
    * Fazer pesquisas através de tags
    * Excluír nossos posts
  
   <h3> Requisitos <h3/>
     
     * NodeJS v5.2.0+
     
  <h3> Como execultar <h3/>
    
   <p> Faça o clone/download deste repositório, execute npm install e npx json-server db.json. A API fica localizada em http://localhost:3000.<br>
    OBS: Como gerenciador de dependências, é possível utilizar (Yarn) ou (npm).<p/>
    
  <h3>Rotas<h3/>
    
    Todas as requisições de POST para esta API devem conter
    o header Content-Type: application/json. Esta API contém as seguintes rotas:

* GET /tools : lista as ferramentas cadastradas
* POST /tools : cria uma nova ferramenta
* DELETE /tools/:id : apaga a ferramenta com ID :id
* Para filtrar as ferramentas em GET /tools, é possível:

* fazer uma busca global utilizando a query string ?q=:busca;
* fazer uma busca por tags individuais utilizando a query string ?tags_like=:busca.
    
    
    

