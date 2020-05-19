"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mysql_1 = __importDefault(require("../mysql/mysql"));
var server_1 = __importDefault(require("../server/server"));
var cuentasporcobrar_queries_1 = __importDefault(require("../mysql/queries/cuentasporcobrar.queries"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var cuentasporcobrar_1 = __importDefault(require("../classes/cuentasporcobrar"));
var options = server_1.default.getCorsOptions();
var router = express_1.Router();
router.use(cors_1.default(options));
router.use(body_parser_1.default.json());
router.use(body_parser_1.default.urlencoded({ extended: true }));
router.get('/cuentasporcobrar/extractoa/:beneficiario', function (req, res) {
    try {
        var respuesta_1;
        var beneficiario = req.params.beneficiario;
        var QUERY = cuentasporcobrar_queries_1.default.getListarExtractoCliente(beneficiario);
        mysql_1.default.ejecutarQuery(QUERY, function (err, resultado) {
            if (err)
                return res.status(400).json({ ok: false, error: err });
            respuesta_1 = cuentasporcobrar_1.default.convertirParaRespuesta(resultado[0]);
            return res.json({ ok: true, cuentasporcobrar: respuesta_1 });
        });
    }
    catch (_a) {
        return res.status(500).json({ ok: false, error: 'INTERNAL_SERVER_ERROR' });
    }
});
router.get('/cuentasporcobrar/saldo', function (req, res) {
    try {
        var respuesta_2 = [];
        var QUERY = cuentasporcobrar_queries_1.default.getListarSaldoCliente();
        mysql_1.default.ejecutarQuery(QUERY, function (err, resultado) {
            if (err)
                return res.status(400).json({ ok: false, error: err });
            resultado.forEach(function (objeto) {
                var cuentasporcobrar = cuentasporcobrar_1.default.convertirParaRespuesta(objeto);
                respuesta_2.push(cuentasporcobrar);
            });
            return res.json({ ok: true, cuentasporcobrar: respuesta_2 });
        });
    }
    catch (err) {
        return res.status(500).json({ ok: false, error: 'INTERNAL_SERVER_ERROR' });
    }
});
router.get('/cuentasporcobrar/extractoall', function (req, res) {
    try {
        var respuesta_3 = [];
        var QUERY = cuentasporcobrar_queries_1.default.getListarExtractoClienteAll();
        mysql_1.default.ejecutarQuery(QUERY, function (err, resultado) {
            if (err)
                return res.status(400).json({ ok: false, error: err });
            resultado.forEach(function (objeto) {
                var cuentasporcobrar = cuentasporcobrar_1.default.convertirParaRespuesta(objeto);
                respuesta_3.push(cuentasporcobrar);
            });
            return res.json({ ok: true, cuentasporcobrar: respuesta_3 });
        });
    }
    catch (err) {
        return res.status(500).json({ ok: false, error: 'INTERNAL_SERVER_ERROR' });
    }
});
exports.default = router;
