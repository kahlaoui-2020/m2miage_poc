const User = require('../models/user.model');

exports.findUser = (req, res) => {
    User.findById(req.params.id_utilisateur, (err, data) => {
        if(err) {
            if(err.message === 'not_found') 
                res.status(404).send({message: `Not found user with id ${req.params.id}`});
            else res.status(500).send({message: `Error retrieving user with id ${req.params.id}`});

        } else res.send(data);
    });
}

exports.find = (req, res) => {
    console.log(0)
    res.send('data sended')
}