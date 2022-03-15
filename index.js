// Config
const express = require('express');
const app = express();
app.set('port', process.env.PORT || 8000);

// Middleware
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

// Redirect
app.get('/', (req, res) => {
    res.redirect('/api/');
});

// ADD CONTROLLERS
// REF booke

// END CONTROLLERS
// REF booke

// Start Server
app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`);
});