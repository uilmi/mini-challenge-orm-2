const express = require('express');
const app = express();
const { User } = require('./models');

const PORT = 3000;
const LOCALHOST = 'http://localhost';

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('users/index');
})

// End of required API from the mini challenge
app.get('/users/delete/:id', (req, res) => {
    User.destroy({
        where: { id: req.params.id }
    }).then(() => {
        res.send('User berhasil di remove!');
    })
})

app.get('/users/update/:id', (req, res) => {
    User.findOne({
        where: { id: req.params.id }
    }).then(user => {
        res.render('users/update', { user });
    })
})

app.post('/users/update/:id', (req, res) => {
    User.update({
        username: req.body.username,
        password: req.body.password
    },
        { where: { id: req.params.id } }
    )
        .then(() => {
            res.send('User berhasil diupdate!');
        });
})
// End of required API from mini challenge


// This is just extra features to list all users and create a new user
app.get('/users/delete/', (req, res) => {
    res.redirect('/users'); // just so the app won't crash when /users/delete is accessed
})

app.get('/users/update/', (req, res) => {
    res.redirect('/users'); // just so the app won't crash when /users/update is accessed
})

app.get('/users', (req, res) => {
    User.findAll({
        order: [
            ['id', 'ASC'], // Sorts by ID in ascending order in the user dashboard
        ]
    }).then(users => {
        res.render('users/list', { users });
    })
})

app.post('/users', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    }).then(user => {
        res.send('User berhasil dibuat!');
    })
})

app.get('/users/create', (req, res) => {
    res.render('users/create');
})

app.get('/users/:id', (req, res) => {
    User.findOne({
        where: { id: req.params.id }
    }).then(user => {
        res.render('users/profile', { user });
    })
})




app.listen(PORT, () => {
    console.log(`Server ready -> ${LOCALHOST}:${PORT} `);
})