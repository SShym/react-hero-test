const express = require('express');
const Router = express();
const Hero = require('../models/Hero');
const upload = require('../middleware/imageUpload');

Router.get('/heroes', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; 
        const limit = parseInt(req.query.limit) || 5;
        const skip = (page - 1) * limit; 

        const heroes = await Hero.find()
            .skip(skip)
            .limit(limit);

        const totalHeroes = await Hero.countDocuments();

        res.json({
            heroes,
            totalPages: Math.ceil(totalHeroes / limit), 
            currentPage: page, 
        });
    } catch (error) {
        res.status(400).send({ error: 'Error while receiving heroes, try again later' });
    }
});

Router.post('/heroes/create', upload, async (req, res) => {
    try {
        const hero = await Hero.create({
            nick_name: req.body.nick_name,
            real_name: req.body.real_name,
            origin_description: req.body.origin_description,
            superpowers: req.body.superpowers,
            catch_phrase: req.body.catch_phrase,
            images: req.body.images || [],
            createdAt: new Date().toISOString(),
        });

        res.json(hero);
    } catch (error) {
        console.log(error);
        res.status(400).send({ error: 'Error while creating hero, try again later' });
    }
});

Router.get('/hero/:id', async (req, res) => {
    try {
        const hero = await Hero.findById(req.params.id);

        res.json(hero);
    } catch(error){
        res.status(400).send({ error: 'Error while receiving hero, try again later' });
    }
})

Router.delete('/hero/delete/:id', async (req, res) => {
    try {
        const hero = await Hero.findById(req.params.id);
        
        if (!hero) {
            return res.status(404).send({ error: 'Hero not found' });
        }

        await Hero.deleteOne({ _id: req.params.id });

        res.status(200).send({ message: 'Hero successfully deleted' });
    } catch (error) {
        res.status(400).send({ error: 'Error while deleting hero, try again later' });
    }
});


Router.put('/hero/edit/:id', upload, async (req, res) => {
    try {
        await Hero.updateOne({_id: req.params.id}, {
            nick_name: req.body.nick_name,
            real_name: req.body.real_name,
            origin_description: req.body.origin_description,
            superpowers: req.body.superpowers,
            catch_phrase: req.body.catch_phrase,
            images: req.body.images || [],
        });

        res.status(200).send({ message: 'Hero successfully edited' });
    } catch(error){
        res.status(400).send({ error: 'Error while uploading file try again later' });
    }
})

module.exports = Router;
