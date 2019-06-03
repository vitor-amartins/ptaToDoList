module.exports = (app) => {
    const db = require('../../config/db');

    app.get('/', (req, res) => {
        res.render('home');
    });

    app.get('/items', (req, res) => {
        db.ref('/todo-list').once('value').then((data) => {
            res.send(data.val());
        });
    });

    app.get('/update/:key', (req, res) => {
        const key = req.params.key;
        db.ref('/todo-list/' + key).once('value').then((data) => {
            const item = data.val();
            item.checked = !item.checked;
            db.ref(`/todo-list/${key}`).set(item);
        });
        res.redirect('/');
    });

    app.get('/delete/:key', (req, res) => {
        const key = req.params.key;
        db.ref('/todo-list').child(key).remove();
        res.redirect('/');
    });

    app.post('/', (req, res) => {
        req.body['checked'] = false;
        db.ref('/todo-list').push(req.body);
        res.redirect('/');
    });
}