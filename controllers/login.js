
const welcomeuser=(req, res) => {
    console.log(req.body)
   res.send(`welcome ${req.body.name}`)
   
 }
 module.exports=welcomeuser

