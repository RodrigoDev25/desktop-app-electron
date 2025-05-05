// Importando os modulos app e BrowserWindow do electron
const { app, BrowserWindow } = require('electron')

// Define a função creatwindow que é responsável por criar uma nova janela de aplicação
 
const createWindow = () => {

    //Cria uma nova instância do BrowserWindow com as dimensções
  const win = new BrowserWindow({
    width: 800, //lagura da janela;
    height: 600 //define a altura;
  })

  //Carrega index.html na janela
  win.loadFile('index.html')
}

//Quando o aplicativo estiver pronto, chama a funçõ reatWindow para criar a ja nela principal
app.whenReady().then(() => {
    //Executa a função creatwindow a janela principal
  createWindow()
})