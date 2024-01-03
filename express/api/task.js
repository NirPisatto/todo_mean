var express = require('express');
var router = express.Router();

router.get('/ping', function(req, res, next) {
	return res.json({d : "Pong with task API"});
});


const asyncHandler = require('express-async-handler')
const TaskService = require('../services/taskService');


// API to view user detail, required auth in headers  (check auth middleware)
router.get('', asyncHandler((req, res, next) => {return TaskService.getTask(req, res)}))
router.post('', asyncHandler((req, res, next) => {return TaskService.addTask(req, res)}))
router.put('', asyncHandler((req, res, next) => {return TaskService.updateTask(req, res)}))
router.patch('', asyncHandler((req, res, next) => {return TaskService.markTask(req, res)}))
router.delete('', asyncHandler((req, res, next) => {return TaskService.deleteTask(req, res)}))

router.get('/:id', asyncHandler((req, res, next) => {return TaskService.getTaskById(req, res)}))




module.exports = router;