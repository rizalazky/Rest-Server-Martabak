const express=require('express')
const router=express.Router()
const koneksi=require('../models/M_Barang')

router.get('/',(req,res)=>{
    koneksi.query('SELECT * FROM item',(err,result)=>{
        if(err){
            throw err;
        }else{
            res.json(result)
        }
    })
})


module.exports=router