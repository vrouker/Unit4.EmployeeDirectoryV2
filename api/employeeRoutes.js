import express from "express";
import employees, { getEmployees, addEmployees } from "#db/employees";
const router = express.Router();
export default router;

//Sends the entire array of employees
router.get("/", (req, res)=>{
    const employees = getEmployees()
    res.send(employees)
})


//Sends the information of a random employee
router.get("/random", (req, res)=>{
    const randomIndex = Math.floor(Math.random()*employees.length);
    res.send(employees[randomIndex])
})

//Sends the information for a specific employee by id
router.get("/:id", (req, res)=>{
    const {id} = req.params;
    const employee = employees.find((e) => e.id === +id);
    if (!employee) {
    return res.status(404).send("Employee not found");
  }
  res.send(employee);
})

//Adds an employee to the array 
router.post("/", (req, res)=>{
    if (!req.body) {
        return res.status(404).send(`Requst Body Is Not Found`)
    }

    const {employee} = req.body;

    addEmployees(employee);
    res.status(201).send(`Employee ${employee} has been added`)
})