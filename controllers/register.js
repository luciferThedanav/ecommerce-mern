const {users}=require("../data")

const registeruser=(req, res) => {
    console.log(req.body)
    users.push({id:2,username:req.body.username,password:req.body.password})
    console.log (users)
    res.send("user added")
    
}
module.exports=registeruser