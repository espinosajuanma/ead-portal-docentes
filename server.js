const express = require('express');
const path = require('path');
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// static
app.use(express.static('public', { extensions: ['html'] }));
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/200.html'));
});

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server en el puerto: ${app.get('port')}`);
});