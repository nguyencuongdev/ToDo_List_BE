const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const express_ejs_layouts = require('express-ejs-layouts');
dotenv.config();

const app = express();

//use middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

//set views engine
app.set('view engine', 'ejs');// set template engine mặc định
app.set('views', path.join(__dirname, '/src/views'));
app.use(express_ejs_layouts);
app.set('layout', 'main.ejs')

//set folder static
app.use('/static', express.static(path.join(__dirname, '/public')));

//set router
const router = require('./src/routers/router');
app.use(router);

app.listen(process.env.SERVER_PORT, () => {
    console.log('Server listening on port ' + process.env.SERVER_PORT);
});