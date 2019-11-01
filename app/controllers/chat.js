module.exports.chat = function(app,req,res){


    var dadosForm = req.body;

req.assert('apelido',"Nome ou apelido é obrigatório").notEmpty();
req.assert('apelido',"Nome ou apelido deve ter entre 3 e 10 caracteres").len(3,15);

 

    var erros = req.validationErrors();

    if(erros){
        res.render("index",{validacao: erros});
}

app.get('io').emit(
    'msgParaCliente',
    {apelido: dadosForm.apelido, mensagem: ' acabou de entrar no chat'}
    );
    console.log(dadosForm.apelido);
    res.render("chat",{dadosForm: dadosForm});
}