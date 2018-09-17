module.exports = function(app) {
    app.get('/payments', function (req, res) {
        res.send('Ok');
    });

    app.post('/payments/payment', function(req, res){
        var pay = req.body;
        console.log('Processing a request to a new payment');

        pay.status = 'CREATED';
        pay.date = new Date;

        var connection = app.persist.dbconnection();
        var paymentDAO = app.persist.paymentDAO(connection);

        paymentDAO.save(pay, function(err, result){
            console.log(err);
            res.json(pay)
        })
    });
}
