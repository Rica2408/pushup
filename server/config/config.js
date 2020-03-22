// ============================
// Puerto
// ============================

process.env.PORT = process.env.PORT || 3003;

// =============================
// Enlace
// =============================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =============================
// Base de datos
// =============================

let urlDB;

if ( process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/exercise'
}
else{
    urlDB =  process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// =============================
// token
// =============================

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// =============================
// SEED
// =============================

process.env.SEED = process.env.SEED || 'seed';

//Google Cliente Id

process.env.CLIENT_ID = process.env.CLIENT_ID || '676253964304-2ob1545ab55di8abaiahg0c6tlehnah8.apps.googleusercontent.com';
