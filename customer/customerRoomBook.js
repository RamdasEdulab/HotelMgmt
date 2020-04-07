const express = require('express');

var router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;

var {Customer}= require('../models/customer.js');


router.get('/getcustomerinfo', (req,res)=>{
    Customer.find((err,docs)=>{
        if(!err){res.send(docs);}
        else
        console.log('get all customers');
    });
});

router.post('/CustomerRoomBooking',(req,res)=>{
    var cus = Customer({
        Name:req.body.Name,
        Address:req.body.Address,
        State:req.body.State,
        Email:req.body.Email,
        Mobile_No:req.body.Mobile_No,
        In_Date:req.body.In_Date,
        Out_Date:req.body.Out_Date,
        No_of_persons:req.body.No_of_persons,
        Room_Type:req.body.Room_Type,
        Room_No:req.body.Room_No,
        Nights:req.body.Nights,
    });
    cus.save((err,docs)=>{
      if(!err){res.send(docs);}
      else
      console.log('saved successfully');
    });
});

router.put('/:id',(req,res)=>{
if(!ObjectId.isValid(req.params.id))
return res.status(400).send('no customer_id in this table');
var cus={
    Name:req.body.Name,
    Address:req.body.Address,
    State:req.body.State,
    Email:req.body.Email,
    Mobile_No:req.body.Mobile_No,
    In_Date:req.body.In_Date,
    Out_Date:req.body.Out_Date,
    No_of_persons:req.body.No_of_persons,
    Room_Type:req.body.Room_Type,
    Room_No:req.body.Room_No,
    Nights:req.body.Nights,
}
Customer.findByIdAndUpdate(req.params.id,{$set:cus},(err,docs)=>{
    if(!err){res.send(docs);}
    else
    console.log(' customer updated successfully');
});
});

router.delete('/:id', (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('no customer_id in this table');

    Customer.findByIdAndDelete(req.params.id, (err,docs)=>{
        if(!err){res.send(docs);}
        else
        console.log('customer deleted successfully');
    });
});

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
     return res.status(400).send('no customer_id in this table');

     Customer.findById(req.params.id,(err,docs)=>{
         if(!err){res.send(docs);}
         else
         console.log('get id wise customer');
     });
    
});
module.exports=router;