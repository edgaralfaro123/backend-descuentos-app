"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sqlstring_1 = __importDefault(require("sqlstring"));
var Query = /** @class */ (function () {
    function Query() {
    }
    ;
    Query.getEvento = function (id) {
        var QUERY = "SELECT e.*, l.*\n                            FROM eventos e\n                            LEFT JOIN lugares l\n                            ON e.even_lugar = l.lugr_id\n                            WHERE e.even_codigo = " + sqlstring_1.default.escape(id) + ";";
        return QUERY;
    };
    // Si te actualizó
    Query.getPendienteAutorizar = function () {
        var QUERY = "SELECT eu.*,concat(p.pers_primernombre,' ',p.pers_primerapellido) as pers_primernombre,\n                                        p.pers_telefono, p.pers_correo, e.even_descripcion\n                              FROM evento_usuario eu\n                              LEFT JOIN eventos AS e on eu.evus_evento=e.even_codigo\n                              LEFT JOIN personas AS p ON p.pers_documento=eu.evus_usuario\n                              where evus_estado='P'";
        return QUERY;
    };
    Query.saveEventousuario = function (eventousuario) {
        var today = new Date();
        var QUERY = "INSERT INTO evento_usuario (\n                            evus_evento,\n                            evus_usuario,\n                            evus_fechahora\n                            ) VALUES (\n                            " + sqlstring_1.default.escape(eventousuario.evento) + ",\n                            " + sqlstring_1.default.escape(eventousuario.usuario) + ",\n                            '" + today.toISOString().substring(0, 10) + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + "');";
        return QUERY;
    };
    Query.deleteEvento = function (evento, id) {
        var QUERY = "UPDATE evento_usuario SET evus_estado = 'I' WHERE evus_evento = " + sqlstring_1.default.escape(evento) + " and evus_usuario= " + sqlstring_1.default.escape(id) + ";";
        return QUERY;
    };
    Query.aceptarUsuarioEvento = function (evento, id) {
        var QUERY = "UPDATE evento_usuario SET evus_estado = 'G' WHERE evus_evento = " + sqlstring_1.default.escape(evento) + " and evus_usuario= " + sqlstring_1.default.escape(id) + ";";
        return QUERY;
    };
    Query.listarUsuariosAprobados = function () {
        var QUERY = "SELECT eu.*,concat(p.pers_primernombre,' ',p.pers_primerapellido) as pers_primernombre,\n                                        p.pers_telefono, p.pers_correo, e.even_descripcion\n                              FROM evento_usuario eu\n                              LEFT JOIN eventos AS e on eu.evus_evento=e.even_codigo\n                              LEFT JOIN personas AS p ON p.pers_documento=eu.evus_usuario\n                              where evus_estado='G'";
        return QUERY;
    };
    return Query;
}());
exports.default = Query;
