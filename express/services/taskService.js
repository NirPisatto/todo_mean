const User = require("../models/User")

module.exports ={
    getTask : async(req, res) => {
        let user = await User.findById({_id : req.user.userId})
        let resp  = {tasks : user.tasks || []}
        res.apiSuccess(resp)
    },
    getTaskById: async(req, res) => {
        let {id} = req.params
        if(!id)return res.apiError("Task id is required")
        let user = await User.findById({_id : req.user.userId})
        let task = user.tasks.find(t => t._id == id)
        
        if(!task)return res.apiError("Task not found")

        res.apiSuccess(task)
    },
    addTask : async(req, res) => {
        let {name, description, deadline} = req.body
        if(!name)return res.apiError("Task name is required")
        let user = await User.findById({_id : req.user.userId})
        user.tasks = user.tasks || []
        user.tasks.push({'name':name, "description":description, 'status' : 'new'})
        await user.save()
        res.apiSuccess("Task added successfully")
    },
    updateTask : async(req, res) => {
        let {_id, name, description, deadline, status} = req.body
        if(!_id)return res.apiError("Task id is required")
        if(!name)return res.apiError("Task name is required")
        let user = await User.findById({_id : req.user.userId})
        user.tasks = user.tasks || []
        let task = user.tasks.find(t => t._id == _id)
        if(!task)return res.apiError("Task not found")
        task.description = description
        task.deadline = deadline
        task.status = status
        await user.save()
        res.apiSuccess("Task updated successfully")
    },
    markTask : async(req, res) => {
        let {_id, status} = req.body
        if(!_id)return res.apiError("Task id is required")
        if(!name)return res.apiError("Task name is required")
        let user = await User.findById({_id : req.user.userId})
        user.tasks = user.tasks || []
        let task = user.tasks.find(t => t._id == _id)
        if(!task)return res.apiError("Task not found")
        task.status = status
        await user.save()
        res.apiSuccess("Task updated successfully")
    },
    deleteTask : async(req, res) => {
        let {_id} = req.body
        if(!_id)return res.apiError("Task id is required")
        let user = await User.findById({_id : req.user.userId})
        user.tasks = user.tasks || []
        let task = user.tasks.find(t => t._id == _id)
        if(!task)return res.apiError("Task not found")
        user.tasks = user.tasks.filter(t => t._id != _id)
        await user.save()
        res.apiSuccess("Task deleted successfully")
    }
}