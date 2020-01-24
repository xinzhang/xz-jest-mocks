const user = require('./models/user');

user.getAuthenticated().then( x => console.log(x));
