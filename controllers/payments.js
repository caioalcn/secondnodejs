module.exports = function (app) {
    app.get('/payments', function (req, res) {
        res.send('Paid again');
    });
}