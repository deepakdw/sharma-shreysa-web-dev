module.exports = function () {
  //  var mongoose = require('mongoose');
  // mongoose.connect('mongodb://127.0.0.1:27017/cs5610summer1');
  //  mongoose.connect('mongodb://username:password@localhost/webdev');
    var userModel = require("./user/user.model.server.js")();
    var websiteModel = require("./website/website.model.server.js")();
    var pageModel= require("./page/page.model.server.js")();
    var widgetModel = require("./widget/widget.model.server.js")();

    var models= {
        userModel: userModel,
        websiteModel: websiteModel,
        pageModel: pageModel,
        widgetModel: widgetModel
    };

    return models;
};
