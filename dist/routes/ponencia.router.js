"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mysql_1 = __importDefault(require("../mysql/mysql"));
var server_1 = __importDefault(require("../server/server"));
var ponencia_1 = __importDefault(require("../classes/ponencia"));
var ponencia_queries_1 = __importDefault(require("../mysql/queries/ponencia.queries"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var options = server_1.default.getCorsOptions();
var router = express_1.Router();
router.use(cors_1.default(options));
router.use(body_parser_1.default.json());
router.use(body_parser_1.default.urlencoded({ extended: true }));
router.get('/ponencia/listar', function (req, res) {
    try {
        var respuesta_1 = [];
        var QUERY = ponencia_queries_1.default.getListar();
        mysql_1.default.ejecutarQuery(QUERY, function (err, resultado) {
            if (err)
                return res.status(400).json({ ok: false, error: err });
            resultado.forEach(function (objeto) {
                var ponencia = ponencia_1.default.convertirParaRespuesta(objeto);
                respuesta_1.push(ponencia);
            });
            return res.json({ ok: true, ponencia: respuesta_1 });
        });
    }
    catch (err) {
        return res.status(500).json({ ok: false, error: 'INTERNAL_SERVER_ERROR' });
    }
});
router.post('/ponencia/guardar', function (req, res) {
    try {
        console.log(req.body);
        var ponencia = ponencia_1.default.crearDeUnaPeticion(req.body);
        var respuesta = void 0;
        var QUERY = ponencia_queries_1.default.savePonencia(ponencia);
        console.log(QUERY);
        mysql_1.default.ejecutarQuery(QUERY, function (err, resultado, fields) {
            if (err)
                return res.status(400).json({ ok: false, error: err });
            return res.json({ ok: true, estado: resultado });
        });
    }
    catch (err) {
        return res.status(500).json({ ok: false, error: 'INTERNAL_SERVER_ERROR' });
    }
});
exports.default = router;
