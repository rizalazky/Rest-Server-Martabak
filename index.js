const express=require('express')
const app=express()
const Martabak=require('./Router/Martabak')
const kategori=require('./Router/KetegoriBarang')
const cors=require('cors')
const bodyParser=require('body-parser')


// cors
app.use(cors())

// body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// routes
app.use('/martabak/item',Martabak)
app.use('/martabak/kategori',kategori)



app.listen(2000,()=>{
    console.log('run on port 2000')
})