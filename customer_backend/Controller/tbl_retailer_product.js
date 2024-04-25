const con = require('../Model/model');

const customerGet = (req, res) => {
    const categoryid = req.params.categoryid;
    const sql = `select * from tbl_admin_subcategory where categoryid = 'S1'`;
    con.query(sql, categoryid,(err, result) => {
        if (err) {
            console.log("Error fetching customer product:", err);
            res.status(500).json({ error: "An error occurred while fetching customer product." });
        } else {
            console.log("Customer product fetched successfully.");
            res.json(result);
        }
    });
};
 
const productDetailGet = (req, res) =>{
    const subcategoryid = req.params.subcategoryid 
    const sql = `select * from tbl_retailer_product where subcategoryid  = ?`;
    con.query(sql, subcategoryid ,(err, result)=>{
        if(err){
            console.log("Product detail not getting...")
            res.json(err)
        }else {
            console.log("Product detail getting...")
            res.json(result)
        }
    })
}

module.exports = { customerGet, productDetailGet };
