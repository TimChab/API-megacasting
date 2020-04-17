const mongoose = require('mongoose');
const companySchema = require('../../models/companySchema');

const Companies = mongoose.model('Companies', companySchema);

async function getAllCompanies(){
    //on requetes toutes les offres de castings à la base de donnée qui les renvoies sous forme de json
    const companies = await Companies
        .find({})
        .limit(1000)
        .sort({ id : 1})
        .select({ });

    //on return le document json
    return companies;

};

//getOffers();
exports.getAllCompanies = getAllCompanies;