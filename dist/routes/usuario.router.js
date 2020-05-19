"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mysql_1 = __importDefault(require("../mysql/mysql"));
var server_1 = __importDefault(require("../server/server"));
var usuario_queries_1 = __importDefault(require("../mysql/queries/usuario.queries"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var usuario_1 = __importDefault(require("../classes/usuario"));
var options = server_1.default.getCorsOptions();
var router = express_1.Router();
router.use(cors_1.default(options));
router.use(body_parser_1.default.json());
router.use(body_parser_1.default.urlencoded({ extended: true }));
router.get('/usuario/buscar/:id&:clave', function (req, res) {
    try {
        var respuesta_1;
        var id = req.params.id;
        var clave = req.params.clave;
        var QUERY = usuario_queries_1.default.getUsuario(id, clave);
        mysql_1.default.ejecutarQuery(QUERY, function (err, resultado) {
            if (err)
                return res.status(400).json({ ok: false, error: err });
            respuesta_1 = usuario_1.default.convertirParaRespuesta(resultado[0]);
            return res.json({ ok: true, usuario: respuesta_1 });
        });
    }
    catch (_a) {
        return res.status(500).json({ ok: false, error: 'INTERNAL_SERVER_ERROR' });
    }
});
exports.default = router;
