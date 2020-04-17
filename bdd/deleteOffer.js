const mongoose = require('mongoose');
const connection = require('./connection');
const offerSchema = require('../models/offerSchema');

const Offer = mongoose.model('Offers', offerSchema);

// UPDATE update first (une méthode d'update /2) => récupération confirmation update
async function deleteOffer(id){
    const result = await Offer.findByIdAndRemove({ _id : id}, {useFindAndModify: false});

    return result;
    //console.log(result);
};

exports.deleteOffer = deleteOffer;