
const home = async (req, res) => {
    res.render('index', { title: "home" });
}

const about = async (req, res) => {
    res.render('about', { title: "about" });
}

const blogSingle = async (req, res) => {
    res.render('blog-single', { title: "blog-single" });
}

const blog = async (req, res) => {
    res.render('blog', { title: "blog" });
}

const contact = async (req, res) => {
    res.render('contact', { title: "contact" });
}

const portfolioDetails = async (req, res) => {
    res.render('portfolio-details', { title: "portfolio-details" });
}

const portfolio = async (req, res) => {
    res.render('portfolio', { title: "portfolio" });
}

const pricing = async (req, res) => {
    res.render('pricing', { title: "pricing" });
}

const services = async (req, res) => {
    res.render('services', { title: "services" });
}

const team = async (req, res) => {
    res.render('team', { title: "team" });
}

const testimonials = async (req, res) => {
    res.render('testimonials', { title: "testimonials" });
}


module.exports = {
    home,
    about,
    blogSingle,
    blog,
    contact,
    portfolioDetails,
    portfolio,
    pricing,
    services,
    team,
    testimonials,
}