const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Name is necesary'],
    },
    age:{
        type: String,
        required: [true, 'Age is necesary'],
    },
    userName:{
        type: String,
        unique: true,
        required: [true, 'Username is necesary'],
    },
    password:{
        type: String,
        required: [true, 'Username is necesary'],
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

