const express = require('express');
const app = express();
const {Department,Employee} = "./model/department.js"

app.use(express.json());

// Create a new department
app.post('/departments', async (req, res) => {
  try {
    const department = await Department.create(req.body);
    res.json(department);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Create a new employee
app.post('/employees', async (req, res) => {
  try {
    console.log(req.body)
    const employee = await Employee.create(req.body);
    res.json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all employees with department data
app.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.findAll({ include: Department });
    res.json(employees);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get employee by ID with department data
app.get('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id, { include: Department });
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(3000,()=>{
    console.log("server on port 3000")
})
