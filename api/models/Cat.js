const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeoSchema = new Schema({
    type:{
        type: String,
        default:"Point"
    },
    coordinates:{
        type:[Number],
        index:"2dsphere"
    }
})

const CatSchema = new Schema({
    name:{
        type:String,
        required:[true,'please enter a name']
    },
    breed:{
        type:String,
        required:[true,'please enter a breed']
    },
    available:{
        type:Boolean,
        default:false
    },
    geometry: GeoSchema
})



const Cat = mongoose.model('cat',CatSchema);

module.exports = Cat

