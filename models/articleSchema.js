const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({ // schema de constructin d'un objet
    libelle: String,
    contenu: String
    
});

module.exports = articleSchema;