// Config file for mongo db to connect via mongoose library

var config = {
    url : process.env.MONGO_URL ? process.env.MONGO_URL : 'mongodb://root:rootpassword@localhost:27017/todo_app',
    options : {useNewUrlParser: true,  useUnifiedTopology: true}
};

module.exports = config
