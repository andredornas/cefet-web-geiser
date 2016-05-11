var express = require('express'),
    app = express(),
    fs = require('fs'),
    hbs = require('hbs');

// carregar "banco de dados" (data/jogadores.json e data/jogosPorJogador.json)
// dica: 3-4 linhas de código (você deve usar o módulo de filesystem (fs))
var db = {
  jogadores: JSON.parse(fs.readFileSync('server/data/jogadores.json')).players,
  jogosPorJogador: JSON.parse(fs.readFileSync('server/data/jogosPorJogador.json'))
};

// configurar qual templating engine usar. Sugestão: hbs (handlebars)
//app.set('view engine', '???');
app.set('view engine', 'hbs');
app.set('views', 'server/views');

// definir rota para página inicial --> renderizar a view index, usando os
// dados do banco de dados "data/jogadores.json" com a lista de jogadores
// dica: o handler desta função é bem simples - basta passar para o template
//       os dados do arquivo data/jogadores.json
app.get('/', function(request, response) {
  response.render('index', {
    jogadores: db.jogadores
  });
});
// definir rota para página de detalhes de um jogador --> renderizar a view
// jogador, usando os dados do banco de dados "data/jogadores.json" e
// "data/jogosPorJogador.json", assim como alguns campos calculados
// dica: o handler desta função pode chegar a ter umas 15 linhas de código
app.get('/jogadores/:id', function(request, response) {
  response.render('jogador', {
    profile: jogadores[id]/*,
    gameInfo: jogosDesteJogador,
    favorito: jogosDesteJogador[0]*/
  });
});

// configurar para servir os arquivos estáticos da pasta "client"
// dica: 1 linha de código
app.use(express.static('client'));
// abrir servidor
// dica: 1-3 linhas de código
app.set('port', (process.env.PORT || 4000));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
