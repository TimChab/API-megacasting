const express = require('express');
<<<<<<< HEAD
//const offers = require('./routes/offers');
const allOffers = require('./bdd/getAllOffers');
const offerById = require('./bdd/getOfferById');
const updateOffer = require('./bdd/putOffer');
const deleteOffer = require('./bdd/deleteOffer');
const newOffer = require('./bdd/postOffer');
const Joi = require('@hapi/joi');
 

let app = new express();
app.use(express.json());

//app.use('/', offers);
//app.use('/offers', offers);
=======
const Joi = require('@hapi/joi');

let app = new express();
app.use(express.json());
const connection = require('./bdd/connection');
//const offers = require('./routes/offers');

//offers
const allOffers = require('./bdd/offers/getAllOffers');
const offerById = require('./bdd/offers/getOfferById');
const updateOffer = require('./bdd/offers/putOffer');
const deleteOffer = require('./bdd/offers/deleteOffer');
const newOffer = require('./bdd/offers/postOffer');
 
//companies
const allCompanies = require('./bdd/companies/getAllCompanies');
const companiesById = require('./bdd/companies/getCompanieById');
const newCompany = require('./bdd/companies/postCompany');
const updateCompany = require('./bdd/companies/putCompany')
const removeCompany = require('./bdd/companies/deleteCompany');
>>>>>>> develop


app
.get('/', function(req, res){
    res.render('../templates/newList.ejs');
})
/*
.post('/', function(req, res){
    res.send('Vous avez ajouté une tâche')
})*/;


app
//quand on fait appelle à l'url /offers on requête toutes les offres
.get('/offers', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    //on recupere la requete sous forme de json
    allOffers.getAllOffers()
        //comme getOffer return une prommesse, on récupere la valeur avec .then() et on l'envoie au navigateur
        .then((value)=> res.send(value))
        .catch(err=> console.log('err', err.message));
    
});


app.post('/offers', function(req, res){
<<<<<<< HEAD
    //console.log('on post la l\'offre '+ req.params.idPost +'après verifications');

=======
    
>>>>>>> develop
    const schemaPut = Joi.object({
        tags : Joi.array().required(),
        intitule : Joi.string().max(255).min(5).required(),
        company : Joi.string().max(10).min(3).required(),
        about : Joi.string().allow(''),
        broadcast_time : Joi.number().required(),
        start_contrat : Joi.string().required(),
        number_of_posts : Joi.number(),
        profil_description : Joi.string().required(),
        job : Joi.string().min(3).max(30).required(),
        registered : Joi.date().default(Date.now).required()

    });

<<<<<<< HEAD
    //console.log(req.body);
        //const result = Joi.ValidationError
    // console.log(result.value);
    const result = schemaPut.validate(req.body);
    console.log(result);
    /*res.status(200).send(result);
    const result = Joi.validate(req.body, schemaPut);*/
=======
    const result = schemaPut.validate(req.body);
    console.log(result);
>>>>>>> develop

    if (!result.error) {
        //console.log(result);
        newOffer.createOffer(result)
            .then((value)=> res.send(value))
            .catch(err=> console.log('err', err.message));
        //res.status(200).send(result.value);

    } else {

<<<<<<< HEAD
    console.log(result.error);
=======
        console.log(result.error);
>>>>>>> develop
        res.status(400).send(result.error.details);
    };
    

});
<<<<<<< HEAD
//5e920d9180bf2fdad1b544f1
=======
>>>>>>> develop

//On gère les différentes actions sur les offres de casting

app.get('/offers/:id', function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        let id =  req.params.id;
        //on recupere la requete sous forme de json
        offerById.getOfferById(id)
            //comme getOffer return une prommesse, on récupere la valeur avec .then() et on l'envoie au navigateur
            .then((value)=> res.send(value))
            .catch(err=> console.log('err', err.message));
    });
    
