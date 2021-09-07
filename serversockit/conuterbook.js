'use strict'
const {counterSchema}=require('../models/index')

const setCounter=async (idbook,counterbook)=>{
 
 
   try { let iddx = idbook.toString();
    let count = counterbook.toString();

    let counterData = await counterSchema.findOne({where:{idbook:iddx}})
    let id =  counterData.dataValues.id;
    let data={
        idbook:iddx,
        counter:count
    } 
    await counterSchema.update(data,{where:{id:id}})  
    console.log('counter ', data.counter);
     return data.counter
    } 
    catch(err){
        console.log('There is not found' , err.message);   
    }
   
}
const getCounter=async (id)=>{
    // console.log('id',id);
    let idx = id.toString(); 
    let counterData = await counterSchema.findOne({where:{idbook:idx}});
    // console.log('counter book ', counterData);
    return counterData.dataValues.counter
  
}
module.exports = {setCounter,getCounter}