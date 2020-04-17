const express = require('express');
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
    //console.log('on post la l\'offre '+ req.params.idPost +'après verifications');

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

    //console.log(req.body);
        //const result = Joi.ValidationError
    // console.log(result.value);
    const result = schemaPut.validate(req.body);
    console.log(result);
    /*res.status(200).send(result);
    const result = Joi.validate(req.body, schemaPut);*/

    if (!result.error) {
        //console.log(result);
        newOffer.createOffer(result)
            .then((value)=> res.send(value))
            .catch(err=> console.log('err', err.message));
        //res.status(200).send(result.value);

    } else {

    console.log(result.error);
        res.status(400).send(result.error.details);
    };
    

});
//5e920d9180bf2fdad1b544f1

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
    
    //console.log('on put la l\'offre '+ req.params.idPut +' après verifications');
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

    } else {

    console.log(result.error);
        res.status(400).send(result.error.details);
    };




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


app.listen(8080, ()=>{
    console.log('Listenning on port 8080');
});
