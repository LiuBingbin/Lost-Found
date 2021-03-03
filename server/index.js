const express = require('express')

const app = express()

app.set('secret', 'sdfgser223es')

app.use(require('cors')())  //跨域模块
app.use(express.json())
//使uploads目录能被访问
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./routes/admin')(app)
require('./routes/user')(app)
require('./plugins/db')(app)

app.listen(3000, ()=>{
    console.log('http://localhost:3000');
})