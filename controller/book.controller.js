'use strict';

const { books } = require('../models/index');
const { pickedSchema } = require('../models/index')

const client = require('socket.io-client');
const host = "http://localhost:7893";
const socket = client.connect(host);


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
    res.status(200).json(allRecords);
}

const addPickedBooks = async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let Record = await books.findOne({ where: { id: id } });

        
        req.body=Record.dataValues;
        let book = await pickedSchema.create(req.body)
        res.status(200).json(book);
    }
    catch (err) {

        if(err.message=="Validation error")
        {
            res.json(err.message)
            return false;
        }
        res.json(err.message)
    }
}

const deletePickedBooks = async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        await pickedSchema.destroy({ where: { id: id } });
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