exports.read = async (req, res, next) =>{
    res.send('Hello product 1 Endpoint')
}
exports.list = async (req, res, next) =>{
    try{
        // code
      res.send('hello list Endpoint')
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}
exports.create = async (req, res, next) =>{
    try{
        // code
      res.send('hello create Endpoint')
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.update = async (req, res, next) =>{
    try{
        // code
      res.send('hello put Endpoint')
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}
exports.remove = async (req, res, next) =>{
    try{
        // code
      res.send('hello delete Endpoint')
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}