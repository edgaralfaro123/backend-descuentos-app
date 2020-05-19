"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mysql_1 = __importDefault(require("../mysql/mysql"));
var server_1 = __importDefault(require("../server/server"));
var evento_1 = __importDefault(require("../classes/evento"));
var lugar_1 = __importDefault(require("../classes/lugar"));
var eventos_queries_1 = __importDefault(require("../mysql/queries/eventos.queries"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var qr_image_1 = __importDefault(require("qr-image"));
var options = server_1.default.getCorsOptions();
var router = express_1.Router();
router.use(cors_1.default(options));
router.use(body_parser_1.default.json());
router.use(body_parser_1.default.urlencoded({ extended: true }));
router.get('/eventos/obtener/:id', function (req, res) {
    try {
        var evento_2;
        var lugar_2;
        var id = req.params.id;
        var QUERY = eventos_queries_1.default.getEvento(id);
        mysql_1.default.ejecutarQuery(QUERY, function (err, resultado) {
            if (err)
                return res.status(400).json({ ok: false, error: err });
            evento_2 = evento_1.default.convertirParaRespuesta(resultado[0]);
            lugar_2 = lugar_1.default.convertirParaRespuesta(resultado[0]);
            evento_2.infoLugar = lugar_2;
            return res.json({ ok: true, eventos: evento_2 });
        });
    }
    catch (_a) {
        return res.status(500).json({ ok: false, error: 'INTERNAL_SERVER_ERROR' });
    }
});
router.get('/eventos/listar', function (req, res) {
    try {
        var respuesta_1 = [];
        var lugar_3;
        var QUERY = eventos_queries_1.default.getListarTodos();
        mysql_1.default.ejecutarQuery(QUERY, function (err, resultado) {
            if (err)
                return res.status(400).json({ ok: false, error: err });
            resultado.forEach(function (objeto) {
                var evento = evento_1.default.convertirParaRespuesta(objeto);
                lugar_3 = lugar_1.default.convertirParaRespuesta(objeto);
                evento.infoLugar = lugar_3;
                respuesta_1.push(evento);
            });
            return res.json({ ok: true, eventos: respuesta_1 });
        });
    }
    catch (err) {
        return res.status(500).json({ ok: false, error: 'INTERNAL_SERVER_ERROR' });
    }
});
router.get('/eventos/activos', function (req, res) {
    try {
        var respuesta_2 = [];
        var lugar_4;
        var QUERY = eventos_queries_1.default.getListarActivos();
        mysql_1.default.ejecutarQuery(QUERY, function (err, resultado) {
            if (err)
                return res.status(400).json({ ok: false, error: err });
            resultado.forEach(function (objeto) {
                var evento = evento_1.default.convertirParaRespuesta(objeto);
                lugar_4 = lugar_1.default.convertirParaRespuesta(objeto);
                evento.infoLugar = lugar_4;
                respuesta_2.push(evento);
            });
            return res.json({ ok: true, eventos: respuesta_2 });
        });
    }
    catch (err) {
        return res.status(500).json({ ok: false, error: 'INTERNAL_SERVER_ERROR' });
    }
});
router.get('/eventos/validadas', function (req, res) {
    try {
        var respuesta_3 = [];
        var lugar_5;
        var QUERY = eventos_queries_1.default.getListarValidos2();
        mysql_1.default.ejecutarQuery(QUERY, function (err, resultado) {
            if (err)
                return res.status(400).json({ ok: false, error: err });
            resultado.forEach(function (objeto) {
                var evento = evento_1.default.convertirParaRespuesta(objeto);
                lugar_5 = lugar_1.default.convertirParaRespuesta(objeto);
                evento.infoLugar = lugar_5;
                respuesta_3.push(evento);
            });
            return res.json({ ok: true, eventos: respuesta_3 });
        });
    }
    catch (err) {
        return res.status(500).json({ ok: false, error: 'INTERNAL_SERVER_ERROR' });
    }
});
router.get('/eventos/validadas2', function (req, res) {
    try {
        var respuesta_4 = [];
        var lugar_6;
        var QUERY = eventos_queries_1.default.getListarValidos();
        mysql_1.default.ejecutarQuery(QUERY, function (err, resultado) {
            if (err)
                return res.status(400).json({ ok: false, error: err });
            resultado.forEach(function (objeto) {
                var evento = evento_1.default.convertirParaRespuesta(objeto);
                lugar_6 = lugar_1.default.convertirParaRespuesta(objeto);
                evento.infoLugar = lugar_6;
                respuesta_4.push(evento);
            });
            return res.json(respuesta_4);
        });
    }
    catch (err) {
        return res.status(500).json({ ok: false, error: 'INTERNAL_SERVER_ERROR' });
    }
});
router.post('/eventos/guardar', function (req, res) {
    try {
        console.log(req.body);
        var evento = evento_1.default.crearDeUnaPeticion(req.body);
        var respuesta = void 0;
        var QUERY = eventos_queries_1.default.saveEvento(evento);
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
router.put('/eventos/actualizar', function (req, res) {
    try {
        var evento = evento_1.default.crearDeUnaPeticion(req.body);
        var QUERY = eventos_queries_1.default.updateEvento(evento);
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
router.delete('/eventos/cerrar-evento/:id', function (req, res) {
    try {
        var id = req.params.id;
        var QUERY = eventos_queries_1.default.deleteEvento(id);
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
router.get('/personas/obtenerQrpersona/:id', function (req, res) {
    var query = "SELECT *,8 as codevento FROM personas WHERE pers_documento = " + req.params.id;
    var codigoQR;
    mysql_1.default.ejecutarQuery(query, function (err, resultado) {
        if (err)
            return res.status(400).json({ ok: false, error: err });
        console.log(JSON.stringify(resultado));
        codigoQR = qr_image_1.default.imageSync(JSON.stringify({
            cedula: resultado[0].pers_documento,
            nombre: resultado[0].pers_primernombre,
            apellido: resultado[0].pers_primerapellido,
            codevento: resultado[0].codevento
        }), { type: 'svg' });
        return res.json({ ok: true, qr: codigoQR, persona: {
                cedula: resultado[0].pers_documento,
                nombre: resultado[0].pers_primernombre,
                apellido: resultado[0].pers_primerapellido,
                codevento: resultado[0].codevento
            } });
    });
});
/*
    let query = `SELECT p.pers_documento AS pers_documento,p.pers_primernombre AS pers_primernombre,
                 p.pers_primerapellido AS pers_primerapellido,
                 eu.evus_evento AS  evus_evento,e.even_nombre AS even_nombre
                 FROM evento_usuario eu
                LEFT JOIN eventos e ON e.even_codigo=eu.evus_evento
                LEFT JOIN personas p ON p.pers_documento=eu.evus_usuario
                WHERE evus_evento=${req.params.evento} AND evus_usuario= ${req.params.id}`;

*/
router.get('/personas/obtenerQr/:evento&:id', function (req, res) {
    var query = "SELECT p.pers_documento AS pers_documento,p.pers_primernombre AS pers_primernombre,\n                 p.pers_primerapellido AS pers_primerapellido,\n                eu.evus_evento AS  evus_evento,e.even_nombre AS even_nombre,e.even_gratis as even_gratis,\n                cpco_documento,cpco_beneficiario,sum(c.cpco_valor) as cpco_valor, if(e.even_gratis=1 and eu.evus_estado='G','true',if(sum(c.cpco_valor and eu.evus_estado='G')>0,'true','false')) as generarqr\n                FROM evento_usuario eu\n                LEFT JOIN eventos e ON e.even_codigo=eu.evus_evento\n                LEFT JOIN personas p ON p.pers_documento=eu.evus_usuario\n                left join cuentas_por_cobrar c on c.cpco_documento=" + req.params.evento + " and c.cpco_beneficiario=" + req.params.id + "\n                WHERE evus_evento=" + req.params.evento + " AND evus_usuario=" + req.params.id + "\n                group by cpco_documento,cpco_beneficiario\n    ";
    var codigoQR;
    mysql_1.default.ejecutarQuery(query, function (err, resultado) {
        if (err)
            return res.status(400).json({ ok: false, error: err });
        console.log(JSON.stringify(resultado));
        codigoQR = qr_image_1.default.imageSync(JSON.stringify({
            cedula: resultado[0].pers_documento,
            nombre: resultado[0].pers_primernombre,
            apellido: resultado[0].pers_primerapellido,
            codevento: resultado[0].evus_evento,
            nomevento: resultado[0].even_nombre,
            generarqr: resultado[0].generarqr
        }), { type: 'svg' });
        return res.json({ ok: true, qr: codigoQR, persona: {
                cedula: resultado[0].pers_documento,
                nombre: resultado[0].pers_primernombre,
                apellido: resultado[0].pers_primerapellido,
                codevento: resultado[0].evus_evento,
                nomevento: resultado[0].even_nombre,
                generarqr: resultado[0].generarqr
            } });
    });
});
exports.default = router;
