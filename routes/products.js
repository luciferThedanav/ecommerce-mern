const express=require("express");
const router=express.Router();
const {products}=require("../data")

const {SingleProduct,ManyProducts,createproduct,deleteProduct,updateProduct}=require("../controllers/products")


router.get("/",ManyProducts )


router.get("/:productID",SingleProduct)

router.post("/",createproduct)
router.patch("/:productID",updateProduct)
router.delete("/:productID",deleteProduct)

module.exports=router

