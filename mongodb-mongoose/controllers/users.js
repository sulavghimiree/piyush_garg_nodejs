const mongoose = require('mongoose')
const User = require('../models/users')

async function getAllUsers(req, res){
    const data = await User.find({})
    return res.json(data);
}

async function createUser(req, res){
    const body = req.body
    if(!body || !body.first_name || !body.last_name || !body.email || !body.job_title || !body.gender){
        return res.status(400).json({error:'All field are required'})
    }
    const result = await User.create({
        first_name:body.first_name,
        last_name:body.last_name,
        email:body.email,
        job_title:body.job_title,
        gender:body.gender,
    })
    return res.status(201).json({status: "Created"})
}

async function getUserById(req, res){
    const id = req.params.id
    const data =await User.findById(id)
    return res.json(data)
}

async function updateUserById(req, res){
    const id = req.params.id
    await User.findByIdAndUpdate(id, {last_name:'Upreti'})
    return res.json({status:'Updated'})
}

async function deleteUserById(req, res){
    const id = req.params.id
    await User.findByIdAndDelete(id)
    return res.json({status:'Deleted'})
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById
}