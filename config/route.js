let express = require('express');
const { about, blogSingle, blog, contact, portfolioDetails, portfolio, pricing, services, team, testimonials, home } = require('../controller/frontController');
let router = express.Router();


router.get('/', (req, res) => home(req, res));
router.get('/index', (req, res) => home(req, res));
router.get('/home', (req, res) => home(req, res));
router.get('/about', (req, res) => about(req, res));
router.get('/blog-single', (req, res) => blogSingle(req, res));
router.get('/blog', (req, res) => blog(req, res));
router.get('/contact', (req, res) => contact(req, res));
router.get('/portfolio-details', (req, res) => portfolioDetails(req, res));
router.get('/portfolio', (req, res) => portfolio(req, res));
router.get('/pricing', (req, res) => pricing(req, res));
router.get('/services', (req, res) => services(req, res));
router.get('/team', (req, res) => team(req, res));
router.get('/testimonials', (req, res) => testimonials(req, res));


module.exports = router;