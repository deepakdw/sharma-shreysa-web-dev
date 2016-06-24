module.exports = function () {

    var mongoose = require("mongoose");
   // var ReviewSchema = require("./review.schema.server.js")(mongoose);
    
    var UserSchema = mongoose.Schema({
        username: String,
        password: String,
        firstName: String,
        lastName: String,
      //  review: [ReviewSchema],
        email: String,
        phone: Number,
        photo: String,
        google: {
            token: String,
            id: String
        //     displayName: String
        },
        dateCreate: {type: Date, default: Date.now},
        dateUpdated: Date
    }, {collection: "project.user"});
    return UserSchema;
};


