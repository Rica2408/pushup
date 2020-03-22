const jwt = require('jsonwebtoken');


//Verificacion de token

let verificaToken = (req, res, next)=> {

    let token = req.get('token');
    jwt.verify(token, process.env.SEED, (err, decode) => {
        if(err){
            return res.status(401).json({
                ok: false,
                err
            });
        }

        req.usuario = decode.usuario;
        console.log(req.usuario)
        next();
    }); 
};

module.exports = {
    verificaToken
}