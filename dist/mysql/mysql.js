"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var MySQL = /** @class */ (function () {
    function MySQL() {
        this.conectado = false;
        console.log('Conectando a la base de datos');
        this.cnn = this.crearConexion();
        this.conectarDB();
    }
    MySQL.prototype.crearConexion = function () {
        return mysql.createConnection({
            host: '190.85.128.146',
            user: 'root',
            password: 'RMW-3',
            database: 'valentinadb'
        });
    };
    Object.defineProperty(MySQL, "instance", {
        /*private crearConexion():mysql.Connection{
            return mysql.createConnection({
                    host: 'geacua.crwtnbm3au60.us-east-2.rds.amazonaws.com',
                    user: 'AdminSQL',
                    password: '5i4zyp3f',
                    database: 'eventos_cua'
            });
        }*/
        /*private crearConexion():mysql.Connection{
            return mysql.createConnection({
                    host: 'mysql7003.site4now.net',
                    user: 'a46c0f_geacua',
                    password: 'Combomix1',
                    database: 'db_a46c0f_geacua'
            });
        }*/
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: true,
        configurable: true
    });
    MySQL.ejecutarQuery = function (query, callback) {
        this.instance.cnn.query(query, function (err, results, fields) {
            if (err) {
                console.log("QUERY ERROR: " + err + "\"");
                return callback(err);
            }
            if (results.length === 0)
                callback("El registro asociado no existe");
            else
                callback(null, results, fields);
        });
    };
    MySQL.prototype.conectarDB = function () {
        var _this = this;
        this.cnn.on('error', function (err) {
            console.log("CONNECTION ERROR: " + err.code);
            setTimeout(function () {
                _this.cnn.destroy();
                _this.cnn = _this.crearConexion();
                _this.conectado = false;
                _this.conectarDB();
            }, 3000);
        });
        this.cnn.connect(function (err) {
            if (err) {
                console.log("CONNECTION ERROR: " + err.code);
                return _this.conectarDB();
            }
            else {
                _this.conectado = true;
                console.log('Conectado a la base de datos');
            }
        });
    };
    return MySQL;
}());
exports.default = MySQL;
