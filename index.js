var express = require('express');
const cors=require('cors');
const app=express();
const mysql=require('mysql');
const connection=mysql.createPool(
    {
        connectionLimit:100,
        host:'localhost',
        user:'root',
        password:'kavya',
        database:'shark_tank'

    });
   
//console.log(connection);
app.use(cors());
app.get('/',(req,res) =>{
    res.send('go to /products to view product information')
})
//view products
app.get('/products',(req,res)=>{
    connection.query('SELECT * FROM product',(err,results)=>{
        if(err){
            return res.send(err);
        }
        else{
            res.json({
                data: results
            })
        }
    });
})
app.get('/products/add',(req,res)=>{
    const {productid,name,price}=req.query;
    const insert_query=`INSERT INTO product (productid,name,price) VALUES (${productid},'${name}',${price})`
    connection.query(insert_query,(err,results)=>{
        if(err){
            return res.send(err);
        }
        else{
            res.send('success')
        }
    })

})
app.listen(4000,()=>{
  console.log('running');
})

