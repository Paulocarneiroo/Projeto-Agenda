const Contato = require('../models/ContactModel')

exports.index = async (req, res) => {
    const contacts = await Contato.findAll();
    res.render('index', { contacts });
};

