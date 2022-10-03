const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const { SESSION_SECRET } = require('../config');

module.exports = app => {
    // Allow Cross Origin Resource Sharing to all origins
    app.use(cors());

    // Transform raw string of req.body into JSON
    app.use(bodyParser.json());

    // Parses urlencoded bodies
    app.use(bodyParser.urlencoded({ extended: true }));

    app.set('trust proxy', 1);

    // Create a session
    app.use(
        session({  
          secret: SESSION_SECRET,
          resave: false,
          saveUninitialized: false,
          cookie: {
            secure: false,
            maxAge: 24 * 60 * 60 * 1000
          }
        })
    );
    return app;
}