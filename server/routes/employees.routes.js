const {Router} = require('express');
const EmployeeController = require('../controllers/employee.controller');
const router = Router();

router.get('/', EmployeeController.getEmployees);
router.get('/:id', EmployeeController.getEmployee);
router.post('/', EmployeeController.createEmployee);
router.put('/:id', EmployeeController.editEmployee);
router.delete('/:id', EmployeeController.deleteEmployee);


module.exports = router;