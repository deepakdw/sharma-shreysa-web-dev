module.exports = function() {
  var mongoose = require("mongoose");
  var CategorySchema = require("./category.schema.server.js")();
  var Category = mongoose.model("Category", CategorySchema);

  var api = {
    addCategoryRestaurant: addCategoryRestaurant,
    findRestaurant: findRestaurant,
    findRestaurantByCategory: findRestaurantByCategory,
    findRestaurantByRating: findRestaurantByRating,
    findRestaurantByCity: findRestaurantByCity
  };
  return api;

  function findRestaurantByCity(city) {
    return Category.find({ city: city }).populate(
      "_restaurant",
      "restaurantId _id name location image"
    );
  }

  function addCategoryRestaurant(RestData) {
    return Category.create(RestData);
  }

  function findRestaurant(restId) {
    return Category.findOne({ _restaurant: restId });
  }

  function findRestaurantByCategory(category) {
    return Category.find({ category: category })
      .populate("_restaurant", "restaurantId _id name location image")
      .populate("_user", "_id username");
  }

  function findRestaurantByRating(rating) {
    return Category.find({ rating: rating }).populate(
      "_restaurant",
      "restaurantId _id name location image"
    );
  }
};
