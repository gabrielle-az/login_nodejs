
class SessionController{
    
    async login(req, res){
       
        if(req.session.logado){
            return res.redirect('/home');
        }

        return res.render('pages/login', {logado: req.session.logado, erro: ""});
    }

    logar(req, res){
        let user = {
            email: 'leticia.gabrielle@gmail.com',
            password: 'palmeiras'
        };

        const { email, password } = req.body;

        if(!(email === user.email && password === user.password)){
            return res.render('pages/login', {logado: req.session.logado, erro: "E-mail ou senha incorreto!"});
        }
        req.session.logado = true;
        return res.redirect('/home' );
    }
    logout(req, res){ 
        req.session.logado = false;
        return res.redirect('/login');
    }
}
module.exports = new SessionController();