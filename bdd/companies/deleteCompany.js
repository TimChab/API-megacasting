const mongoose = require('mongoose');
const companySchema = require('../../models/companySchema');

const Companies = mongoose.model('Companies', companySchema);

async function deleteCompany(id){
    const result = await Companies.findByIdAndRemove({ _id : id}, {useFindAndModify: false});

    return result;
};

exports.deleteCompany = deleteCompany;