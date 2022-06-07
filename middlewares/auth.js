const {users}=require("../data")

const authorize=(req,res,next)=>{
    let user=users.find((user)=>user.username===req.body.name && user.password=== req.body.password)
    if (user){
    next()
}else{
res.status(401).send("unathorized acess")}
}

const validate=(req,res,next)=>{
    if (req.body.name==="" || req.body.password===""){
        res.status(401).send("empty username or password")
    }else{
        next()
    }
 
}

module.exports={authorize,validate}