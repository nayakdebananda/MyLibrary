if(process.env.NODE_ENV!=="production"){
    require('dotenv').config();
}


const express = require('express');
const app = express();
const expressLayouts=require('express-ejs-layouts');

const indexRouter=require('./routes/index');
const mongoose=require('mongoose');

//Configuration
app.set('view engine', 'ejs');
//Views are comming from current directory/views folder
app.set('views', __dirname + '/views');
//Layout is a starting template for all views
// it will come fomr the views folder
app.set('layout', 'layouts/layout');
app.use(expressLayouts);

// public file contaion style sheets and javascript files
app.use(express.static('/public'));


//connect to the database
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true
});

const db=mongoose.connection;
db.on('error', error=>console.error(error));
db.once('open', ()=>console.error('Connected to mongoose'));

//setup route
app.use('/',indexRouter);

//server will run on port 3000 if not set by production  server
app.listen(process.env.PORT || 3000);

//Routes is also similar to controllers in MVC architecture