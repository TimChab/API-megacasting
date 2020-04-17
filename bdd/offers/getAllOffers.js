const mongoose = require('mongoose');
const offerSchema = require('../../models/offerSchema');

const Offers = mongoose.model('Offers', offerSchema);

async function getAllOffers(){
    //on requetes toutes les offres de castings à la base de donnée qui les renvoies sous forme de json
    const offers = await Offers
        .find({})
        .limit(1000)
        .sort({ id : 1})
        .select({ });

    //on return le document json
    return offers;

};

//getOffers();
exports.getAllOffers = getAllOffers;