## Dashboard - COVID-19
O objetivo do projeto é consumir uma API pública de estatísticas de casos do 
Coronavirus, de modo a apresentar tais estatísticas por estado, permitindo 
ordençaão por status

## Tecnologias utilizadas
HTML
Javascript
React
Sass
Vite

## Dependências utilizadas
material-icon
lodash
react-dom
react-google-charts
react-router-dom

## Executando
Para inicializar o projeto, basta executar o comando `yarn` para instalar as dependências.  
Em seguida, execute o comando `yarn dev` para iniciar a aplicação.

## Funcionamento do site

### Dispositivos móveis
- Está disponível o menu Hamburguer no canto superior direito que permite navegar pelas opções de estatísticas;  
![image](https://user-images.githubusercontent.com/59270563/188285429-f67629df-84ac-4082-a1dd-af89bfc1b220.png)

- No menu, estará visível o tempo desde a última atualização fonecida pela API;  
![image](https://user-images.githubusercontent.com/59270563/188285459-72832870-5283-485d-9681-c66122c44986.png)

- A página inicial apresenta a lista de estados, com seus respectivos indicadores de Casos, Mortes e Suspeitos. Esta lista é de ordenação fixa por número de casos;  
![image](https://user-images.githubusercontent.com/59270563/188285977-c0e1e9cd-a1d9-4224-b0f9-b8e5f6a01ae5.png)  

- Acima da lista de estados está disponível o filtro de pesquisa por nome ou sigla de cada estado. Basta digitar o conteúdo e a lista é atualizada automaticamente;  
![image](https://user-images.githubusercontent.com/59270563/188285542-a5974c96-e36d-4f13-bfcd-a718f454250a.png)  

- Clicando sobre um dos estados, será redirecionado à página com o gráfico estatístico do estado selecionado;  
![image](https://user-images.githubusercontent.com/59270563/188285569-40e10933-efa9-4b24-8d72-6b9763c717de.png)

- Para retornar à página inicial, pode clicar no botão "Voltar", clicar na opção "Incidentes em cada estado" no menu hamburguer ou simplesmente clicar no brasão do site no topo da página;

- É possível visualizar também o gráfico geral de incidentes no Brasil, clicando na opção "Incidentes no Brasil" pelo menu hamburguer;  
![image](https://user-images.githubusercontent.com/59270563/188285717-7dd4d9ff-dce7-4639-b01f-778a07414d3c.png)

- Nessa página, é possível ordenar o gráfico por: Número de casos, Número de mortes e Número de suspeitos. Para isso, basta clicar no filtro "Ordenar por" e selecionar a ordem desejada. Lembrando que a ordem é sempre decrescente (Maior para o menor);  
![image](https://user-images.githubusercontent.com/59270563/188285771-a080df44-7a4e-4df0-b195-f2bf71cb0aa1.png)

Observação:
- No contexto da aplicação, é considerado como dispositivo móvel todo dispositivo com resolução inferior a 768px;

### Desktop
![image](https://user-images.githubusercontent.com/59270563/188285945-c33a3784-aed9-4306-831e-bb871da6ae5a.png)  
- A página inical é composta pelo cabeçalho, que contém o brasão do site e a informação da última atualização dos dados;
- Além disso, já é exibido o gráfico geral com todos os estados com seus respectivos status;
- Ao lado do gráfico, estão disponíveis um card para cada estado com seus respectivos indicadores;
- Clicar sobre um estado redireciona o usuário para a página individual do estado, exibidos o gráfico de estatísticas;  
![image](https://user-images.githubusercontent.com/59270563/188286015-d7d05771-9f1e-4b58-b973-68193c67ba49.png)

- Assim como nos dispositivos móveis, é possível ordenar o gráfico geral, bem como filtrar por um determinado estado;

#### Gráfico
- Manter o mouse sobre alguma das barras, exibe o valor da barra;
- Na seção de legendas, é possível marcar/desmarcar um status para não exibi-lo no gráfico. Para isso, basta clicar sobre a legenda;
