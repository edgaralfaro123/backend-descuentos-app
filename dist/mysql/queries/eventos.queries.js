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
    Query.getListarTodos = function () {
        var QUERY = "SELECT  e.*, l.*\n                            FROM eventos e\n                            LEFT JOIN lugares l\n                            ON e.even_lugar = l.lugr_id;";
        return QUERY;
    };
    Query.getListarActivos = function () {
        var QUERY = "SELECT  e.*, l.*\n                            FROM eventos e\n                            LEFT JOIN lugares l\n                            ON e.even_lugar = l.lugr_id\n                            WHERE even_estatus NOT IN (" + 7 + "," + 8 + ")";
        return QUERY;
    };
    Query.getListarValidos = function () {
        var QUERY = "SELECT *\n                             FROM eventos\n                             WHERE even_fechaclausura>=CURDATE()";
        return QUERY;
    };
    Query.getListarValidos2 = function () {
        var QUERY = "SELECT e.*, l.*\n                         FROM eventos e\n                         LEFT JOIN lugares l\n                         ON e.even_lugar = l.lugr_id\n                         WHERE e.even_fechaclausura>=CURDATE()";
        return QUERY;
    };
    Query.saveEvento = function (evento) {
        var today = new Date();
        var QUERY = "INSERT INTO eventos (even_nombre, even_descripcion, even_fechaapertura,\n                            even_fechaclausura, even_cronograma, even_horaapertura, even_horaclausura,\n                            even_lugar,even_organizador, even_img, even_usuariocreacion, even_fechacreacion,\n                            even_gratis,even_valor,even_estatus\n                            ) VALUES(\n                            " + sqlstring_1.default.escape(evento.nombre) + ",\n                            " + sqlstring_1.default.escape(evento.descripcion) + ",\n                            " + sqlstring_1.default.escape(evento.fechaApertura) + ",\n                            " + sqlstring_1.default.escape(evento.fechaClausura) + ",\n                            " + sqlstring_1.default.escape(evento.cronograma) + ",\n                            " + sqlstring_1.default.escape(evento.horaApertura) + ",\n                            " + sqlstring_1.default.escape(evento.horaClausura) + ",\n                            " + sqlstring_1.default.escape(evento.lugar) + ",\n                            " + sqlstring_1.default.escape(evento.organizador) + ",\n                            " + sqlstring_1.default.escape(evento.imagen) + ",\n                            " + sqlstring_1.default.escape(evento.usuarioCreacion) + ",\n                            '" + today.toISOString().substring(0, 10) + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + "',\n                            " + sqlstring_1.default.escape(evento.gratis) + ",\n                            " + sqlstring_1.default.escape(evento.valor) + ",\n                            " + 1 + ");";
        return QUERY;
    };
    Query.updateEvento = function (evento) {
        var today = new Date();
        var QUERY = "UPDATE eventos SET even_nombre = " + sqlstring_1.default.escape(evento.nombre) + ",\n                                    even_descripcion = " + sqlstring_1.default.escape(evento.descripcion) + ",\n                                    even_fechaapertura = " + sqlstring_1.default.escape(evento.fechaApertura) + ",\n                                    even_fechaclausura = " + sqlstring_1.default.escape(evento.fechaClausura) + ",\n                                    even_cronograma = " + sqlstring_1.default.escape(evento.cronograma) + ",\n                                    even_horaapertura = " + sqlstring_1.default.escape(evento.horaApertura) + ",\n                                    even_horaclausura = " + sqlstring_1.default.escape(evento.horaClausura) + ",\n                                    even_lugar = " + sqlstring_1.default.escape(evento.lugar) + ",\n                                    even_organizador = " + sqlstring_1.default.escape(evento.organizador) + ",\n                                    even_img = " + sqlstring_1.default.escape(evento.imagen) + ",\n                                    even_usuariomodificacion = " + sqlstring_1.default.escape(evento.usuarioModificacion) + ",\n                                    even_fechamodificacion = '" + today.toISOString().substring(0, 10) + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + "',\n                                    even_gratis = " + sqlstring_1.default.escape(evento.gratis) + ",\n                                    even_valor = " + sqlstring_1.default.escape(evento.valor) + ",\n                                    WHERE even_codigo = '" + sqlstring_1.default.escape(evento.codigo) + "';";
        return QUERY;
    };
    Query.deleteEvento = function (id) {
        var QUERY = "UPDATE eventos SET even_estatus = 8 WHERE even_codigo = " + sqlstring_1.default.escape(id) + ";";
        return QUERY;
    };
    return Query;
}());
exports.default = Query;
