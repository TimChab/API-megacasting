const mongoose = require('mongoose');
const offerSchema = require('../../models/offerSchema');

const Offer = mongoose.model('Offers', offerSchema);


async function deleteOffer(id){
    const result = await Offer.findByIdAndRemove({ _id : id}, {useFindAndModify: false});

    return result;
};

exports.deleteOffer = deleteOffer;