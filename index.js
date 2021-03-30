const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();

app.set('views',__dirname);
app.engine('hbs',handlebars({
	defaultLayout: 'main',
	layoutsDir: __dirname,
	extname: 'hbs',
}));

app.set("view engine","hbs");

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
	res.render('index');
});

app.get('/docs',(req,res)=>{
	res.render('docs');
})

app.listen(process.env.PORT || 3000,()=>{
	console.log('Server listening on port 3000')
});