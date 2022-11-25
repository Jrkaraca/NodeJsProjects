//Request of express library
const express = require('express');
const app = express();

var http = require('http');
var dt = require('./modules');


app.use(express.json());

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)');

});

app.get('/time' , (req , res) => {
   res.writeHead(200, {'Content-Type': 'text/html'});
   const result = dt.datetime();
   res.write('Current Date and Time:');
   res.write(result);
   res.end();
});


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`listening port on ${port}.`));