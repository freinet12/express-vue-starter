'use strict';
const express = require('express');
const welcomeCtrl = require('../app/controllers/WelcomeController');

module.exports = ( function() {
    const router = express.Router(); 
    
    // get welcome message
    router.get('/', welcomeCtrl.index);
   

    return router;
})();



