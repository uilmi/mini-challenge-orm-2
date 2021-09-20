const { User } = require('./models');

User.create({
    username: 'binar',
    password: 'binar'
}).then(user => {
    console.log('user created!')
})

// To create the initial user and password before implementing create new user form