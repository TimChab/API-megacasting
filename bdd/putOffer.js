const mongoose = require('mongoose');
const connection = require('./connection');
const offerSchema = require('../models/offerSchema');

const Offer = mongoose.model('Offers', offerSchema);

// UPDATE update first (une méthode d'update /2) => récupération confirmation update
async function updateOffer(id, bodyRequest){
    const result = await Offer.updateOne({ _id : id}, {
        $set: {
            intitule: bodyRequest.value.intitule,
            company: bodyRequest.value.company,
            about: bodyRequest.value.about,
            registered: bodyRequest.value.registered,
            broadcast_time : bodyRequest.value.broadcast_time,
            start_contract: bodyRequest.value.start_contract,
            number_of_posts : bodyRequest.value.number_of_posts,
            profil_description: bodyRequest.value.profil_description,
            tags: bodyRequest.value.tags,
            job: bodyRequest.value.job
        }
    });

    return result;
    //console.log(result);
};

exports.updateOffer = updateOffer;