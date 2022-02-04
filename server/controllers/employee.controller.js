const employeeCtrl = {};
const Employee = require('../models/Employee');

employeeCtrl.getEmployees =  async(req,res)=>
{
	const employees = await Employee.find();
	res.json(employees);
}
employeeCtrl.getEmployee =  async(req,res)=>
{
	const {id} = req.params;
	const employee = await Employee.findById(id);
	res.json(employee);
}
employeeCtrl.createEmployee =  async(req,res)=>
{
	const employee = new Employee({
		name: req.body.name,
		position: req.body.position,
		office: req.body.office,
		salary: req.body.salary
	});
	await employee.save();
	res.json({status:'Employee Saved'});
}
employeeCtrl.editEmployee =  async(req,res)=>
{
	const { id } = req.params;
	const employee = {
		name: req.body.name,
		position: req.body.position,
		office: req.body.office,
		salary: req.body.salary
	};
	await Employee.findByIdAndUpdate(id, employee,{new:true});
	res.json({status: 'Employee Update'});
}
employeeCtrl.deleteEmployee =  async(req,res)=>
{
	const {id} = req.params;
	await Employee.findByIdAndRemove(id);
	res.json({status: 'Employee Deleted'})
}

module.exports = employeeCtrl;