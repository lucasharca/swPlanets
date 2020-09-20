# Desafio B2W 

O desafio proposto foi de criar uma API para guardar informações de planetas do universo Star Wars.

## Tecnologias utilizadas

- NodeJs
- Typescript
- MongoDB
- Docker

# Iniciando a aplicação

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


# Adicionando um novo planeta

Para adicionar um novo planeta ao banco de dados é necessário enviar no corpo da requisição as informações de nome, clima por um JSON no seguinte formato:

```json
{
   "name": "<nome do planeta em formato string>",
   "climate": "<clima do planeta>",
   "terrain" : "<terreno do planeta>"
}
```

