function paymentDAO(connection) {
    this._connection = connection;
}

paymentDAO.prototype.save = function(payment, callback){
    this._connection.query('INSERT INTO payments SET ?', payment, callback);
}

paymentDAO.prototype.list  = function(callback) {
    this._connection.query('select * from payments', callback);
}

paymentDAO.prototype.searchByID = function(id, callback) {
    this._connection.query('select * from payments where id = ?', [id], callback);
}

module.exports = function() {
    return paymentDAO;
}
