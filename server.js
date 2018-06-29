const express = require('express');
const hbs = require('hbs');

const App = express();
const port = process.env.PORT || 3000;

//Setup partials for hbs
hbs.registerPartials(`${__dirname}/views/partials`);

//Setting a configuration within express
App.set('view engine','hbs');

//Setting up middleware (We are using the default middleware)
App.use(express.static(`${__dirname}/public`));

//Register a helper for handlerbar
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
})

//Setup a handler for an HTTP Request
App.get('/', (req, res) => {
    res.render('home.hbs', {
        title: 'Home',
        desc: 'This is the home page'
    });
})

App.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: 'About Page',
        desc: `This is the about page`
    });
})

App.get('/bad', (req, res) => {
    res.send({
        result: 'ERROR',
        error: 'BAD REQUEST',
        details: 'URL accessed is invalid'
    })
})

//Setup a listener (in this case to port 3000)
App.listen(port, () => {
    console.log(`The server is available on port ${port}`);
});