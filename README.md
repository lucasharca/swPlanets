# Desafio B2W 

O desafio proposto foi de criar uma API para guardar informações de planetas do universo Star Wars.

## Tecnologias utilizadas

- NodeJs
- Typescript
- MongoDB
- Docker

## Iniciando a aplicação

Para conveniência foi utilizada o Docker para esta aplicação, facilitando o deploy e com mínimo de configurações necessárias.
Para iniciar a aplicação é necessario ter instalado o Docker-compose e digitar no terminal:

  `cd $pasta-da-aplicação`

  `docker-compose build --no-cache`

  `docker-compose up -d`

Após a conclusão da montagem da imagem no docker a aplicação estará disponível em `http://localhost:3333`

  * Endpoint para criação de planetas POST: `http://localhost:3333/planets`

  * Endpoint para listar planetas GET: `http://localhost:3333/planets/all`

  * Endpoint para encontrar um planeta específico utilizando id: GET `http://localhost:3333/planets/find?id={id-do-planeta}`

  * Endpoint para encontrar um planeta específico utilizando o nome: GET `http://localhost:3333/planets/find?name={nome-do-planeta}`

  * Endpoint para deletar um planeta: DELETE `http://localhost:3333/planets/delete/{id-do-planeta}`


## Adicionando um novo planeta

Para adicionar um novo planeta ao banco de dados é necessário enviar no corpo da requisição as informações de nome, clima por um JSON no seguinte formato:

```json
{
   "name": "<nome do planeta em formato string>",
   "climate": "<clima do planeta>",
   "terrain" : "<terreno do planeta>"
}
```

Não é necessário adicionar a quantidade de filmes em que o planeta apareceu. A aplicação faz uma busca automática em uma API que contém tal informação e adiciona no banco junto com os dados entrados.

## Buscas de planetas

É possível realizar a busca de planetas de duas maneiras. 

* A primeira é uma listagem de todos os planetas registrados no banco de dados através do endpoint GET `http://localhost:3333/planets/all`.

* A segunda maneira retorna apenas um planeta desejado. Esta busca pode ser feita passando o ID cadastrado do planeta ou o nome do mesmo através de query params. Ex: GET `http://localhost:3333/planets/find?id=5f672b5c534fa16aafbd21fe` ou `http://localhost:3333/planets/find?name=tatooine`.

## Deletando planetas

É possível deletar um planeta registrado no banco de dados, para isso será necessário passar o ID que o planeta recebeu ao ser cadastrado. Ex: DELETE `http://localhost:3333/planets/delete/5f672b5c534fa16aafbd21fe`.