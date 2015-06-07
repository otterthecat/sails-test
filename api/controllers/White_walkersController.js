/**
 * White_walkersController
 *
 * @description :: Server-side logic for managing white_walkers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	march: function(req, res, next){
    res.view('white_walkers/home', {
      "dragonglass": "shiny black pointy rocks"
    });
  }
};

