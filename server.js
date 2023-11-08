const express = require('express');
const app = express();
const PORT = 3001;
const apitRoutes = require('./public/assets/routes/apiroutes.js');
const htmlroutes = require('./public/assets/routes/htmlroutes.js');

app.use(express.static('public'));

app.use(express.urlencoded({extended: true }));

app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}, Hello!` );
});