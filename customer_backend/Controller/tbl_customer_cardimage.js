const con = require('../Model/model')

const CardImagePost = (req, res)=>{
    const fullurl = req.protocol + "://" + req.get("host")+'/public/images/'
    const data = ({
         imageId: req.body.imageId,     
         productName: req.body.productName, 
         brandName : req.body.brandName,
         price     :req.body.price,  
         discount:req.body.discount,    
         quantity:req.body.quantity,    
         rating:req.body.rating,      
         img1: fullurl+req.files[0].filename,        
         img2:fullurl+req.files[1].filename,        
         img3:fullurl+req.files[2].filename,        
         img4 :fullurl+req.files[3].filename,       
         descrip:req.body.descrip
    })
    const sql = `INSERT INTO tbl_customer_cardImage set ?`
    con.query(sql, data,(err, result)=>{
        if(err){
            console.log("Card image is not posted...")
            res.json(err)
        }else {
            console.log("Card image is posted...")
            res.json(result)
        }
    })
}

const CardImageGet = (req, res) =>{
    const sql = `SELECT * FROM tbl_customer_cardImage`
    con.query(sql,(err, result)=>{
        if(err){
            console.log("Card image is not getting...")
            res.json(err)
        }else {
            console.log("Card image is getting...")
            res.json(result)
        }
    })
}

module.exports = {CardImagePost, CardImageGet}