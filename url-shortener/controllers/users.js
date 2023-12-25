const model = require('../models/url')
const shortid = require('shortid')

async function shortIdGenerator(req, res){
    const body = req.body
    if(!body.url){
        res.status(400).json({status:'Url not given'})
    }
    const shortId = shortid()

    await model.create({
        shortId: shortId,
        redirectURL: body.url,
        visitHistory: []
    })

    res.json({shortID : shortId})
}

async function redirectWebsite(req, res){
    const id = req.params.id
    const entry = await model.findOneAndUpdate({shortId:id}, {$push:{
        visitHistory: {timestamp: Date.now()}
    }})
    res.redirect(entry.redirectURL)
}

async function showURLClicks(req, res){
    const id = req.params.id
    const result = await model.findOne({shortId:id})
    return res.json({totalClicks: result.visitHistory.length, analytics: result.visitHistory})
}


module.exports = {
    shortIdGenerator,
    redirectWebsite,
    showURLClicks
}

