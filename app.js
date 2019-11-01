<<<<<<< HEAD
=======

>>>>>>> bcd805354120e5d3abcc4d926ebf6cd2d2f65f79
/* importar as configs do servidor */
var app = require('./config/server');

/* Parametrizar a porta de escuta */

<<<<<<< HEAD

var server = app.listen(80, function(){
=======
app.listen(80, function(){
>>>>>>> bcd805354120e5d3abcc4d926ebf6cd2d2f65f79

    console.log("Servidor Online");

});

<<<<<<< HEAD
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


=======
>>>>>>> bcd805354120e5d3abcc4d926ebf6cd2d2f65f79
