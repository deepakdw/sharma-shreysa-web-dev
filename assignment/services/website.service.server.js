module.exports = function(app, models) {
  var websiteModel = models.websiteModel;

  app.get("/api/user/:userId/website", findAllWebsitesForUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsite);
  app.delete("/api/website/:websiteId", deleteWebsite);
  app.post("/api/user/:userId/website", createWebsite);

  function createWebsite(req, res) {
    var userId = req.params.userId;
    var newWebsite = req.body;
    console.log(req.body);
    websiteModel.createWebsiteForUser(userId, newWebsite).then(
      function(website) {
        res.json(website);
      },
      function(error) {
        res.status(400).send("Website could not be created");
      }
    );
  }

  function deleteWebsite(req, res) {
    var id = req.params.websiteId;
    websiteModel.deleteWebsite(id).then(
      function(stats) {
        console.log(stats);
        res.send(200);
      },
      function(error) {
        res.statusCode(404).send(error);
      }
    );
  }

  function updateWebsite(req, res) {
    var id = req.params.websiteId;
    var newWebsite = req.body;
    websiteModel.updateWebsite(id, newWebsite).then(
      function(stats) {
        console.log(stats);
        res.send(200);
      },
      function(error) {
        res.statusCode(404).send(error);
      }
    );
  }

  function findAllWebsitesForUser(req, res) {
    var userId = req.params.userId;
    websiteModel.findAllWebsitesForUser(userId).then(
      function(websites) {
        res.json(websites);
      },
      function(error) {
        res.status(400).send(error);
      }
    );
  }

  function findWebsiteById(req, res) {
    var websiteId = req.params["websiteId"];

    websiteModel.findWebsiteById(websiteId).then(
      function(website) {
        res.send(website);
      },
      function(error) {
        res.status(400).send(error);
      }
    );
  }
};
