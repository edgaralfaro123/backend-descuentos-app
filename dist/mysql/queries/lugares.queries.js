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
    Query.getLugar = function (id) {
        var QUERY = "SELECT * FROM lugares WHERE lugr_id = " + sqlstring_1.default.escape(id) + ";";
        return QUERY;
    };
    Query.getListarTodos = function () {
        var QUERY = "SELECT * FROM lugares";
        return QUERY;
    };
    Query.saveLugar = function (lugar) {
        var today = new Date();
        var QUERY = "INSERT INTO lugares ( \n                            lugr_nombre, \n                            lugr_direccion,\n                            lugr_pais,\n                            lugr_estado, \n                            lugr_ciudad, \n                            lugr_tipo,\n                            lugr_img \n                            ) VALUES(\n                            " + sqlstring_1.default.escape(lugar.nombre) + ",\n                            " + sqlstring_1.default.escape(lugar.direccion) + ",\n                            " + sqlstring_1.default.escape(lugar.pais) + ",\n                            " + sqlstring_1.default.escape(lugar.estado) + ",\n                            " + sqlstring_1.default.escape(lugar.ciudad) + ",\n                            " + sqlstring_1.default.escape(lugar.tipo) + ",\n                            " + sqlstring_1.default.escape(lugar.imagen) + ");";
        return QUERY;
    };
    Query.updateLugar = function (lugar) {
        var today = new Date();
        var QUERY = "UPDATE lugares SET lugr_nombre = " + sqlstring_1.default.escape(lugar.nombre) + ",\n                                    lugr_direccion = " + sqlstring_1.default.escape(lugar.direccion) + ",\n                                    lugr_pais = " + sqlstring_1.default.escape(lugar.pais) + ",\n                                    lugr_estado = " + sqlstring_1.default.escape(lugar.estado) + ",\n                                    lugr_ciudad = " + sqlstring_1.default.escape(lugar.ciudad) + ",\n                                    lugr_tipo = " + sqlstring_1.default.escape(lugar.tipo) + ",\n                                    lugr_img = " + sqlstring_1.default.escape(lugar.imagen) + "';";
        return QUERY;
    };
    return Query;
}());
exports.default = Query;
