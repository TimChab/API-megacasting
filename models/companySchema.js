const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({ // schema de constructin d'un objet
    name: String,
    email: String,
    tel: String,
    siret: String,
    
});

module.exports = companySchema;