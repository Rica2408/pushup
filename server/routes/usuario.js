const express = require('express'); 
const Usuario = require('../models/usuario');
const app = express();
const bcrypt = require('bcrypt');

app.get('/usuario', function (req, res) {
    
    let desde = req.query.desde || 0;
    let limite = req.query.limite || 5;
    desde = Number(desde);
    limite = Number(limite);
    //llamar parametros opcionares ?variable=valor
    //req.query.variable
    Usuario.find({},'name age')
        .skip(desde)
        .limit(limite) //limitar datos
        .exec((err, usuarios) =>{
            if(err) {
                return res.status(400).json({
                    ok:false,
                    err
                })
            }

            res.json({
                ok:true,
                usuarios
            })
        })
});
 
app.post('/usuario', function (req, res) {
    let body = req.body;

    let usuario = new Usuario({
        name: body.name,
        age: body.age,
        userName: body.userName,
        password: bcrypt.hashSync(body.password,10),
    });

    usuario.save((err, usuarioDB) => {
        if(err) {
            return res.status(400).json({
                ok:false,
                err
            })
        }

        res.json({
            ok:true,
            usuario: usuarioDB,
        });
    });
});

//--------------------------------
//  Eliminar por completo el campo
//--------------------------------

// app.delete('/usuario/:id', function (req, res) {
//     let id = req.params.id;
//     Usuario.findByIdAndRemove(id,(err, userDelete)=>{
//         if(err) {
//             return res.json({
//                 ok: false,
//                 err
//             });
//         }
//         if(!userDelete){
//             return res.status(400).json({
//                 ok: false,
//                 err:{
//                     message:'Usuario no existe'
//                 }
//             });
//         }
//         res.json({
//             ok: true,
//             usuario: userDelete
//         });
//     });

// });

//---------------------
// CAMBIAR UN ESTADO
//---------------------
app.delete('/usuario/:id', function (req, res) {
    let id = req.params.id;

    let changeAge = {
        age: '21'
    }
    Usuario.findByIdAndUpdate(id, changeAge, {new:true},(err, userDelete)=>{
        if(err) {
            return res.json({
                ok: false,
                err
            });
        }
        if(!userDelete){
            return res.status(400).json({
                ok: false,
                err:{
                    message:'Usuario no existe'
                }
            });
        }
        res.json({
            ok: true,
            usuario: userDelete
        });
    });

});
app.put('/usuario/:id', function (req, res) {

    let id = req.params.id;
    let body = req.body;

    Usuario.findByIdAndUpdate(id, body, {new:true},(err, usuarioDB) =>{
        if(err) {
            return res.json({
                ok: false,
                err
            });
        }

        res.json({
            ok:true,
            usuario:usuarioDB,
        })




    });


});

module.exports = app;