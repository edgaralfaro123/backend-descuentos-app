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
    Query.getUsuario = function (id, clave) {
        var QUERY = "SELECT usua_id,usua_contrasena FROM usuario\n        WHERE usua_id=" + sqlstring_1.default.escape(id) + " AND usua_contrasena= " + sqlstring_1.default.escape(clave) + ";";
        return QUERY;
    };
    Query.saveUsuario = function (usuario) {
        var today = new Date();
        var QUERY = "INSERT INTO solucion_eventos_cua.usuario (\n                            usua_id, \n                            usua_contrasena, \n                            usua_status\n                            ) VALUES(\n                            " + sqlstring_1.default.escape(usuario.codigo) + ",\n                            " + sqlstring_1.default.escape(usuario.nombre) + ",\n                            " + sqlstring_1.default.escape(usuario.status) + ");";
        return QUERY;
    };
    return Query;
}());
exports.default = Query;
