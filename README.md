# <p align="center"> :bar_chart: App de Ações - PS XP :bar_chart: </p>

## :bookmark_tabs: Sobre
<details>
  <summary markdown="span"><strong>:bulb: Informações gerais sobre o Projeto</strong></summary><br />

Projeto voltado para o desafio prático do processo seletivo da XP desenvolvido por [Yasmim Matos](https://www.linkedin.com/in/yasmimmatos/) com o foco em desenvolver uma aplicação FrontEnd/Mobile para compra e venda de ações.

[Clique Aqui](http://yasmim-matos.github.io/desafio-pratico-ps-xp) para visualizar a versão final do projeto no seu navegador.

</details>

## :question: Como compilar e executar o Projeto
<details>
  <summary markdown="span"><strong>:grey_exclamation: Descrição dos comandos necessários</strong></summary><br />
  
- Clone o repositório:

```
    git clone git@github.com:Yasmim-Matos/desafio-pratico-ps-xp.git
```

- Vá até a pasta onde o projeto está:

```
    cd desafio-pratico-ps-xp
```

- Dentro da pasta do projeto instale as dependências necessárias:

```
    npm install
```

- Depois de instalada as dependências, execute o projeto:

```
    npm start
```

- Deploy do Projeto

[Clique Aqui](http://yasmim-matos.github.io/desafio-pratico-ps-xp) para visualizar a versão final do projeto no seu navegador.

</details>

## :toolbox: Ferramentas Utilizadas
<details>
  <summary markdown="span"><strong>:hammer_and_wrench: Principais Ferramentas</strong></summary><br />
 
* React
* JavaScript
* CSS
* HTML
* Context API
* Hooks
* React Router v5

</details>

## :dart: Explicação sobre as tomadas de decisão para desenvolver os códigos do desafio
<details>
  <summary markdown="span"><strong>:jigsaw: Descrição das decisões</strong></summary><br />

- Para conseguir entregar todos os requisitos mínimos e 3 dos 5 requisitos adicionais dentro do prazo (que envolvia cerca de 10 dias para entrega) estipulado para o desafio, precisei me organizar e rever alguns conteúdos. 
    Nos primeiros dois dias decidi usar React.js, React Router (na versão 5) e o JavaScript para desenvolver as 4 telas.
    
- Escolhi esta versão do React Router e estas tecnologias por conta de estar mais familiarizada com elas e ter mais facilidade de enteder a documentação, mas pensei que se houvesse algum tempo no final do projeto, eu iria colocar as rotas na versão 6 do React Router.

- Entre os dias 3 e 6 do prazo, revi conteúdos e me organizei para poder me aprofundar e poder desenvolver nos outros dias sem tantos entraves quanto a conhecimento, principalmente quanto ao React porque foi a ferramenta que mais utilizei para desenvolver a aplicação.

- No dia 7 apliquei Context API e Hooks nas telas, para poder manipular os estados da aplicação, e poder mostrar no componente 'Header' da aplicação o nome do usuário e o seu saldo. Escolhi Context API e Hooks pois não queria deixar o código tão verboso e com muitos arquivos para gerenciar uma aplicação que não continha muitos estados e muitas telas.

- Já no dia 8 busquei fazer o acréscimo e decréscimo no saldo do usuário, manipulando o seu estado com as Hooks e criando duas funções dentro da tela de 'Depósito e Retirada', uma para depositar dinheiro no saldo dele e outra para retirar o dinheiro.

- No dia 9 desenvolvi as funções para que o usuário conseguisse comprar e vender uma ação, foi bastante complexo pois precisei refatorar alguns códigos que já estavam prontos e eu tinha achado que já estavam completos. Nesse dia desenvolvi também a validação do email e senha do usuário para então poder salvar os dados dele no Local Storage.

- Ainda no dia 9, escolhi um padrão de cores para aplicação e consegui fazer um design com CSS para as 4 páginas. Eu tinha pensado em user Styled Components ou Bootstrap para fazer o design da aplicação, mas como o prazo do desafio estava próximo ao fim, escolhi usar o CSS pois tinha mais conhecimento.

<details>
  <summary markdown="span"><strong>:exploding_head: Principais pontos de dificuldade</strong></summary><br />

</details>

</details>

