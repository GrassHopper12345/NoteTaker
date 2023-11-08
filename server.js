const express = require('express');
const app = express();
const PORT = 3001;
const apiRoutes = require('./routes/apiroutes.js');
const htmlRoutes = require('./routes/htmlroutes.js');

app.use(express.static('public'));

app.use(express.urlencoded({extended: true }));

app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}, Hello!` );
});