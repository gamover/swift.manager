var $swift = require('swift.mvc'),

    model = $swift.require('[index]/model/model');

exports.indexAction = function indexAction ()
{
    this.get(function (req, res) { res.render({ text: model.getText() }); });
};