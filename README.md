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

## :dart: Explicação sobre as tomadas de decisão
<details>
  <summary markdown="span"><strong>:jigsaw: Descrição das decisões</strong></summary><br />

- Decidi usar React.js, React Router (na versão 5), JavaScript, CSS e HTML para desenvolver as 4 telas (Tela de Login, Tela de Depósito e Saque, Tela que Lista as ações e Tela de compra e venda de ações). Escolhi esta versão do React Router e estas tecnologias por conta de estar mais familiarizada com elas e ter mais facilidade de enteder a documentação.
    
- Apliquei Context API e Hooks nas telas para poder manipular os estados da aplicação, e poder mostrar no componente 'Header' da aplicação o nome do usuário e o seu saldo. Escolhi Context API e Hooks pois não queria deixar o código tão verboso (tornando difícil de ler) e com muitos arquivos para gerenciar a aplicação que continha poucos estados e poucas telas para gerenciar.

- Para fazer o acréscimo e decréscimo no saldo do usuário, manipulei o estado do saldo com as Hooks 'useState' e 'useContext' e criei duas funções dentro da tela de 'Depósito e Retirada', uma para depositar dinheiro no saldo dele e outra para retirar o dinheiro.

- Desenvolvi as funções para que o usuário conseguisse comprar e vender uma ação, essa etapa foi bastante complexa pois precisei refatorar alguns códigos que já estavam prontos e eu tinha achado que já estavam completos. Desenvolvi também a validação do email e senha do usuário com uma função que fazia a verificação se o email digitado era válido e se a senha continha mais de 5 caracteres. Feita a validação, criei uma função para armazenar e outra para pegar alguns dados do usuário no Local Storage, como email, nome do usuário, data e hora do acesso. Além disso extraí o nome do usuário do email dele, para poder mostrar apenas o nome dele no 'Header' da aplicação e não o email completo.

</details>

<details>
  <summary markdown="span"><strong>:exploding_head: Principais pontos de dificuldade</strong></summary><br />

</details>
