const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    img:String,
    title:String,
    desc:String,
    price:String,
    category:String,
    strikedOffPrice:String
},{
    versionKey:false
})

const productModel=mongoose.model("products",productSchema)

module.exports={productModel}