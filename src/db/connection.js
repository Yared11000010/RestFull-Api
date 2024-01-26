const mongoose= require("mongoose");

mongoose.connect("mongodb://localhost:27017/student-api",{
    // useCreateIndex:true,
    // useNewUrlParse: true,
    useUniFiedTopology: true,
    // useFindAndModify:false
}).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Connection is set up date");
})

