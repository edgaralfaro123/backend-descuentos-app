"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mysql_1 = __importDefault(require("../mysql/mysql"));
var server_1 = __importDefault(require("../server/server"));
var eventousuario_1 = __importDefault(require("../classes/eventousuario"));
var eventousuario_queries_1 = __importDefault(require("../mysql/queries/eventousuario.queries"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var options = server_1.default.getCorsOptions();
var router = express_1.Router();
router.use(cors_1.default(options));
router.use(body_parser_1.default.json());
router.use(body_parser_1.default.urlencoded({ extended: true }));
router.post('/eventousuario/guardar', function (req, res) {
    try {
        console.log(req.body);
        var eventousuario = eventousuario_1.default.crearDeUnaPeticion(req.body);
        var respuesta = void 0;
        var QUERY = eventousuario_queries_1.default.saveEventousuario(eventousuario);
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
router.get('/eventousuario/agregarusuarioevento/:evento/:id', function (req, res) {
    try {
        var id = req.params.id;
        var evento = req.params.evento;
        var QUERY = eventousuario_queries_1.default.aceptarUsuarioEvento(evento, id);
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
router.get('/eventousuario/listarAprobados/', function (req, res) {
    try {
        var QUERY = eventousuario_queries_1.default.listarUsuariosAprobados();
        var respuesta_1 = [];
        mysql_1.default.ejecutarQuery(QUERY, function (err, resultado, fields) {
            if (err)
                return res.status(400).json({ ok: false, error: err });
            resultado.forEach(function (objeto) {
                var eventousuario = eventousuario_1.default.convertirParaRespuesta(objeto);
                respuesta_1.push(eventousuario);
            });
            return res.json({ ok: true, estado: respuesta_1 });
        });
    }
    catch (err) {
        return res.status(500).json({ ok: false, error: 'INTERNAL_SERVER_ERROR' });
    }
});
router.get('/eventousuario/pendientes', function (req, res) {
    try {
        var respuesta_2 = [];
        var QUERY = eventousuario_queries_1.default.getPendienteAutorizar();
        mysql_1.default.ejecutarQuery(QUERY, function (err, resultado) {
            if (err)
                return res.status(400).json({ ok: false, error: err });
            resultado.forEach(function (objeto) {
                var eventousuario = eventousuario_1.default.convertirParaRespuesta(objeto);
                respuesta_2.push(eventousuario);
            });
            return res.json({ ok: true, eventousuario: respuesta_2 });
        });
    }
    catch (err) {
        return res.status(500).json({ ok: false, error: 'INTERNAL_SERVER_ERROR' });
    }
});
//guardar
exports.default = router;
