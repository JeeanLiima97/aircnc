const express = require('express');
const SessionController = require('./controllers/SessionController');
const SpotsController = require('./controllers/SpotsController');
const dashboardController = require('./controllers/dashboardController');
const BookingController = require('./controllers/bookingController');
const multer = require('multer');
const uploadConfig = require ('./config/upload')

const upload = multer(uploadConfig);
const routes = express.Router();


routes.post('/sessions', SessionController.store);

routes.post('/spots', upload.single('thunbnail') ,SpotsController.store);
routes.get('/spots', SpotsController.index);
routes.get('/dashboard', dashboardController.show);
routes.post('/spots/:spot_id/booking', BookingController.store);


module.exports = routes;