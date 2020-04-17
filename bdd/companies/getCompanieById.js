const mongoose = require('mongoose');
const companySchema = require('../../models/companySchema');

const Companies = mongoose.model('Companies', companySchema);

async function getCompanyById(id){
    //on requete l'offre de casting correspondant à l'id donné à la base de donnée qui les renvoies sous forme de json
    const companie = await Companies
        .findOne({_id: id})
        .limit(1000)
        .sort({ id : 1, name: 1})
        .select({});

    //on return le document json
    return companie;
    //console.log(offer);

};

//getOffers();
exports.getCompanyById = getCompanyById;