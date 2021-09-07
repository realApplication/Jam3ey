'use strict'
const {counterSchema}=require('../models/index')

const setCounter=async (idbook,counterbook)=>{
 
    console.log('idbook',idbook , 'counter book ', counterbook);
    let iddx = idbook.toString();
    let count = counterbook.toString();
    let counterData = await counterSchema.findOne({where:{idbook:iddx}})
    let check = counterData.dataValues.idbook
    let data={
        idbook:iddx,
        counter:count
    } 
    if(check == iddx)
    {
        counterSchema.update(iddx,data)   
    }
    else
    {      
        console.log('not found');
    }
}
const getCounter=async (id)=>{
    let idx = id.toString(); 
    let counterData = await counterSchema.findOne({where:{idbook:idx}});
    return counterData.dataValues.counter
  
}
module.exports = {setCounter,getCounter}