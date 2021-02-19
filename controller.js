module.exports={
    getIP:async(req,res)=>{
        console.log(req.source  )
        
        let result={
            remoteAddress:req.socket.remoteAddress,
            remotePort:req.socket.remotePort,
            language:req.headers['accept-language'],
            software:req.get('User-Agent')      
        }
        res.status(200).send(result)
    }
}