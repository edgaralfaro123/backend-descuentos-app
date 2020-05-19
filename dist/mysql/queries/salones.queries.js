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
    Query.getSalonesByLugar = function (lugar) {
        var QUERY = "SELECT * FROM salones WHERE saln_lugar = " + sqlstring_1.default.escape(lugar) + ";";
        return QUERY;
    };
    Query.getSalonesVacios = function () {
        var QUERY = "SELECT '' as sanl_id,''  AS  sanl_codigo,'' AS  sanl_lugar,\n                            '' AS  sanl_capacidad,'' AS  sanl_tipo,'' AS  sanl_img \n                            FROM salones LIMIT 1;";
        return QUERY;
    };
    Query.saveSalon = function (salon) {
        var today = new Date();
        var QUERY = "INSERT INTO salones ( \n                            saln_codigo, \n                            saln_nombre,\n                            saln_lugar,\n                            saln_capacidad, \n                            saln_tipo, \n                            saln_img\n                            ) VALUES(\n                            " + sqlstring_1.default.escape(salon.codigo) + ",\n                            " + sqlstring_1.default.escape(salon.nombre) + ",\n                            " + sqlstring_1.default.escape(salon.lugar) + ",\n                            " + sqlstring_1.default.escape(salon.capacidad) + ",\n                            " + sqlstring_1.default.escape(salon.tipo) + ",\n                            " + sqlstring_1.default.escape(salon.imagen) + ");";
        return QUERY;
    };
    return Query;
}());
exports.default = Query;
