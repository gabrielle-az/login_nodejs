
const { Router } = require('express');
const homeController = require('../controller/homeController');
const routers = new Router();

const Home = require('../controller/homeController');

const Session = require('../controller/sessionController');

const auth = require('../middleware/auth');

routers.get('/', Home.index);

routers.get('/login', Session.login);

routers.post('/logar', Session.logar);

routers.get('/home', auth, Home.home);

routers.get('/users', auth, Home.users);

routers.get('/users/register', auth, Home.register);

routers.get('/users/update/:id', auth, Home.update);

routers.get('/users/delete/:id', auth, Home.delete);

routers.get('/logout', Session.logout);

module.exports = routers;