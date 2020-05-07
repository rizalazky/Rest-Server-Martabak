

exports.ok=function(values,message,res){
    let data={
        status:"200",
        Message:message,
        Data:values
        
    }

    res.json(data)
    res.end()
}