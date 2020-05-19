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
    // Si te actualizó
    Query.getListar = function () {
        var QUERY = "SELECT * FROM ponencias";
        return QUERY;
    };
    Query.savePonencia = function (ponencia) {
        var today = new Date();
        var QUERY = "INSERT INTO ponencias ( ponc_salon, ponc_lugar,\n            ponc_evento,ponc_ponente, ponc_descripcion, ponc_fecha,ponc_horainicio,ponc_horaclausura,ponc_tipo) VALUES(\n                            " + sqlstring_1.default.escape(ponencia.salon) + ",\n                            " + sqlstring_1.default.escape(ponencia.lugar) + ",\n                            " + sqlstring_1.default.escape(ponencia.evento) + ",\n                            " + sqlstring_1.default.escape(ponencia.ponente) + ",\n                            " + sqlstring_1.default.escape(ponencia.descripcion) + ",\n                            " + sqlstring_1.default.escape(ponencia.fecha) + ",\n                            " + sqlstring_1.default.escape(ponencia.horainicio) + ",\n                            " + sqlstring_1.default.escape(ponencia.horaclausura) + ",\n                            " + sqlstring_1.default.escape(ponencia.tipo) + ");";
        return QUERY;
    };
    Query.updatePonencia = function (ponencia) {
        var today = new Date();
        var QUERY = "UPDATE ponencia SET ponc_ponente = " + sqlstring_1.default.escape(ponencia.ponente) + ",\n                                     ponc_descripcion = " + sqlstring_1.default.escape(ponencia.descripcion) + ",\n                                     ponc_fecha = " + sqlstring_1.default.escape(ponencia.fecha) + ",\n                                     ponc_horainicio = " + sqlstring_1.default.escape(ponencia.horainicio) + ",\n                                     ponc_horaclausura = " + sqlstring_1.default.escape(ponencia.horaclausura) + ",\n                                     ponc_tipo = " + sqlstring_1.default.escape(ponencia.tipo) + "';";
        return QUERY;
    };
    return Query;
}());
exports.default = Query;
