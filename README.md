#MoMo's Annotation / back-end

O projeto MoMo's Annotation foi criado para um desafio técnico como um CRUD em Node.js, React.js e MongoDB. O back-end conta com middlewares de autenticação, princípios do clean code, arquitetura em camadas, cadastro e login de usuários.
Para visualizar o front-end do projeto vá para [front-end](https://github.com/osvaldojr95/desafio-crud-front).

### Instalação

Primeiro instale as dependências do projeto com o comando:
`npm i`

### Configuração

De acordo com o arquivo `.env.example`, configure o arquivo `.env` com os valores necessários.

### Execução

Para executar o projeto back-end apenas rode o comando:
`npm start`

## Rotas

O back-end do projeto foi criado com o Express.js, abaixo estão as rotas existentes.

### /sign-up

Essa rota permite o cadastro de usuários, foi utilizado o Joi para validar o body e o bcrypt para encriptar as senhas.
body:

```
{
    "username": "joao",
    "email": "joao2@email.com",
    "password": "minhasenha"
}
```

### /sign-in

Essa rota permite o login do usuário a partir de uma conta cadastrada, a rota retorna o usuário e o token para futuras requisições, a rota remove qualquer outro token já existente e cria um novo token. Foi utilizado o Joi para validar o body.
body:

```
{
    "email": "joao2@email.com",
    "password": "minhasenha"
}
```

retorno:

```
{
    "username": "joao",
    "token": "a1b2-23n1-anbv-asn1"
}
```

### /sign-out

Essa rota permite o logout da conta fazendo com que o token seja apagado da coleção "sessions" no banco, é enviado somente o token através do header.
header:

```
{
    "Authorization": "a1b2-23n1-anbv-asn1"
}
```

### /create

Essa rota permite a criação das anotações, é necessário enviar o token no header como Authorization.
body:

```
{
    "text": "minha primeira anotação"
}
```

header:

```
{
    "Authorization": "a1b2-23n1-anbv-asn1"
}
```

### /listAll

Essa rota permite a leitura de todas as notas do usuário, é necessário enviar o token no header como Authorization.
header:

```
{
    "Authorization": "a1b2-23n1-anbv-asn1"
}
```

retorno:

```
{
    [
        {
            "_id": "11o4nj214n12"
            "text": "Anotando tudo"
            "idUser": "13l5b1j3b5"
        },
        {
            "_id": "11o182y44hg1"
            "text": "Hello Word"
            "idUser": "13l5b1j3b5"
        },
        {
            "_id": "Projeto"
            "text": "Anotando tudo"
            "idUser": "13l5b1j3b5"
        }
    ]
}
```

### /:id/edit

Essa rota permite a edição das anotações, é necessário enviar o token no header como Authorization e o id como parametro na rota.
body:

```
{
    "text": "editando a anotação"
}
```

header:

```
{
    "Authorization": "a1b2-23n1-anbv-asn1"
}
```


### /:id/remove

Essa rota permite a remoção das anotações, é necessário enviar o token no header como Authorization e o id como parametro na rota.

header:

```
{
    "Authorization": "a1b2-23n1-anbv-asn1"
}