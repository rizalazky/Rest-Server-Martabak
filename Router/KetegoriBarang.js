const express=require('express')
const app=express.Router()
const konek=require('../models/M_Barang')


app.get('/',(req,res)=>{
    konek.query("SELECT * FROM kategori",(err,result)=>{
        if(err){
            throw err
        }else{
            res.json(result)
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
            res.json('berhsil indsert')
        }
    })
})

app.delete('/:id_kategori',(req,res)=>{
    let id=req.params.id_kategori

    konek.query("DELETE FROM kategori WHERE id_kategori="+id,(err,result)=>{
        if(err){
            throw err
        }else{
            res.json("Berhasil Delete")
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
            res.json({
                status:200,
                message:"Berhasil Update",
                response:results
            })

            // res.end()
        }
    })
})

module.exports=app