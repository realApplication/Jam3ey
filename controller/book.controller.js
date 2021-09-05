'use strict';

const { books } = require('../models/index');
const { pickedSchema } = require('../models/index')



const getBooks = async (req, res) => {
    let id = parseInt(req.params.id);
    if (!id) {
        let allRecords = await books.findAll();
        console.log('allRecords' ,allRecords );
        res.status(200).json(allRecords);
    } else {
        let allRecords = await books.findOne({ where: { id: id } });
        console.log(allRecords);
        res.status(200).json(allRecords);
    }

}

const addBooks = async (req, res) => {
    try {
        let newBook = req.body;
        let book = await books.create(newBook)
        res.status(200).json(book);
    }
    catch (err) {
        console.log(err);
    }
}

const deleteBooks = async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let deletedBook = await books.destroy({ where: { id: id } });
        res.status(200).json("item deleted");

    }
    catch (err) {
        console.log(err);
    }
}


const getPickedBooks = async (req, res) => {
    let allRecords = await pickedSchema.findAll();
    console.log(allRecords);
    res.status(200).json(allRecords);
}

const addPickedBooks = async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let Record = await books.findOne({ where: { id: id } });
        console.log(">>>>>>>>>RECORD",Record);
        let userId=req.userId;
        console.log(">>>>>>>>>>>>>" , userId)
     
        let data={

            title:Record.dataValues.title, 
            author:Record.dataValues.author,
            image:Record.dataValues.image,
             userId:userId
        };
        req.body=data;
       

        let dataTest=await pickedSchema.findOne({where :{title : Record.dataValues.title}});
        if(dataTest){
            res.json("all ready have it");
        }
        console.log("pickedschema-------->" , data);

        console.log("------->userID" , userId)
        console.log("req.body",req.body);
        let book = await pickedSchema.create(data)
       
        res.status(200).json(book);
    }
    catch (err) {
   console.log(">>>>>>>>>>>>>>>>>>>>>>ERROR MESSAGE",err);
        if(err.message=="Validation error")
        {
            res.json("all ready have it")
            return false;
        }
        res.json('not found')
    }
}

const deletePickedBooks = async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let deletedBook = await pickedSchema.destroy({ where: { id: id } });
        res.status(200).json("item deleted");

    }
    catch (err) {
        console.log(err);
    }
}


module.exports = {
    getBooks,
    addBooks,
    deleteBooks,
    getPickedBooks,
    addPickedBooks,
    deletePickedBooks
}