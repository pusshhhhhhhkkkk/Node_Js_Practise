const express =require('express');
const {MongoClient} = require('mongodb');
const client=new MongoClient('mongodb://localhost:27017');
const app=express();

const connecting=async(dbname,clname)=>{
    const alldb=await client.connect();
    const db=alldb.db(dbname);
    return db.collection(clname);
}
module.exports=connecting;