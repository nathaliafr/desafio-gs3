# GS3
## Projeto Angular 16 com Ionic 7, Capacitor, Leaflet - App de Upload de Fotos e Mapa

Projeto Angular 16 com Ionic 7, Capacitor, Leaflet - App de Upload de Fotos e Mapa

## Funcionalidades
### App de Upload de Fotos
- Permite aos usuários fazer upload de fotos para o servidor.
- Apresenta uma interface de usuário intuitiva para selecionar e enviar fotos.
- Suporta múltiplos formatos de imagem.

### App de Mapa
- Exibe a localização atual do usuário em um mapa interativo.
- Mostra dois plots adicionais em locais pré-definidos.
- Fornece recursos de zoom e navegação no mapa.
- Permite que os usuários interajam com o mapa para obter informações detalhadas.

### Pré requisitos
Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas em seu sistema:

- Node.js (versão 12 ou superior)
- npm (geralmente é instalado automaticamente junto com o Node.js)
- Angular CLI (versão 16)
- Ionic CLI (versão 7)
- Capacitor CLI (versão ^5.0.3)
- Leaflet (versão ^1.9.4)

## Installation

Siga as etapas abaixo para configurar e executar o projeto em seu ambiente local:

- Clone este repositório em sua máquina:

```sh
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```
- Navegue até o diretório do projeto:

```sh
cd nome-do-repositorio
```
- Instale as dependências do projeto:

```sh
npm install
```

- Instale as dependências do leaflet:

```sh
npm install leaflet
```

- Adicione a plataforma desejada utilizando o Capacitor
- 
```sh
npx cap add android
npx cap add ios
```
- Atualize os arquivos do Capacitor para a plataforma escolhida: 

```sh
npx cap sync
```

- Para compilar o aplicativo para produção, execute o seguinte comando:

```sh
ionic serve
```


## Estrutura do projeto

O projeto possui a seguinte estrutura de diretórios:

- src/: Contém os arquivos-fonte do projeto Angular.
    - app/: Contém os componentes, serviços e outros arquivos relacionados aos aplicativos.
    - assets/: Contém arquivos estáticos, como imagens e arquivos de configuração.
    - environments/: Contém arquivos de configuração de ambiente para diferentes ambientes (desenvolvimento, produção, etc.).
- www/: Contém os arquivos gerados para o projeto Ionic.

