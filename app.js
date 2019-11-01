/* importar as configs do servidor */
var app = require('./config/server');

/* Parametrizar a porta de escuta */


var server = app.listen(80, function(){

    console.log("Servidor Online");

});

var io = require('socket.io').listen(server);
/*criar a conexão por werbsocker */
app.set('io',io);
io.on('connection',function(socket){
console.log("Usuário conectou");
socket.on('disconnect',function(){
    console.log("Usuário desconectado");
})


socket.on('msgParaServidor',function(data){
     /*diálogos */
    socket.emit('msgParaCliente',{apelido: data.apelido, mensagem: data.mensagem}
    );
    socket.broadcast.emit('msgParaCliente',{apelido: '', mensagem: data.mensagem}
    );


    /*participantes */
    if(parseInt(data.apelido_atualiado_nos_clientes)==0){
    socket.emit('participantesParaCliente',{apelido: data.apelido}
    );
    socket.broadcast.emit('participantesParaCliente',{apelido: data.apelido}
    );
    }

});


});


