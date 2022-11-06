const express = require('express');
const DetestService = require('../services/detest.service');

const router = express.Router();
const service = new DetestService();

router.get('/', async(req, res) => {
    try {
        const tasks = await service.find();
        res.json(tasks);
      } catch (error) {
        next(error);
      }
    // res.send("hi mi name is detest :D");
});




router.post('/', (req, res) => {
const body = req.body;
res.json(
    {
        message: 'created',
        data: body
    });
})


router.patch('/:id', (req, res) => {
    const { id } =req.params;
    const body = req.body;
    res.json({
            message: 'update',
            data: body,
            id,
        });
    })



router.delete('/:id', (req, res) => {
    const { id } =req.params;
    const body = req.body;
    res.json({
            message: 'deleted',
            id,
        });
    })

module.exports = router;

