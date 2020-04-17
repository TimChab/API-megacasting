const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dev-megacasting', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connection réussi à la base de donnée dev-megacasting'))
    .catch(err => console.log('La connection a echouée', err));



module.exports = mongoose;

//objet : Cour, ayant l'architecture du schema : courseSchema
/*const Course = mongoose.model('Course', courseSchema);

async function createCourse() {

    // instance de l'objet Course, nomé 'Node.js Course', répondant aux critères du Schema
    const course = new Course({
        name : 'Angular course',
        author : 'Mosh',
        tags : ['angular', 'javascript', 'online course'],
        isPublish : true
        
    });
    
    const result = await course.save();
    console.log(result);

};
*/

