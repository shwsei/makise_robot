# Makise Robot
## Chat bot para o Telegram, cujo irá banir qualquer usuário que enviar conteúdo NSFW

[![Chat on Telegram](https://img.shields.io/badge/Telegram-ShuseiKagari-blue)](https://t.me/ShuseiKagari)

### Pré-requisitos

Você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/) 
- [Python 3](https://www.python.org/)
- [PIP](https://pypi.org/project/pip/) 
- [Caffe](https://caffe.berkeleyvision.org/install_apt.html) 

### 🤖 Rodando o bot

```bash
# Clone este repositório
$ git clone https://github.com/Lewizh11/makise_robot.git

# Acesse a pasta do projeto no terminal/cmd
$ cd makise_robot

# Instale as dependências
# Usando o NPM:

$ npm i
$ npm i -g typescript

# Usando o Yarn

$ yarn install
$ yarn global add typescript

$ pip install -r requirements.txt

# Variáveis ambientes

$ cp sample.env .env

# Abra o arquivo .env com qualquer editor de texto e coloque:

# USERNAME=Seu usuário do Telegram
# TG_TOKEN=Token do seu bot gerado no @BotFather

# Execute a aplicação

# Usando o NPM:

$ npm run build && npm run server

# Usando o Yarn:

$ yarn build && yarn start
```
# Pronto, o bot já estará rodando
Obs: erro de tipagem na hora de transpilar para JS foi concertado...
