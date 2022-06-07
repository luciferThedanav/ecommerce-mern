const express = require('express')
const app = express();

const hbs = require('hbs')
const loginRoutes=require("./routes/login")
const registerRoutes=require("./routes/register")
const productsRoutes=require("./routes/products")
const connectDatabase=require("./database/connection")
const staticPath = __dirname + "/public"
const Product=require("./models/product");

//Serving static files
app.use('/public', express.static(staticPath))
//Connect to database
connectDatabase()
//Setting view engine for our application
app.set('view engine', 'hbs')
//Setting the views folder , default is views
app.set('views', './templates')
//Letting the engine know where to look for partials files
hbs.registerPartials('./templates/partials')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/', async(req, res) => {
   const products= await Product.find()
    res.render("index",{products})
})

app.use("/login",loginRoutes)
app.use("/register",registerRoutes)
app.use("/api/products",productsRoutes)

app.get("*", (req, res) => {
    res.sendStatus(404)
})

app.listen(8000, () => {
 console.log("Server is running at port 8000")
})
