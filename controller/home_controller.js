const Contact = require('../models/contacts');

module.exports.home = function(req, res) {
    Contact.find({}, function(err, contacts) {
        if (err) {
            console.log('Error in Fetching');
            return;
        }
        return res.render('home', {
            title: 'Contacts',
            contact_list: contacts
        });

    });
}


module.exports.post = function(req, res) {
    // contacts.push(req.body);
    Contact.create({ //we can also write req.body
        name: req.body.name,
        phone: req.body.phone
    }, function(err, newContact) {
        if (err) {
            console.log('error in creating a contact!');
            return;
        }
        console.log('*****', newContact);
        return res.redirect('back')
    })
}

module.exports.delete = function(req, res) {
    Contact.findOne({ phone: req.body.phone }, function(err, contact) {
        Contact.deleteOne(function(err) {
            if (err) {
                console.log('Error in deleting');
                return;
            }
            console.log('Deleted Successfully');
            return res.redirect('back')
        })
    })
}