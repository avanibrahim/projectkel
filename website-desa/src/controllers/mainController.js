class MainController {
    static async renderHome(req, res) {
        res.render('index');
    }

    static async renderAbout(req, res) {
        res.render('about');
    }

    static async renderContact(req, res) {
        res.render('contact');
    }
}

module.exports = MainController;