const mongoose = require('mongoose');
const companySchema = require('../../models/companySchema');

const Companies = mongoose.model('Companies', companySchema);

async function updateCompany(id, bodyRequest){
    const result = await Companies.updateOne({ _id : id}, {
        $set: {
            name: bodyRequest.value.name,
            email: bodyRequest.value.email,
            tel: bodyRequest.value.tel,
            siret: bodyRequest.value.siret,
        }
    });

    return result;
    //console.log(result);
};

exports.updateCompany = updateCompany;