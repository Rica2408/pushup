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

// if ( process.env.NODE_ENV === 'dev'){
//     urlDB = 'mongodb://localhost:27017/exercise'
// }
// else{
    urlDB =  'mongodb+srv://richie2408:or2ZUWf5a0ZzLVCm@cluster0-du9tx.mongodb.net/exercise?retryWrites=true&w=majority';
//}

process.env.URLDB = urlDB;
