const mongoose = require('mongoose');



const dbConnection = async () => {

    try {
        
        await mongoose.connect( process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            
        } );
        console.log('DB is Online')

    } catch (error) {
        console.log(error);
        throw new Error('Cant inicializate DB');
    };

};




module.exports = {
    dbConnection
}
