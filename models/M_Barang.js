const mysql=require('mysql')


const konek=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_martabak'
})

konek.connect((err)=>{
    if(err){
        throw err
    }else{
        console.log('Koneksi Berhasil')
    }
})

module.exports=konek

