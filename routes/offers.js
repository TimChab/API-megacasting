
const express = require('express');
const allOffers = require('../bdd/getAllOffers');
const offerById = require('../bdd/getOfferById');
const Joi = require('@hapi/joi');
//let route = express.Router();

let app = new express();
app.use(express.json());

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
    
    console.log('on put la l\'offre '+ req.params.idPut +' après verifications');
    
});

app.delete('/offers/:idSuppr', function(req, resp){
    console.log('on delete l\'offre '+ req.params.idSuppr +' après verifications');
});


    
module.offers = route;