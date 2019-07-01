/*jshint esversion: 6 */
//Filename : contactController.js
//Import contact model
Contact = require('./contactModel');
let mongoose = require('mongoose');
// Handle index actions
exports.index = (req, res) => {
	Contact.get((err, contacts) => {
		if (!!err) {
			res.json({
				status: "error",
				message: err
			});
		}
		res.json({
			status: "success",
			message: "Contacts retrived successfully",
			data: contacts
		});
	});
};

// Handle create contact actions
exports.new = (req, res) => {
	let contact = new Contact();
	contact.name = req.body.name ? req.body.name : contact.name;
	contact.email = req.body.email;
	contact.gender = req.body.gender;
	contact.phone = req.body.phone;

	// save the contact and check for errors
	contact.save((err) => {
		if (!!err) {
			res.json(err);
		}
		res.json({
			message: 'New Contact created',
			date: contact
		});
	});
};

// Handle view contact info
exports.view = (req, res) => {
	Contact.findById(req.params.contact_id, (err, contact) => {
		if (!!err) {
			res.json(err);
		}
		res.json({
			message: 'Contact details loading',
			data: contact
		});
	});
};

// Handle update contact info
exports.update = (req, res) => {
	Contact.findById(req.params.contact_id, (err, contact) => {
		if (!!err) {
			res.json(err);
		}

		contact.name = req.body.name ? req.body.name : contact.name;
		contact.email = req.body.email;
		contact.gender = req.body.gender;
		contact.phone = req.body.phone;

		// save the contact and check for errors
		contact.save((err) => {
			if (!!err) {
				res.json(err);
			}
			res.json({
				message: 'Contact Info updated',
				data: contact
			});
		});
	});
};

// Handle delete contact
exports.delete = (req, res) => {
	if (mongoose.Types.ObjectId.isValid(req.params.contact_id)) {
		Contact.findByIdAndRemove({
			_id: req.params.contact_id
		}, (err, contact) => {
			if (!!err) {
				res.json(err);
			}
			res.json({
				message: 'Contact deleted',
				status: "success"
			});
		});
	}
};