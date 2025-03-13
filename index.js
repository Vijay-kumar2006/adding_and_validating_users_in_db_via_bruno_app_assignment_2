const express = require('express');
const { resolve } = require('path');
const connectDB = require('./db')
const router = require('./router')

const app = express();
const port = 3010;
const url = 'mongodb+srv://vijaykumarvk3105:vijay@cluster0.qqa5l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.use('/api',router)

app.listen(port, async () => {
  try {
    await connectDB(url);
    console.log(`Example app listening at http://localhost:${port}`);
  } catch (err) {
    console.log('server not running!');
  }
});