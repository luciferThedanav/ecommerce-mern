const async = require("hbs/lib/async")
const Product=require("../models/product")

const ManyProducts=async (req, res) => {
    let products=await Product.find()
    let {limit} = req.query
    let newProducts = products.map((product) => {
        let {id, title, price, category, image} = product
        return {id, title, price, category, image}
    })
    if(limit){
        newProducts = newProducts.slice(0, Number(limit))
    }
    res.json(newProducts)
}

const SingleProduct=async (req, res) => {
    let {productID} = req.params
    let selectedProduct = await Product.findById(productID)
    res.json(selectedProduct)
}

const createproduct=async(req,res)=>{
    let result= await Product.create({
        title:req.body.title,
        price:req.body.price,
        category:req.body.category,
        image:req.body.image
    })
    res.send(result)
}


const updateProduct=async (req,res)=>{
     const {productID}=req.params
    let result= await Product.findByIdAndUpdate(productID,req.body)
    res.json(result)
}
const deleteProduct=async(req,res)=>{
    const {productID}=req.params
    let result= await Product.findByIdAndDelete(productID)
    res.json(result)
}


module.exports=({SingleProduct,ManyProducts,createproduct,updateProduct,deleteProduct})