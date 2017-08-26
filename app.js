const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//Connect to database.
mongoose.connect(config.database);

//On connection.
mongoose.connection.on('connected', () => {
    console.log(`Connected to database ${config.database}`);
})

//On error.
mongoose.connection.on('error', (err) => {
    console.log(`Databa error ${err}`);
})

const app = express();

const users = require('./routes/users');

//Port number.
const port = 3000;


//CORS middleware.
app.use(cors());


//Set static folder
app.use(express.static(path.join(__dirname, 'client')));


//Body parser middleware
app.use(bodyParser.json());


//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


app.use('/users', users);


//Index route
app.get('/', (req, res)  => {
    res.send("Invalid Endpoint");
});


//Start server
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});