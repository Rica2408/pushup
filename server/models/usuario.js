const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Name is necesary'],
    },
    email:{
        type: String,
        required: [true, 'Mail is necesary'],
    },
    age:{
        type: String,
        required: false,
    },
    userName:{
        type: String,
        unique: true,
        required: false,
    },
    password:{
        type: String,
        required: [true, 'Username is necesary'],
    },
    img:{
        type: String,
        required: false,
    },
    weight:{
        type: String,
        required: false,
    },
    heigth:{
        type: String,
        required: false,
    },
});

usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}

usuarioSchema.plugin( uniqueValidator, { message: '{PATH} debe de ser unico'})

module.exports = mongoose.model('Usuario', usuarioSchema);