app.put('/offers/:idPut', function(req, res){
    
<<<<<<< HEAD
    //console.log('on put la l\'offre '+ req.params.idPut +' après verifications');
=======
>>>>>>> develop
    const schemaPut = Joi.object({
        tags : Joi.array().required(),
        intitule : Joi.string().max(255).min(5).required(),
        company : Joi.string().max(10).min(3).required(),
        about : Joi.string().allow(''),
        broadcast_time : Joi.number().required(),
        start_contrat : Joi.string().required(),
        number_of_posts : Joi.number(),
        profil_description : Joi.string().required(),
        job : Joi.string().min(3).max(30).required(),
        registered : Joi.date().default(Date.now).required()

    });

<<<<<<< HEAD
    //console.log(req.body);
        //const result = Joi.ValidationError
    // console.log(result.value);
    const result = schemaPut.validate(req.body);
    const id = req.params.idPut;
    //console.log(id);
    //console.log(result);
    /*res.status(200).send(result);
    const result = Joi.validate(req.body, schemaPut);*/

    if (!result.error) {
        //console.log(result);
        updateOffer.updateOffer(id, result)
            .then((value)=> res.send(value))
            .catch(err=> console.log('err', err.message));
        //res.status(200).send(result.value);
=======
    const result = schemaPut.validate(req.body);
    const id = req.params.idPut;
  

    if (!result.error) {
        updateOffer.updateOffer(id, result)
            .then((value)=> res.send(value))
            .catch(err=> console.log('err', err.message));
>>>>>>> develop

    } else {

    console.log(result.error);
        res.status(400).send(result.error.details);
    };

<<<<<<< HEAD



});

app.delete('/offers/:idSuppr', function(req, res){
   // console.log('on delete l\'offre '+ req.params.idSuppr +' après verifications');

   const id = req.params.idSuppr;
    //console.log(id);
    //console.log(result);
    /*res.status(200).send(result);
    const result = Joi.validate(req.body, schemaPut);*/

   // if (!id) {
        //console.log(result);
        deleteOffer.deleteOffer(id)
            .then((value)=> res.status(200).send('L\'offre a bien été supprimée'))
            .catch(err=> console.log('err', err.message));
        //res.status(200).send(result.value);

   // } else {

        //console.log('id inconnu');
      //  res.status(400).send('id inconnu');
   // };

});

=======
});

app.delete('/offers/:idSuppr', function(req, res){
   
    const id = req.params.idSuppr;

    deleteOffer.deleteOffer(id)
        .then((value)=> res.status(200).send('L\'offre a bien été supprimée'))
        .catch(err=> console.log('err', err.message));
 
});


//companies

app.get('/companies', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    allCompanies.getAllCompanies()
        .then((value)=> res.send(value))
        .catch(err=> console.log('err', err.message));
});


app.get('/companies/:id', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    let id =  req.params.id;
    
    companiesById.getCompanyById(id)
        .then((value)=> res.send(value))
        .catch(err=> console.log('err', err.message));
});


app.post('/companies', function(req, res){
    
    const schemaPut = Joi.object({
        name : Joi.string().max(20).min(3).required(),
        email : Joi.string().required(),
        tel : Joi.string().min(10).max(10),
        siret : Joi.string().min(14).max(14)

    });

    const result = schemaPut.validate(req.body);
    console.log(result);

    if (!result.error) {
        //console.log(result);
        newCompany.createCompanie(result)
            .then((value)=> res.send(value))
            .catch(err=> console.log('err', err.message));
        //res.status(200).send(result.value);

    } else {

        console.log(result.error);
        res.status(400).send(result.error.details);
    };
    

});

app.put('/companies/:idPut', function(req, res){
    
    const schemaPut = Joi.object({
        name : Joi.string().max(20).min(3).required(),
        email : Joi.string().required(),
        tel : Joi.string().min(10).max(10),
        siret : Joi.string().min(14).max(14)

    });

    const result = schemaPut.validate(req.body);
    const id = req.params.idPut;
  

    if (!result.error) {
        updateCompany.updateCompany(id, result)
            .then((value)=> res.send(value))
            .catch(err=> console.log('err', err.message));

    } else {

    console.log(result.error);
        res.status(400).send(result.error.details);
    };

});

app.delete('/companies/:idSuppr', function(req, res){
   
    const id = req.params.idSuppr;

    removeCompany.deleteCompany(id)
        .then((value)=> res.status(200).send('La companie a bien été supprimée'))
        .catch(err=> console.log('err', err.message));
 
});
>>>>>>> develop

app.listen(8080, ()=>{
    console.log('Listenning on port 8080');
});
