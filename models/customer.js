const mongoose = require('mongoose');

var Customer = mongoose.model('Customer',{
    Name: {type:String},
    Address:{type:String},
    State:{type:String},
    Email:{type:String},
    Mobile_No: {type:Number},
    In_Date:{type:String},
    Out_Date:{type:String},
    No_of_persons:{type:Number},
    Room_Type: {type:String},
    Room_No:{type:Number},
    Nights:{type:Number},
   
});
module.exports={Customer};