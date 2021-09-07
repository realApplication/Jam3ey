require('dotenv').config();

const {db}=require('./models/index')
const server = require('./server');
const port = process.env.PORT || 9000;

db.sync().then(() => {
server.start(port);
 });
