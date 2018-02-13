var express = require('express'),
    app = express(),
    cons = require('consolidate');

app.engine('html', cons.swig);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname));
app.use(express.static('views'));
app.use(express.static('public'));

var pages = [
    'pages',
    'my-requests',
    'index',
    'contributions',
    'home',
    'new-request',
    'error-page',
    'following',
    'layout',
    'category',
    'arcticle',
    'section',
    'search'
]

pages.forEach(function (page) {
    app.get('/' + page, function (req, res) {
        res.render(page, {})
    })
})

app.listen(8102);
console.log('listening on http://localhost:8102');
