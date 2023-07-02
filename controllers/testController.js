 const  testController = (req,res)=>{
res.status(200).send({
    message:"test route",
    seccuess:true
})
}
module.exports={testController};