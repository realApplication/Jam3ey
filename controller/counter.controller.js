'use strict';

const { counterSchemas } = require('../models/index')


const getCounter = async (req, res) => {
    let id = parseInt(req.params.id);
    if (!id) {
        let allRecords = await counterSchemas.findAll();
        console.log('allRecords' ,allRecords );
        res.status(200).json(allRecords);
    } else {
        let allRecords = await counterSchemas.findOne({ where: { id: id } });
        console.log(allRecords);
        res.status(200).json(allRecords);
    }

}

const addCounter = async (req, res) => {
    try {
        let newBook = req.body;
        let book = await counterSchemas.create(newBook)
        res.status(200).json(book);
    }
    catch (err) {
        console.log(err);
    }
}


const deleteCounter = async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let deleteRoom = await counterSchemas.destroy({ where: { id: id } });
        res.status(200).json("item deleted",deleteRoom);

    }
    catch (err) {
        console.log(err);
    }
}


module.exports = {addCounter,getCounter,deleteCounter}
    

