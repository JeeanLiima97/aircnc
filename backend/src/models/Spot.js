const mongoose = require ('mongoose');

const SpotSchema = new mongoose.Schema({
    thunbnail: String,
    conpany: String,
    price: Number,
    techs: [String],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    toJSON:{
        virtuals: true,
    }
});

SpotSchema.virtual('thunbnail_url').get(function(){
    return `http://localhost:3333/files/${this.thunbnail}`
})

module.exports = mongoose.model("Spot", SpotSchema);