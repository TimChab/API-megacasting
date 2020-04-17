const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({ // schema de constructin d'un objet
    intitule: String,
    company: String,
    about: String,
    registered: { type: Date, default: Date.now},
    broadcast_time : Number,
    start_contract: { type: Date},
    number_of_posts : Number,
    profil_description: String,
    tags: [String],
    job: String,
    
});

module.exports = courseSchema;