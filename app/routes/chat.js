module.exports = function(app){
<<<<<<< HEAD
    app.get('/chat', function (req,res) {
   
        app.app.controllers.chat.chat(app,req,res);

    });

    app.post('/chat', function (req,res) {
   
        app.app.controllers.chat.chat(app,req,res);

    });

=======
    
    app.post('/chat', function (req,res) {
        res.render("chat");
        });


    app.get('/chat', function (req,res) {
    res.render("chat");
    });

    

>>>>>>> bcd805354120e5d3abcc4d926ebf6cd2d2f65f79
}