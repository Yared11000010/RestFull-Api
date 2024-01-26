const express = require("express");
require("./db/connection");
const student = require("./model/students");

const app = express();
const port = 8000;

app.use(express.json());

// for insert data in mongodb
app.post("/students", async (req, res) => {
  try {
    const user = new student(req.body);
    const createUser = await user.save();
    res.status(201), send(createUser);
  } catch (err) {
    res.status(400).send(err);
  }

  // console.log(req.body);
  // const user = new student(req.body);

  // user.save().then(()=>{
  //   res.status(201).send(user);
  // }).catch((err)=>{
  //   res.status(400).send(err);

  // });
});

// for get data from mongodb

app.get("/students", async (req, res) => {
  try {
    const users = await student.find();
    res.send(users);
  } catch (err) {
    res.status(400).send(err);
  }
});
// this method reads or Get specific data from students collections
app.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    //  or
    const uniqueID = req.params.id;
    const user = await student.findById({ _id: uniqueID });
    if (!user) {
      res.status(404).send();
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});
//for update some fields in your specific document

app.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await student.findByIdAndUpdate(_id, req.body, {
      new: true
    });
    res.send(user);
  }catch (err) {
    res.status(404).send(err);
  }
});


// method to delete specific student from mangodb
app.delete("/students/:id", async (req,res)=>{
    try{
      const _id=req.params.id;
      const user= await student.findByIdAndDelete(_id);
      if(!user){
        res.status(400).send();
        }else{
        res.send(user);
        }
        }
    catch(err){
       res.status(500).send(err);
    }    
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
