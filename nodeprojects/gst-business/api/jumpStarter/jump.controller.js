let JUMP = require("./jump.dao");

exports.createJUMP = (req, res, next) => {
  const jump = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    orders: req.body.orders,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  };

  JUMP.create(jump, (err, jump) => {
    if (err) {
      res.json({
        error: err
      });
    }
    res.json({
      message: "JUMP created successfully"
    });
  });
};

exports.getAllJump = (req, res, next) => {
  JUMP.get({}, (err, jump) => {
    if (err) {
      res.json({
        error: err
      });
    }
    res.json({
      jump: jump
    });
  });
};

exports.getJump = (req, res, next) => {
  JUMP.get(
    {
      personName: req.params.personName
    },
    (err, jump) => {
      if (err) {
        res.json({
          error: err
        });
      }
      res.json({
        jump: jump
      });
    }
  );
};
exports.updateJUMP = function(req, res, next) {
  const jump = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    orders: req.body.orders,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  };

  JUMP.update(
    {
      _id: req.params.id
    },
    hero,
    function(err, hero) {
      if (err) {
        // res.json({
        //     error: err
        // })
      }
      // res.json({
      //     message: "Hero updated successfully"
      // })
    }
  );
};

exports.removeJump = (req, res, next) => {
  JUMP.delete(
    {
      _id: req.params.id
    },
    (err, jump) => {
      if (err) {
        res.json({
          error: err
        });
      }
      res.json({
        message: `Jump deleted successfully`
      });
    }
  );
};
