const express = require('express')
const router = express.Router()
const cors = require('cors')

const ListingDef = require('../models/Listing')
router.use(cors())

//retrieve listing
/* router.get("/getentry", (req, res, next) => {
  ListingDef.listing.findAll({}, {_id:1},(err,getentry)=>{
    if(err){
      res.send(err);
    }

    var data=[];
    Object.keys(listing).forEach((key)=>{
      var val=listing[key];
      data.push([val.id,val.name,value.price,value.photo,value.description,value.expiry_date]);
    });
    res.send(data);
  });
}); */

// create Listings
router.post("/setentry",function(req,res){
var setentry=req.body;
if(!setentry.name){
  res.status(400);
  res.json({
    error:"Bad Data"
  });
 }else{
     ListingDef.listing.save(setentry,function(err, setentry){
  if(err){
        res.send(err);
         }
          res.json(setentry);
         });
      }
});


// delete entry
/* router.delete("/deleteentry/:id",(req,res,next)=>{
  ListingDef.listing.remove({id:req.params.id},(err,deleteentry)=>{
    if(err){
      res.send(err);
    }
    res.json(deleteentry);
  });
}); */

//update entry
/* router.put("/updateentry/:id",(req,res,next)=>{
  var updateentry= req.body;
  var updEntry={};

  if(updateentry.id){
    updEntry.id=updateentry.id;
  }
  if(!updEntry){
    res.status(400);
    res.json({
      error:"Bad Data"
    });
  }else{
    ListingDef.listing.update({name:req.params.name},
      updEntry,
      {},
      (err,task)=>{
        if(err){
          res.send(err);
        }
        res.json(updateentry);
      }); 
  }
}); */
module.exports = router
