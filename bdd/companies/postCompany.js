const mongoose = require('mongoose');
const companySchema = require('../../models/companySchema');

const Companies = mongoose.model('Companies', companySchema);

async function createCompanie(bodyRequest) {
    //console.log(bodyRequest.value.job);
    // instance de l'objet Course, nomé 'Node.js Course', répondant aux critères du Schema
    const company = new Companies({
        name: bodyRequest.value.name,
        email: bodyRequest.value.email,
        tel: bodyRequest.value.tel,
        siret: bodyRequest.value.siret,
        
    });
    
    const result = await company.save();
    return result;
};

exports.createCompanie = createCompanie;