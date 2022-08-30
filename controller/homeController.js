
var users = [
    {
        'name':'Letícia Gabrielle',
        'email':'leticia.gabrielle@gmail.com',
        'password':'palmeiras'    
    }, 
    {
        'name':'Diego Azevedo',
        'email': 'diego_azevedo@gmail.com',
        'password':'flamengo'    
    },
    {
        'name': 'João Gomes',
        'email': 'joao_gomes@gmail.com',
        'password': 'morena'
    },
    {
        'name': 'Caio Fernando',
        'email': 'caio_fernando@gmail.com',
        'password': 'livros'
    },
    {
        'name': 'Luana Joana',
        'email': 'luana_joana@gmail.com',
        'password': 'luluzinha'
    }
];

class HomeController{
    
    index(req, res) {
        res.render('index', {logado: req.session.logado});
    }
    
    home(req, res){
        res.render('pages/home', {logado: req.session.logado, users: users});
    }

    users(req, res){
        res.render('pages/users', {logado: req.session.logado, users: users});
    }

    register(req, res){
        res.render('pages/register', {logado: req.session.logado});
    }

    update(req, res){
        var id = req.params.id
        res.render('pages/update', {logado: req.session.logado, user: users[id]});
    }

    delete(req, res){
        var id = req.params.id
        res.render('pages/delete', {logado: req.session.logado, user: users[id], id: id});
    }
}

module.exports = new HomeController();