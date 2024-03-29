var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var newSchema = new Schema({
  'name': { type: String, default: `Task-${Date.now}` },
  'status': { type: String, default: "pending" },
  'description': { type: String, default: "" },
  'deadline': { type: Date },
  'createdAt': { type: Date, default: Date.now },
  'updatedAt': { type: Date, default: Date.now }
});

// newSchema.pre('save', function(next){
//   this.updatedAt = Date.now();
//   next();
// });

// newSchema.pre('update', function() {
//   this.update({}, { $set: { updatedAt: Date.now() } });
// });

// newSchema.pre('findOneAndUpdate', function() {
//   this.update({}, { $set: { updatedAt: Date.now() } });
// });



module.exports = mongoose.model('Task', newSchema);
