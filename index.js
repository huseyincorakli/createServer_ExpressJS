const express= require('express')
const app= express();
const port=5000;

app.get("/",(req,res)=>{
    res.status(200).send("Index Sayfasi");
})

app.get("/contact",(req,res)=>{
    res.status(200).send("Contact Sayfasi");
})

app.get("/tags",(req,res)=>{
    res.status(200).send("Tags Sayfasi");
});

app.get("*",(req,res)=>{
    res.status(404).send("404 Sayfa Bulunamadi");
})

app.listen(5000,()=>{
    console.log(`Sunucu:${port} aktif`);
})