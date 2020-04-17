const mongoose = require('mongoose');
const offerSchema = require('../../models/offerSchema');

const Offer = mongoose.model('Offers', offerSchema);

async function createOffer(bodyRequest) {
    //console.log(bodyRequest.value.job);
    // instance de l'objet Course, nomé 'Node.js Course', répondant aux critères du Schema
    const offer = new Offer({
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
        
    });
    
    const result = await offer.save();
    //console.log(result);
    return result;
};

exports.createOffer = createOffer;