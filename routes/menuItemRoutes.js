const express = require('express')
const router = express.Router();
const MenuItem = require('./../models/MenuItem')

router.post('/', async (req, res) => {
    try {
        const datas = req.body
        const newMenu = new MenuItem(datas)
        const response = await newMenu.save();
        console.log('data is saved');
        res.status(200).json(response)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internally error' })
    }
})

router.get('/', async (req, res) => {
    try {
        const datas = await MenuItem.find()
        console.log('data is fetched');
        res.status(200).json(datas)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' })
    }
})

router.get('/:worktype',async(req , res)=>{
    try {
         const worktype = req.params.worktype;
         if(worktype == 'sweet' || worktype == 'spicy' || worktype == 'sour'){
             const response = await MenuItem.find({taste : worktype});
             console.log('response fetched');
             res.status(200).json(response)
         }
             else{
                res.status(404).json({error : 'Invalid work type'})
             }  
    } catch (err) {
        console.log(err);
        res.status(500).json({error : 'Invalid server error'})
    }
})


module.exports = router; 