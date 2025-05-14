import express from "express";
import employees from "#db/employees";
import employeesRouter from "#api/employeeRoutes"

const app = express();

    //BODY PARSKING MIDDLEWARE
app.use(express.json());


    //LOGGING MIDDLEWARE
app.use((req, res, next)=>{
  console.log(req.method, req.originalUrl)
  next()
})

  //ROUTING 
app.route('/').get((req,res)=>{
  res.send(`Hello World!`)
})

app.use("/employee", employeesRouter)



//GENERAL ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).send(`AN ERROR HAS OCCURED ${err}`)
})

export default app;
