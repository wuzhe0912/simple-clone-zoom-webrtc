// import libraries and setting server
const express = require('express');
const app = express();
const port = 3000;
const server = require('http').Server(app);
const io = require('socket.io')(server);
const { v4: uuidV4 } = require('uuid');

// setting ejs for template engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render(`/${uuidV4()}`);
});

app.get('/room', (req, res) => {
  res.render('room', { roomId: req.params.room });
});

server.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
