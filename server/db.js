const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/poker'

mongoose.connect(DB_URL, {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err) => {
    if(!err) console.log('Connected to DB')
    else {
        console.log('err' + JSON.stringify(err));
    }
})

module.exports = mongoose;