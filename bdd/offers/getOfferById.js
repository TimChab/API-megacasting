const mongoose = require('mongoose');
const offerSchema = require('../../models/offerSchema');

const Offers = mongoose.model('Offers', offerSchema);

async function getOfferById(id){
    //on requete l'offre de casting correspondant à l'id donné à la base de donnée qui les renvoies sous forme de json
    const offer = await Offers
        .findOne({_id: id})
        .limit(1000)
        .sort({ id : 1})
        .select({});

    //on return le document json
    return offer;
    //console.log(offer);

};

//getOfferById('5e920d9180bf2fdad1b544f1');
exports.getOfferById = getOfferById;