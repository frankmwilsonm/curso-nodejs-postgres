const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("hi mi name is detest :D");
//   res.json([]);
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

