const Auth = require('../models/auth.model');

exports.checkAuth = (req, res) => {
    Auth.auth(req.body, (err, data) => {
        if(err) {
            if(err.message = 'not_found') 
                res.status(404).send({message: err.message});
            else res.status(500).send({message: err});
        } else res.send(data);
    })
}

