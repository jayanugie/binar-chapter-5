const home = (req, res) => {
    return res.render('index.ejs');
}

const game = (req, res) => {
    return res.render('game.ejs');
}

module.exports = {
    home, game
}