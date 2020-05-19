"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mysql_1 = __importDefault(require("../mysql/mysql"));
var server_1 = __importDefault(require("../server/server"));
var persona_queries_1 = __importDefault(require("../mysql/queries/persona.queries"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var persona_1 = __importDefault(require("../classes/persona"));
var options = server_1.default.getCorsOptions();
var router = express_1.Router();
router.use(cors_1.default(options));
router.use(body_parser_1.default.json());
router.use(body_parser_1.default.urlencoded({ extended: true }));
router.get('/personas/buscar/:id', function (req, res) {
    try {
        var respuesta_1;
        var id = req.params.id;
        var QUERY = persona_queries_1.default.getPersona(id);
        mysql_1.default.ejecutarQuery(QUERY, function (err, resultado) {
            if (err)
                return res.status(400).json({ ok: false, error: err });
            respuesta_1 = persona_1.default.convertirParaRespuesta(resultado[0]);
            return res.json({ ok: true, personas: respuesta_1 });
        });
    }
    catch (_a) {
        return res.status(500).json({ ok: false, error: 'INTERNAL_SERVER_ERROR' });
    }
});
router.get('/persona/listar', function (req, res) {
    try {
        var respuesta_2 = [];
        var QUERY = persona_queries_1.default.getListarPersonas();
        mysql_1.default.ejecutarQuery(QUERY, function (err, resultado) {
            if (err)
                return res.status(400).json({ ok: false, error: err });
            resultado.forEach(function (objeto) {
                var persona = persona_1.default.convertirParaRespuesta(objeto);
                respuesta_2.push(persona);
            });
            return res.json({ ok: true, persona: respuesta_2 });
        });
    }
    catch (err) {
        return res.status(500).json({ ok: false, error: 'INTERNAL_SERVER_ERROR' });
    }
});
router.get('/persona/buscar/:id&:clave', function (req, res) {
    try {
        var respuesta_3;
        var id = req.params.id;
        var clave = req.params.clave;
        var QUERY = persona_queries_1.default.getUsuario(id, clave);
        mysql_1.default.ejecutarQuery(QUERY, function (err, resultado) {
            if (err)
                return res.status(400).json({ ok: false, error: err });
            respuesta_3 = persona_1.default.convertirParaRespuesta(resultado[0]);
            return res.json({ ok: true, usuario: respuesta_3, token: true });
        });
    }
    catch (_a) {
        return res.status(500).json({ ok: false, error: 'INTERNAL_SERVER_ERROR', token: false });
    }
});
router.get('/personas/listar/organizadores', function (req, res) {
    try {
        var respuesta_4 = [];
        var QUERY = persona_queries_1.default.getListarOganizador();
        mysql_1.default.ejecutarQuery(QUERY, function (err, resultado) {
            if (err)
                return res.status(400).json({ ok: false, error: err });
            resultado.forEach(function (objeto) {
                var persona = persona_1.default.convertirParaRespuesta(objeto);
                respuesta_4.push(persona);
            });
            return res.json({ ok: true, persona: respuesta_4 });
        });
    }
    catch (err) {
        return res.status(500).json({ ok: false, error: 'INTERNAL_SERVER_ERROR' });
    }
});
router.post('/personas/guardar', function (req, res) {
    try {
        var persona = persona_1.default.crearDeUnaPeticion(req.body);
        var respuesta = void 0;
        var QUERY = persona_queries_1.default.savePersona(persona);
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
