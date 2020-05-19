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
    Query.getPersona = function (id) {
        var QUERY = "SELECT * FROM personas WHERE pers_documento =  " + sqlstring_1.default.escape(id) + ";";
        return QUERY;
    };
    Query.getListarPersonas = function () {
        var QUERY = "SELECT * FROM personas;";
        return QUERY;
    };
    Query.getListarOganizador = function () {
        var QUERY = "SELECT prs.* FROM organizadores org \n                            LEFT JOIN personas prs on org.orgn_documento = prs.pers_documento;";
        return QUERY;
    };
    Query.getUsuario = function (id, clave) {
        var QUERY = "SELECT * FROM personas\n        WHERE pers_documento=" + sqlstring_1.default.escape(id) + " AND pers_clave= " + sqlstring_1.default.escape(clave) + ";";
        return QUERY;
    };
    Query.savePersona = function (persona) {
        var today = new Date();
        var QUERY = "INSERT INTO personas (\n                            pers_documento,\n                            pers_tipodocumento,\n                            pers_primernombre,\n                            pers_segundonombre, \n                            pers_primerapellido, \n                            pers_segundoapellido,\n                            pers_telefono,\n                            pers_direccion,\n                            pers_clave,\n                            pers_correo\n                            ) VALUES(\n                            " + sqlstring_1.default.escape(persona.id) + ",\n                            " + sqlstring_1.default.escape(persona.tipodocumento) + ",\n                            " + sqlstring_1.default.escape(persona.primernombre) + ",\n                            " + sqlstring_1.default.escape(persona.segundonombre) + ",\n                            " + sqlstring_1.default.escape(persona.primerapellido) + ",\n                            " + sqlstring_1.default.escape(persona.segundoapellido) + ",\n                            " + sqlstring_1.default.escape(persona.telefono) + ",\n                            " + sqlstring_1.default.escape(persona.direccion) + ",\n                            " + sqlstring_1.default.escape(persona.clave) + ",\n                            " + sqlstring_1.default.escape(persona.correo) + ");";
        return QUERY;
    };
    return Query;
}());
exports.default = Query;
