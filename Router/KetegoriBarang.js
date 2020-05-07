const express=require('express')
const app=express.Router()
const konek=require('../models/M_Barang')
const respon=require('../response')


app.get('/',(req,res)=>{
    konek.query("SELECT * FROM kategori",(err,result)=>{
        if(err){
            throw err
        }else{
            respon.ok(result,'OK',res)
        }
    })
})

app.post('/',(req,res)=>{
    let data=req.body.nama_kategori

    konek.query("INSERT INTO kategori (nama_kategori) VALUES ('"+data+"')",(err,result)=>{
        if(err){
            throw err
        }else{
            console.log('Berhasil')
            respon.ok(result,'Berhasil Insert',res)
        }
    })
})

app.delete('/:id_kategori',(req,res)=>{
    let id=req.params.id_kategori

    konek.query("DELETE FROM kategori WHERE id_kategori="+id,(err,result)=>{
        if(err){
            throw err
        }else{
            respon.ok(result,'Berhasil Delete',res)
        }
    })
})

app.put('/',(req,res)=>{
    let id=req.body.id
    let nama=req.body.nama_kategori
    data={
        nama_kategori:nama
    }

    console.log(data)

    konek.query("UPDATE kategori SET ? WHERE id_kategori="+id,data,(err,results)=>{
        if(err){
            throw err
        }else{
            respon.ok(result,'Berhasil Update',res)

            // res.end()
        }
    })
})

module.exports=app