const express=require('express')
const router=express.Router()
const koneksi=require('../models/M_Barang')
const respon=require('../response')


router.get('/',(req,res)=>{
    koneksi.query('SELECT * FROM item',(err,result)=>{
        if(err){
            throw err;
        }else{
            respon.ok(result,'OK',res)
        }
    })
})

router.post('/',(req,res)=>{
    let data={
        kode_barang:req.body.kode_barang,
        nama:req.body.nama,
        category_id:req.body.category_id,
        unit_id:req.body.unit_id,
        stok:req.body.stok
    }
    koneksi.query('INSERT INTO item VALUES ?',data,(err,results)=>{
        if(err){
            throw err
        }else{
            respon.ok(results,'Berhasil Insert data',res)
        }
    })
})


router.post('/',(req,res)=>{

    let item_id=req.body.item_id


    let data={
        kode_barang:req.body.kode_barang,
        nama:req.body.nama,
        category_id:req.body.category_id,
        unit_id:req.body.unit_id,
        stok:req.body.stok
    }
    koneksi.query('UPDATE  item SET ? WHERE item_id='+item_id,data,(err,results)=>{
        if(err){
            throw err
        }else{
            respon.ok(results,'Berhasil Insert data',res)
        }
    })
})

router.delete('/:item_id',(req,res)=>{
    let item_id=req.params.item_id

    koneksi.query('DELETE item WHERE item_id='+item_id,(err,results)=>{
        if(err) throw err

        respon.ok(results,'Berhasil Delete Data',res) 
    })
})


module.exports=router