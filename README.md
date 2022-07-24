# <p align="center"> :bar_chart: App de Ações - PS XP :bar_chart: </p>

## :bookmark_tabs: Sobre
<details>
  <summary markdown="span"><strong> Informações gerais sobre o Projeto</strong></summary><br />

Projeto voltado para o desafio prático do processo seletivo da XP desenvolvido por [Yasmim Matos](https://www.linkedin.com/in/yasmimmatos/) com o foco em desenvolver uma aplicação FrontEnd/Mobile para compra e venda de ações. O projeto envolve o desenvolvimento de 4 telas: Tela de Login, Tela de Depósito e Saque, Tela que Lista as ações e Tela de compra e venda de ações, cada uma com suas próprias funções e finalidades. 

[Clique Aqui](http://yasmim-matos.github.io/desafio-pratico-ps-xp) para visualizar o projeto no seu navegador.

</details>

## :question: Como compilar e executar o Projeto
<details>
  <summary markdown="span"><strong> Descrição dos comandos necessários</strong></summary><br />
  
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

[Clique Aqui](http://yasmim-matos.github.io/desafio-pratico-ps-xp) para visualizar o projeto no seu navegador.

</details>

## :toolbox: Ferramentas Utilizadas
<details>
  <summary markdown="span"><strong> Principais Ferramentas</strong></summary><br />
 
* React.js
* JavaScript
* CSS
* HTML
* Context API
* Hooks
* React Router v5
* [IonIcons](https://ionic.io/ionicons)

</details>

## :dart: Explicação sobre as tomadas de decisão
<details>
  <summary markdown="span"><strong> Descrição das decisões</strong></summary><br />

- Decidi usar React.js, React Router (na versão 5), JavaScript, CSS e HTML para desenvolver as 4 telas (Tela de Login, Tela de Depósito e Saque, Tela que Lista as ações e Tela de compra e venda de ações). Escolhi esta versão do React Router e estas tecnologias por conta do tempo de entrega do desafio, por estar mais familiarizada com elas e por conta disso ter mais facilidade de enteder a documentação.
    
- Apliquei Context API e Hooks nas telas para poder manipular os estados da aplicação, e poder mostrar no componente 'Header' da aplicação o nome do usuário e o seu saldo. Escolhi Context API e Hooks pois não queria deixar o código tão verboso (tornando difícil de ler) e com muitos arquivos para gerenciar a aplicação que continha poucos estados e poucas telas para gerenciar.

- Para fazer o acréscimo e decréscimo no saldo do usuário, manipulei o estado do saldo com as Hooks 'useState' e 'useContext' e criei duas funções dentro da tela de 'Depósito e Retirada', uma para depositar dinheiro no saldo dele e outra para retirar o dinheiro.

- Desenvolvi as funções para que o usuário conseguisse comprar e vender uma ação, essa etapa foi bastante complexa pois precisei refatorar alguns códigos que já estavam prontos e eu tinha achado que já estavam completos. Desenvolvi também a validação do email e senha do usuário com uma função que fazia a verificação se o email digitado era válido e se a senha continha mais de 5 caracteres. Feita a validação, criei uma função para armazenar e outra para pegar alguns dados do usuário no Local Storage, como email, nome do usuário, data e hora do acesso. Além disso extraí o nome do usuário do email dele, para poder mostrar apenas o nome dele no 'Header' da aplicação e não o email completo.

</details>

<details>
  <summary markdown="span"><strong> Principais dificuldades e aprendizados</strong></summary><br />

- Nesse desafio, apesar de ter escolhido ferramentas que eu tivesse mais familiaridade, isso não diminuiu as dificuldades que tive para desenvolver algumas soluções. A primeira dificuldade foi entender qual era o meu nível de aprendizado até aqui nas tecnologias que eu iria utilizar no projeto pra poder iniciar a aplicação, mas assim que o desafio foi iniciado percebi que consegui superar essa dificuldade buscando os conhecimentos necessários e fazendo pesquisas na internet, e fui construindo a aplicação com muita empolgação e vontade de ver aquilo funcionar e dar certo.

- A manipulação dos estados no componente 'Header' foi difícil pra mim no início, pois foi o primeiro componente que tive que usar os estados para fazer as informações aparecerem na tela. Busquei então vídeos e artigos na internet e consegui fazer com que os estados aparecessem da maneira correta.

- As funções de acréscimo e decréscimo no saldo do usuário me deixaram bastante aflita, pois num primeiro momento achei que seriam bastante simples de fazer, até que percebi que além de manipular o estado do saldo eu precisaria fazer alguns tratamentos condicionais, como por exemplo: o usuário não pode fazer a retirada de dinheiro quando o saldo está zerado. Mas apesar da aflição, consegui pensar em condições reais e consegui colocar em prática a manipulação do estado, e isso me deixou muito confiante, realizada e feliz com o meu desempenho. Pois por mais que esse seja um desafio técnico, o fato de eu conseguir concluir a linha de raciocínio e fazer as funções funcionarem, isso mostrou que o meu nível de conhecimento, que eu no início fiquei preocupada, ele estava muito bom e isso me deu confiaça de que eu conseguiria dar conta de fazer as outras funções que precisassem ser feitas.

- O ponto de maior dificuldade que eu consegui superar nesse desafio esteve relacionado as funções de compra e venda de ações. O fato de ter que manipular dados que vinham de diferentes estados e tabelas diferentes foi a primeira dificuldade que encontrei. Primeiro refatorei os estados que vinham do 'AppProvider', pois não eram necessários todos aqueles que eu havia criado anteriormente. Depois refatorei as tabelas que eu tinha criado para receber as ações, tanto as que ficavam disponíveis para o usuário quanto as que pertenciam a ele. Depois refatorei os arrays de dados que criei para fornecer as informações para as tabelas. E com as refatorações do código, eu fui conseguindo entender o que era preciso fazer, pois o código foi ficando mais claro, até que na página de compra e venda de ações eu consegui criar as funções de compra e venda, e este foi o meu ponto auge do desafio de aprendizado. Pois aprendi a ter mais resiliência, para continuar até ver o problema resolvido, aprendi a aprender rápido com os erros que cometi nos códigos que já havia escrito e aprendi a buscar conhecimento em fontes diferentes para chegar ao resultado esperado.

- Desenvolver esse desafio foi muito, muito divertido (apesar do nervosismo) e serviu como um "termômetro" de conhecimento pra mim. Tecnologias que eu achava que não tinha muita capacidade para desenvolver e lógicas que eu achava que não iria concluir, eu percebi que mesmo com essa baixa confiança eu fui lá e fiz, e quando chegava no resultado esperado eu ficava muito feliz e me surpreendia com a entrega. 

- A parte de validação do usuário e senha e armazenar alguns dados do usuário no local storage foram muito legais, consegui fazer as funções funcionarem, e a parte de maior dificuldade foi entender como armazenar no local storage a data e hora de acesso, então fui na documentação e consegui encontrar o dado e deu muito certo! Além disso, consegui "extrair" o nome do usuário do email dele, armazenei email e nome em chaves separadas no local storage, e então consegui pegar o nome do usuário no local storage e coloquei no 'Header' de todas as páginas, para que não ficasse o email inteiro aparecendo mas sim apenas o nome.

</details>
