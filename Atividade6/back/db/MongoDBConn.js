var moongoose = require('mongoose')
//moongoose.set('useFindAndModify', false)
var mongoDB_URI = 'mongodb://127.0.0.1:27017/crud'
//var mongoDB_URI = 'mongodb://localhost/dbweb'
moongoose.connect(mongoDB_URI, {useNewUrlParser:true, useUnifiedTopology: true})
var db = moongoose.connection
db.on('connected',()=>{
    console.log('Mongoose Connected to'+ mongoDB_URI)
})
db.on('disconnected',()=>{
    console.log('Mongoose Disconnected to'+ mongoDB_URI)
})
db.on('error',()=>{
    console.log('Mongoose Error'+ err)
})