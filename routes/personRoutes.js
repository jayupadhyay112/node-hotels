const express = require('express');
const router = express.Router();
const Person = require('./../models/person')

// POST route to add a person 
router.post('/person',async(req , res)=>{
    try {
        const data  = req.body //AssUMING THE  request body contains the person data

        //Create a new person document using the Mongoose model
        const newPerson = new Person(data);

        //Save the new person to the database
       const  response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response)
        }
    catch (err) {
        console.log(err);
        res.status(500).json({error :'Internal server error'})
        
    }
})

router.get('/',async(req,res)=>{
    try {
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data)
    } catch (err) {
        console.log(err);
        res.status(500).json({error : 'internal server error'})
    }
})

router.get('/:worktype',async(req , res)=>{
    try {
         const worktype = req.params.worktype;
         if(worktype == 'chef' || worktype == 'manager' || worktype == 'waiter'){
             const response = await Person.find({work : worktype});
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

router.put('/:id', async(req , res)=>{
    try {
        const personId = req.params.id;
        const updateId = req.body;
        const response = await Person.findByIdAndUpdate(personId , updateId,{
            new : true,
            runValidators : true,
        })
        if(!response){
            return res.status(404).json({error : 'Person not found'})
        }
        console.log('data updated');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({error : 'Invalid server error'})
    }
})

router.delete('/person' , async(req ,res)=>{
    try {
        const personId = req.params.id
        const response = await Person.findByIdAndRemove(personId)
        if(!Response){
            return res.status(404).json({errors : 'Person not found'})
        }
        console.log('data delete');
         res.status(200).json(response);
    } catch (error) {
                console.log(err);
        res.status(500).json({error : 'Invalid server error'})
    }
    
})

module.exports = router