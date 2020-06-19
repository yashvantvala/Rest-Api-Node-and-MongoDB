const express = require('express');
const Employee = require('../model/model'); 
const { update } = require('../model/model');
const router = express.Router();


//get all employees

router.get('/',async (req,res)=>{
   // res.send('router is working fine')
   //res.json(Employee.find())
   try{
       const emp = await Employee.find();
       res.json(emp)

   }catch{
       res.status(400).json({msg:'Error occured'})
   }
})

//find single employee
router.get('/:id',async (req,res)=>{
    const singleEmp = await Employee.findById(req.params.id)
   // console.log(singleEmp)
    //console.log(req.params.id);
    res.json(singleEmp)
})

//insert employees

router.post('/',async (req,res)=>{
    // console.log(req.body);
    // res.send('cool')
    const emp = new Employee({
        name:req.body.name,
        email:req.body.email
    });

    const newEmp = await emp.save();

   // newEmp.then(data=>res.json(data))
   res.json(newEmp)
})

//update employee

router.patch('/:id',async (req,res)=>{
    const updated = await Employee.findById(req.params.id);

    updated.name = req.body.name?req.body.name:updated.name;
    updated.email = req.body.email?req.body.email:updated.email;

    const updateEmp = await updated.save();
    res.json('updated successfully')
    
})

router.put('/:id',async (req,res)=>{
    
    const updated = await Employee.updateOne({_id:req.params.id},
        {
            $set:{
                name:req.body.name,
                email:req.body.email,               
        }}    
        )
        res.send("employee updated")
})

//delete Employees

router.delete('/:id',async (req,res)=>{
   const deleted = await Employee.remove({_id:req.params.id})
   res.json("deleted")
})


module.exports = router;