require('dotenv').config();
const express = require('express');
const router = express.Router();
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const appName = process.env.APP_NAME;

/**
 * Put Routes that Express should handle here
 */

 //router.get('/some-route', (req, res, next) => {});


/**
 * Let Vue handle the rest of the routes except for /api routes
 */
router.get(/^\/(?!api).*/, csrfProtection, (req, res, next) => {
  res.render('app', { title: appName , csrf_token: req.csrfToken()});
});

module.exports = router;
